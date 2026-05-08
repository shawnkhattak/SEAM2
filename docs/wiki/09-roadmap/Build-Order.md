# Build Order

Build SEAM Version 1 in this order:

1. Project shell.
2. Database.
3. Ingestion job framework.
4. Oceans-X client.
5. Vessel positions snapshot.
6. Dev dashboard.
7. Vessel search/detail.
8. Particulars enrichment.
9. Port activity.
10. Reference data.
11. Relationship graph backend.
12. Relationship graph frontend.
13. OpenSanctions.
14. News.
15. AI explanations.
16. Singapore map dashboard.
17. Portfolio polish.

This order keeps the project stable and prevents frontend bugs from hiding backend problems.
