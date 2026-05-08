# AI Explanation Plan

## Rule

AI must only explain database facts.

## Prompt Requirements

The prompt should tell the AI:

- Do not add facts not present in the packet.
- If information is missing, say it is missing.
- Separate confirmed facts from recommended next steps.
- Avoid legal conclusions.
- Avoid saying an entity is guilty or sanctioned unless the data explicitly says so.

## Output Structure

```text
Summary
Key Facts
Risk Flags
Relationship Explanation
News Context
Recommended Next Checks
Missing Data
```

## API Endpoint

```text
POST /api/ai/explain/entity
```

Request:

```json
{
  "entity_type": "vessel",
  "entity_id": "uuid"
}
```

Response:

```json
{
  "entity_type": "vessel",
  "entity_id": "uuid",
  "provider": "openai",
  "explanation": "...",
  "facts_used": {},
  "created_at": "..."
}
```
