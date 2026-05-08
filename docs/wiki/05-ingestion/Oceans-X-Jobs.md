# Oceans-X Jobs

## Priority 1 Jobs

1. Vessel positions snapshot.
2. Vessel particulars by IMO number.
3. Vessels due to arrive for next N hours.
4. Vessels due to depart for next N hours.
5. Country codes JSON.
6. Port codes JSON.
7. Vessel type codes JSON.

## Priority 2 Jobs

1. Vessel movements by IMO number.
2. Vessel arrivals for past N hours.
3. Vessel departures for past N hours.
4. Location codes JSON.

## Key Routes

```text
POST /api/ingestion/oceans-x/positions/snapshot/run
POST /api/ingestion/oceans-x/vessels/{vessel_id}/particulars/run
POST /api/ingestion/oceans-x/vessels/{vessel_id}/movements/run
POST /api/ingestion/oceans-x/arrivals/next-hours/run
POST /api/ingestion/oceans-x/departures/next-hours/run
POST /api/ingestion/oceans-x/arrivals/past-hours/run
POST /api/ingestion/oceans-x/departures/past-hours/run
POST /api/ingestion/oceans-x/reference/countries/run
POST /api/ingestion/oceans-x/reference/ports/run
POST /api/ingestion/oceans-x/reference/locations/run
POST /api/ingestion/oceans-x/reference/vessel-types/run
```
