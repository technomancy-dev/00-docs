---
Date: 2024-07-01

Status: accepted
---


# Start the project with a SQLite database.

## Context

Postgresql is another excellent option, but has features SQLite does not support.

## Decision

Start with SQLite as this makes running 00 even on a home sever very easy. Postgresql will be easy to support at a later date, and it would be more complicated to start with Postgres and move to support SQLite later.

## Consequences

Certain people really want Postgres, so this should be addressed sooner rather than later.
