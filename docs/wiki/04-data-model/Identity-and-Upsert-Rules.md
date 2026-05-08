# Identity and Upsert Rules

## Vessel Matching Order

Use IMO number when valid.

Fallback matching order:

1. IMO number, if non-empty and not `0`.
2. MMSI number, if non-empty.
3. Call sign + vessel name.
4. Vessel name only, but mark confidence lower.

## Latest Position Rule

Version 1 keeps the latest position only by replacing or updating the current vessel position. Version 2 can add `vessel_position_history`.

## Coordinate Rule

Use `latitudeDegrees` and `longitudeDegrees` for map display when available because those appear to be normal geographic coordinates. Store raw `latitude` and `longitude` too, but do not use them for map display unless confirmed.

## Port Event Deduplication

Create a deterministic event key using:

```text
vessel_id + event_type + event_timestamp + location_from + location_to
```

Do not create duplicate port events if the same job is run multiple times.
