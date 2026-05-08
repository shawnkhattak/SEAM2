# Deployment Later

Version 1 is local-first.

Production can come later:

```text
Frontend: Vercel, Netlify, or static hosting
Backend: Render, Railway, Fly.io, AWS, or DigitalOcean
Database: Managed PostgreSQL/PostGIS
Secrets: platform environment variables
Scheduled jobs: backend worker or cron
```

Do not optimize for production deployment until local Version 1 works.
