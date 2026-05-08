# Core Tables

## Maritime Tables

- `vessels`: one row per known vessel.
- `vessel_positions`: latest known position per vessel for Version 1.
- `port_events`: arrivals, departures, due arrivals, due departures, and movements.
- `reference_data`: countries, ports, locations, and vessel type labels.

## Graph and Entity Tables

- `entities`: companies, owners, managers, countries, ports, people, sanctions entities, and other non-vessel nodes.
- `relationships`: graph-style connections between vessels, entities, port events, sanctions records, news articles, and risk flags.

## Risk and Context Tables

- `sanctions_records`: sanctions/compliance records, primarily from OpenSanctions.
- `news_articles`: maritime or compliance-related news.
- `risk_flags`: transparent risk labels with evidence.

## Operational Tables

- `source_health`: API endpoint health.
- `ingestion_jobs`: each ingestion run.
- `ingestion_logs`: debug logs for ingestion runs.
