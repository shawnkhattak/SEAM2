# Local Setup

## Required Local Tools

Shawn should only need:

- Docker Desktop
- Git
- VS Code
- Oceans-X API key
- Optional AI provider API key

## Intended Commands

Start the full local stack:

```bash
./start.sh
```

Stop the local stack:

```bash
./stop.sh
```

## Expected Local URLs

- Backend API docs: `http://localhost:8000/docs`
- Backend health: `http://localhost:8000/api/health`
- Frontend: `http://localhost:5173`

## Backend Health Check

After the backend is running, verify it with:

```bash
curl http://localhost:8000/api/health
```

Expected response:

```json
{
  "status": "ok",
  "service": "SEAM backend"
}
```
