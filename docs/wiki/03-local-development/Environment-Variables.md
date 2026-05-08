# Environment Variables

The planned `.env.example` includes:

```bash
# App
APP_ENV=development
APP_NAME=SEAM
LOG_LEVEL=INFO

# Backend
BACKEND_PORT=8000
FRONTEND_PORT=5173

# Database
POSTGRES_USER=seam
POSTGRES_PASSWORD=seam
POSTGRES_DB=seam
POSTGRES_HOST=db
POSTGRES_PORT=5432
DATABASE_URL=postgresql+psycopg://seam:seam@db:5432/seam

# Oceans-X
OCEANS_X_BASE_URL=https://YOUR_OCEANS_X_DOMAIN
OCEANS_X_API_KEY=your_oceans_x_api_key
OCEANS_X_TIMEOUT_SECONDS=30

# AI Providers
AI_PROVIDER=openai
OPENAI_API_KEY=
ANTHROPIC_API_KEY=

# Frontend
VITE_API_BASE_URL=http://localhost:8000
```

Do not commit real API keys. Copy `.env.example` to `.env` for local development.
