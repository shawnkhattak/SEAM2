#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: $0 <wiki-git-url>" >&2
  echo "Example: $0 git@github.com:OWNER/REPO.wiki.git" >&2
  exit 1
fi

WIKI_URL="$1"
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WIKI_SOURCE_DIR="$ROOT_DIR/docs/wiki"
WORK_DIR="$(mktemp -d)"

cleanup() {
  rm -rf "$WORK_DIR"
}
trap cleanup EXIT

if [[ ! -d "$WIKI_SOURCE_DIR" ]]; then
  echo "Wiki source directory not found: $WIKI_SOURCE_DIR" >&2
  exit 1
fi

git clone "$WIKI_URL" "$WORK_DIR/wiki"
rsync -a --delete --exclude='.git' "$WIKI_SOURCE_DIR/" "$WORK_DIR/wiki/"

cd "$WORK_DIR/wiki"
if git diff --quiet --exit-code && [[ -z "$(git status --short)" ]]; then
  echo "GitHub Wiki is already up to date."
  exit 0
fi

git add .
git commit -m "Update SEAM wiki documentation"
git push origin HEAD
