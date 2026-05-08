#!/usr/bin/env bash
set -euo pipefail

if [[ ! -f .env && -f .env.example ]]; then
  echo "No .env file found. Copy .env.example to .env and update values before starting:"
  echo "  cp .env.example .env"
fi

docker compose up --build
