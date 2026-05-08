# Oceans-X Client

Oceans-X is the primary vessel and Singapore maritime data source for Version 1.

## Client File

```text
backend/app/services/oceans_x/client.py
```

## Responsibilities

- Read base URL and API key from settings.
- Attach the `apikey` header.
- Apply request timeout.
- Retry failed requests.
- Normalize HTTP errors.
- Return parsed JSON.
- Log endpoint name and request result.

## Error Handling Rules

For every request:

- If API key is missing, fail clearly.
- If base URL is missing, fail clearly.
- If response is 401/403, mark source as failed auth.
- If response is 429, log rate-limit error.
- If response is 5xx, retry.
- If response is invalid JSON, save the response preview in logs.
- If response is empty, treat as successful but record zero records.
