# Frontend Pages

## Map Dashboard `/`

Main product view with Singapore-centered vessel map, vessel marker layer, floating panel, vessel search, risk flags, mini graph preview, and AI explanation panel.

## Dev Dashboard `/dev`

Backend monitoring and ingestion control center with stats, source health, ingestion controls, job history, logs, recent vessels, and database summary.

## Vessel Detail `/vessels/:vesselId`

Vessel header, particulars, latest position, Singapore port activity, relationships, risk flags, related news, AI explanation, and raw source payload toggle.

## Entity Detail `/entities/:entityId`

Entity details, connected vessels, connected sanctions records, connected news, risk flags, relationship graph, and AI explanation.

## Relationship Graph `/graph`

Graph search, relationship graph, node detail panel, edge detail panel, and graph filters.

## Sanctions `/sanctions`

Sanctions records table, search, matched SEAM entities, match confidence, and generated risk flags.

## News `/news`

News article table, entity matches, risk keyword matches, and related vessels or companies.
