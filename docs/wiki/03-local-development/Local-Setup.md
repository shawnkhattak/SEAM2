# Local Setup

## Required Local Tools

Shawn should only need:

- Docker Desktop
- Git
- VS Code
- Oceans-X API key
- Optional AI provider API key

## Verified Commands

Run these exact commands from the repository root.

Create the local environment file:

```bash
cp .env.example .env
```

Start the full local stack:

```bash
./start.sh
```

Open the backend API docs:

```text
http://localhost:8000/docs
```

Open the backend health endpoint:

```text
http://localhost:8000/api/health
```

Open the frontend dev dashboard:

```text
http://localhost:5173
```

Stop the local stack:

```bash
./stop.sh
```

## Expected Backend Health JSON

`http://localhost:8000/api/health` should return:

```json
{
  "status": "ok",
  "service": "SEAM",
  "environment": "development",
  "database": "ok"
}
```

## Expected Local URLs

- Backend API docs: `http://localhost:8000/docs`
- Backend health: `http://localhost:8000/api/health`
- Frontend: `http://localhost:5173`
