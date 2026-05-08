# Map and Graph APIs

## Map API

```text
GET /api/map/vessels
```

Expected lightweight response item:

```json
{
  "vessel_id": "uuid",
  "vessel_name": "Example Vessel",
  "imo_number": "1234567",
  "flag": "SG",
  "vessel_type": "CS",
  "latitude": 1.28,
  "longitude": 103.85,
  "heading": 120,
  "speed": 5.2,
  "has_risk_flags": true
}
```

## Graph API

```text
GET /api/graph/entity/{entity_type}/{entity_id}
GET /api/graph/search?q=...
```

Expected response shape:

```json
{
  "nodes": [
    {
      "id": "vessel:uuid",
      "type": "vessel",
      "label": "Example Vessel",
      "data": {}
    }
  ],
  "edges": [
    {
      "id": "relationship:uuid",
      "source": "vessel:uuid",
      "target": "entity:uuid",
      "type": "vessel_registered_owner",
      "label": "registered owner",
      "evidence_summary": "From Oceans-X vessel particulars"
    }
  ]
}
```
