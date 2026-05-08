# Sanctions and News Ingestion

## OpenSanctions

OpenSanctions should be the primary sanctions/compliance source. Version 1 should start by matching sanctions against entities already stored in SEAM rather than trying to ingest the whole world.

### Matching Targets

- Vessel names.
- IMO numbers, if supported by source data.
- Registered owners.
- ISM managers.
- Ship managers.
- Classification societies.
- Company names.
- Person names, if any.

### Match Confidence

- `exact`
- `strong`
- `possible`
- `weak`

Create `Sanctions Match` only for exact or strong matches. Create `Possible Sanctions Match` for possible matches. Do not let AI create sanctions flags by itself.

## News

Use curated RSS feeds or a news API if available. Initial topics include Singapore maritime sanctions, Singapore shipping compliance, MPA Singapore vessel incidents, vessel sanctions shipping, and maritime compliance Singapore.

Create `Negative News Mention` flags only when article context and keywords indicate compliance or sanctions risk.
