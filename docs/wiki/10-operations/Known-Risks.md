# Known Risks

## Oceans-X access or API key issues

Mitigation:

- Show source status as `not_configured` if key is missing.
- Keep ingestion routes isolated.
- Save clear logs.

## Oceans-X fields are inconsistent

Mitigation:

- Store raw payload.
- Use defensive parsers.
- Allow null fields.
- Add logs for missing identifiers.

## Vessel identity matching is messy

Mitigation:

- Prefer IMO.
- Fall back carefully.
- Track confidence.
- Avoid over-merging vessels by name only.

## Relationship graph gets confusing

Mitigation:

- Start with simple relationship types.
- Add filters.
- Add evidence panel.
- Avoid too many nodes by default.

## AI hallucinates

Mitigation:

- Provide structured facts only.
- Use strict prompt.
- Show facts used.
- Tell AI to say when data is missing.

## Frontend becomes too complex

Mitigation:

- Build dev dashboard first.
- Build map later.
- Keep state simple with TanStack Query.
- Avoid unnecessary global state.
