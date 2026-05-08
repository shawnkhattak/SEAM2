# Monorepo Structure

The planned repository layout is:

```text
SEAM/
  README.md
  .env.example
  .gitignore
  docker-compose.yml
  start.sh
  stop.sh
  Makefile

  backend/
    Dockerfile
    pyproject.toml
    alembic.ini
    app/
      main.py
      core/
      db/
      models/
      schemas/
      api/
      services/
      tests/
      alembic/

  frontend/
    Dockerfile
    package.json
    vite.config.ts
    tsconfig.json
    src/
      main.tsx
      App.tsx
      styles.css
      api/
      components/
      pages/
      types/

  docs/
    wiki/
```

`docs/wiki/` is the source of truth for the GitHub Wiki and is organized into numbered folders so project documentation stays navigable as the system grows.
