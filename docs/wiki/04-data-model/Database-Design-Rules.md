# Database Design Rules

1. Store clean normalized fields for things the app uses.
2. Store raw source payload for debugging.
3. Prefer upserts over duplicate inserts.
4. Use IMO number as primary vessel identity when possible.
5. Keep latest position separate from vessel identity.
6. Do not store fake data.
7. Keep historical snapshots out of Version 1 unless easy.

Version 1 uses PostgreSQL/PostGIS rather than a separate graph database. Relationship tables should support graph-style queries until the need for a dedicated graph database is proven.
