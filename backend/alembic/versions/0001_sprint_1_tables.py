"""create sprint 1 operational tables

Revision ID: 0001_sprint_1_tables
Revises:
Create Date: 2026-05-08 00:00:00.000000
"""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op

revision: str = "0001_sprint_1_tables"
down_revision: str | None = None
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    op.create_table(
        "ingestion_jobs",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("source", sa.String(length=100), nullable=False),
        sa.Column("job_type", sa.String(length=100), nullable=False),
        sa.Column("status", sa.String(length=50), nullable=False),
        sa.Column("message", sa.Text(), nullable=True),
        sa.Column("started_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column("finished_at", sa.DateTime(timezone=True), nullable=True),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(op.f("ix_ingestion_jobs_id"), "ingestion_jobs", ["id"], unique=False)

    op.create_table(
        "source_health",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("source", sa.String(length=100), nullable=False),
        sa.Column("status", sa.String(length=50), nullable=False),
        sa.Column("message", sa.Text(), nullable=True),
        sa.Column("checked_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("source"),
    )
    op.create_index(op.f("ix_source_health_id"), "source_health", ["id"], unique=False)


def downgrade() -> None:
    op.drop_index(op.f("ix_source_health_id"), table_name="source_health")
    op.drop_table("source_health")
    op.drop_index(op.f("ix_ingestion_jobs_id"), table_name="ingestion_jobs")
    op.drop_table("ingestion_jobs")
