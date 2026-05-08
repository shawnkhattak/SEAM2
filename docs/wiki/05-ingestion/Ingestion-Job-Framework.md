# Ingestion Job Framework

The ingestion framework makes SEAM feel like a professional data product instead of a collection of scripts.

## Job Statuses

- `pending`
- `running`
- `success`
- `failed`
- `partial_success`

## Runner Flow

1. Create `ingestion_jobs` row with `running` status.
2. Save first `ingestion_logs` row: job started.
3. Call source service.
4. Validate response shape.
5. Upsert records.
6. Track created, updated, and failed counts.
7. Save logs for warnings and errors.
8. Update source health.
9. Mark job success, failed, or partial success.
10. Return summary.

## Manual First

In Version 1, all ingestion starts manually from the dev dashboard or API docs. No background scheduler is required at first.
