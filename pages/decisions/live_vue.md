---
Date: 2024-07-01

Status: accepted
---

# Live Vue should be adopted for the editor.

## Context

Live View can build complicated UI's but a whole community exists with lots of amazing libraries in JavaScript and I already have 10 years of experience in it. There are options for adding JS, most notobly at the moment Inertia, LiveSvelte and LiveVue.

## Decision

We should use LiveVue, the Vue ecosystem is robust and seems to favor "well trodden paths" and that will serve this project well. Svelte while I enjoyed it when experimenting with Fido Forms does not seem to have as extensive of an Ecosystem. Also libraries I wanted to use TipTap and Flow have Vue adaptations that matched style wise to how I would want pretty closely.
Gutentap and Vue Flow

## Consequences

We switched to a vite build system and added LiveVue. Now more robust UI's are easy, but there is some duplication of components and logic. Overall it is minimal and seems worth the trade for the scope of this project. It is likely only the editor and automations screen will need such a UI.
