---
Date: 2024-07-01

Status: accepted
---

# Use SQS queue to read events.

## Context

The initial project used a SNS webhook to listen for events, talking to and looking at other products have shown they do the same. Another more reliable option would be to read from an SQS queue.

## Decision

Read from an SQS queue. This was recommended by people I know who worked at AWS, and logically seems to be the better option. It is better for the system to pull the messages when ready and not get spammed at a certain webhook when large broadcasts are being sent.

## Consequences

This adds an additional AWS resource when sending via AWS. I think however the improved reliablity of it is worth it for something as crucial as email.
