---
Date: 2024-07-01

Status: accepted
---

# Track lists and subscribers in 00

## Context

AWS SES offers list tracking and contacts, as well as templates.

## Decision

We should not use SES list tracking as it lacks features I would expect in a email tracking software, like searching through lists for certain contacts. This could be supplemented ontop of what AWS provides, but that may lead to further lock in requiring either use of more AWS services or more AWS specific code that should really remain the same no matter the provider picked.

## Consequences

Custom list logic had to be written, but this leads to less lock in for when other senders are options, and makes the application more robust. It also opens the door for saving templates and doing automations.
