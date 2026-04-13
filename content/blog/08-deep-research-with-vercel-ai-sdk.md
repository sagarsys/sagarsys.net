---
title: Building a Deep Research Chatbot with Vercel AI SDK
description: Build a deep research chatbot with Vercel AI SDK, from query generation and web search to recursive follow-ups, structured output and streamed reports.
date: 2026-04-08
author: Sagar Sawuck
categories:
  - AI
  - TypeScript
  - Vercel AI SDK
  - React
tags:
  - Vercel AI SDK
  - Deep Research
  - LLMs
  - Agent-based AI
  - Next.js
featured: true
image: /images/blog/08-deep-research-ai/cover.png
order: 8
---

# Building a Deep Research Chatbot with Vercel AI SDK

I’ve been playing around with the **Vercel AI SDK** lately, and it’s one of those tools that feels friendly surprisingly quickly. It gives you a clean TypeScript-first way to work with models, structured output, and “agent-ish” flows without turning your app into a spaghetti buffet. The official docs describe it as a TypeScript toolkit for building AI apps and agents across frameworks like React and Next.js.

In this post we’ll build a **deep research chatbot**: you ask a question, it fans out into search queries, pulls web sources, extracts learnings + follow-up questions, and finally writes a **markdown report**—while streaming progress updates back to the UI. 

The full repo is here: **https://github.com/sagarsys/vercel-ai-deep-research-chatbot**

A quick note: this is a practical blog post (not a workshop). I’m leaning on the latest Vercel docs for the agent building blocks and deployment bits.

## What we’re building

![Deep Research chatbot UI (demo)](/images/blog/08-deep-research-ai/deep-search-ai-tool.gif)

When people say “deep research,” it sounds like a mysterious feature only available to models living in secret underground data centers.

In reality, it’s just a loop:

- start with a user question
- generate a few focused search queries
- fetch sources
- keep the good ones (dedupe the rest)
- extract learnings + follow-ups
- recurse a couple of rounds
- write a report

![Overview](/images/blog/08-deep-research-ai/1.png)

This approach mirrors how Vercel describes agents: a loop where a model interprets input, picks an action/tool, runs it, and updates context for the next decision.

Here’s the fun part: in the chatbot version, you don’t “wait for the final answer” in silence. The UI streams progress as the research runs.

## The basic building blocks

Vercel’s own [“How to build AI Agents with Vercel and the AI SDK”](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk?utm_source=chatgpt.com) guide breaks the mental model into a few building blocks: call a model, define tools, run multi-step loops, then deploy and observe. You may want to read it first.

### Call a model

At the simplest level, you call a model with `generateText` and get text back.

One detail from the Vercel guide that matters in real apps: **if you’re using Vercel AI Gateway**, you can often reference a model by string (like `"openai/gpt-4o"`) without importing a provider package. That’s also how the chatbot repo is set up: it uses a string model name (`openai/gpt-4o`) via the AI SDK.

### Tools

Tools are functions the model can call to take actions (searching, fetching data, creating tickets, summoning snacks… you get the idea). Vercel’s guide explains that the SDK handles extracting the tool call, validating inputs, executing the function, and storing the call + result in the conversation history.

In the AI SDK docs, tools have a few standard fields:
- `description` (helps the model pick the tool)
- `inputSchema` (Zod or JSON schema, also used for validation)
- `execute` (the actual function)
- optional `strict` for stricter tool calling when supported

### Multi-step loops

Agents aren’t “one request → one response.” They tend to do several steps: call tools, review results, call more tools, then produce an answer.

Vercel’s agent guide shows the multi-step concept using loop control like `stopWhen` and `stepCountIs`, so you can cap how many steps the loop is allowed to take.

The docs also note that the default stop condition for agent loops is `stepCountIs(20)`, unless you override it.

In this chatbot project, the “loop” is implemented as **explicit recursion** (depth/breadth), rather than “tool-loop until stopWhen.”

### UI building blocks

AI SDK also ships UI helpers; for example the `useChat` hook streams messages in real time and manages chat state for you.
This repo goes for a custom approach (SSE events) instead of `useChat`, mainly because “research progress events” aren’t quite the same thing as “chat tokens.”

## A minimal deep research pipeline

![Deep Research pipeline](/images/blog/08-deep-research-ai/3.png)

Let’s walk through the pipeline using the actual patterns from the deployed chatbot.

The project depends on:
- `ai` (AI SDK Core)
- `@ai-sdk/react` (UI package)
- `exa-js` (web search)
- Next.js + React

### Generate search queries with structured output

The chatbot repo generates search queries with `generateObject`, guaranteeing a predictable response shape (`{ queries: string[] }`).

Simplified version:

```ts
import { generateObject } from 'ai'
import { z } from 'zod'

const model = 'openai/gpt-4o'

export async function generateSearchQueries(topic: string, n = 3) {
  const { object } = await generateObject({
    model,
    prompt: `Generate ${n} search queries for: ${topic}. Return JSON: {"queries":["..."]}`,
    schema: z.object({ queries: z.array(z.string()).min(1).max(5) }),
  })

  return object.queries
}
```
Why this matters: if you don’t use structured output here, you’ll spend the rest of your project parsing bullet points like it’s 2009 and you’re scraping HTML.

### Search the web with Exa
The repo uses Exa’s `searchAndContents()` to fetch one relevant result per query (title, url, text).

Exa positions its JS SDK as the official way to search + retrieve page contents.

Simplified:

```ts
import Exa from 'exa-js'

const exa = new Exa(process.env.EXA_API_KEY!)

export async function searchWeb(query: string) {
    const { results } = await exa.searchAndContents(query, {
        numResults: 1,
        text: true,
    })

    return results.map(r => ({
        title: r.title,
        url: r.url,
        content: r.text,
    }))
}
```

### Evaluate and dedupe sources
The chatbot repo uses a simple “relevant vs irrelevant” evaluation step and checks whether the URL was previously stored (dedupe).

In other words: “stop re-discovering Wikipedia like it’s the lost city of Atlantis.”

### Extract learnings and follow-up questions
Once a source is kept, the next step is to extract:
- a learning
- follow-up questions (to guide recursion)

That’s exactly what the repo’s `generateLearnings()` does using `generateObject`.

### Depth and breadth recursion
The recursive function in `agents.ts` expands the research by:

- generating queries (breadth)
- processing them
- generating follow-ups
- calling itself with depth - 1 and reduced breadth

This is the core “deep research” behavior, and it’s intentionally bounded: in `stream-utils.ts`, depth and breadth are set to 2 by default.

That default is a good starting point for most people:

- fast feedback
- low cost
- less chance of looping forever because one follow-up question was too curious

### Generate the final report
The repo uses streamText to generate the final markdown report, then streams chunks to the UI as progress events.

In practice, your report step is where you want:

- a “report style” system prompt
- clear formatting rules (headings, citations, bullet limits)
- maybe a template

That’s also where you can add citations from your sources if you store them in your research object. Vercel’s agent guide encourages being organized and observable—citations are part of building trust.

![Example generated markdown report (demo)](/images/blog/08-deep-research-ai/screenshot.png)


## Streaming outputs in the demo
This is the fun part: the project streams research progress over Server-Sent Events (SSE).

On the server:
- it creates a ReadableStream
- emits progress events (like “research_started”)
- runs deepResearch()
- runs generateReport()
- emits a final “final_report” event with the markdown content

On the client:
-it fetches `/api/research`
- uses `response.body.getReader()`
- decodes chunks
- parses SSE events
- updates UI state as events arrive

- This is a nice UX win because it turns “blank screen while models think” into “you can see progress and sources being discovered.”

![Deep Research chatbot UI (demo)](/images/blog/08-deep-research-ai/deep-search-ai-tool.gif)


Two deployment details to keep in mind (especially if you go deeper on streaming in a future post):

- Vercel notes that the Edge runtime must start sending a response within 25 seconds to keep streaming beyond that, and can continue streaming for up to 300 seconds.
- Vercel charges function duration based on total elapsed time, including time spent waiting on a streamed response—so streaming is great UX, but it’s still “real time.”

Teaser: I’ll likely write a follow-up post comparing three streaming patterns:
- `streamText` responses directly to the UI
- SSE (like this project)
- AI SDK UI transport (`useChat` / default streaming protocols)

## Deploying on Vercel without surprises
Vercel’s “How to build AI Agents…” guide recommends deploying the agent as an API route, and calls out `maxDuration` as an important control for longer-running agent work.

Here’s a practical deployment checklist for this chatbot:

### Environment variables

You’ll need at least:
- EXA_API_KEY (for Exa search)
- an AI provider key / gateway key (because we’re calling a model, e.g. "openai/gpt-4o")

Vercel’s env var docs are blunt (and very correct):
- values are encrypted at rest
- changes apply only to new deployments
- you need to redeploy for updates to take effect

### Function duration
Deep research can take time, especially if you bump depth/breadth.

Vercel supports setting max duration directly in Next.js route handlers via:

```ts
export const maxDuration = 300
```

That pattern is documented in the function duration guide.

Vercel’s agent KB guide also recommends setting `maxDuration` based on complexity and notes that longer durations are useful for agents.

Also important: with fluid compute enabled, Vercel’s function limits show common defaults like **300s** (Hobby/Pro) and maximums up to **800s** on Pro/Enterprise for Node.js runtimes.

### Observability and debugging
When something goes wrong (and it will—usually at the worst possible time), Vercel’s guide calls out using the dashboard’s Observability and Logs to inspect behavior, latency, and errors.

For a research agent, I’d add logs for:
- each generated query
- each source URL kept/discarded
- total tokens / time per phase (optional, but nice)

## Conclusion
If you’re a frontend dev who likes building practical tools, the Vercel AI SDK hits a sweet spot: it standardizes the messy parts of working with models and gives you primitives for structured output, tools, and streaming.

This project is also a nice reminder that “agents” don’t need to be complicated:

- a bit of structure (generateObject)
- a controlled loop (depth/breadth)
- decent guardrails (dedupe + evaluation)
- and a UI that shows progress (SSE streaming)

![AI Flow overview](/images/blog/08-deep-research-ai/4.png)

And suddenly you’ve got something that feels way more “product-like” than a one-off prompt.

Links and references:
- [Github repo](https://github.com/sagarsys/vercel-ai-deep-research-chatbot)
- [Vercel AI SDK docs](https://vercel.com/docs/concepts/ai-sdk)
- [Vercel AI SDK guide](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk?utm_source=chatgpt.com)
- [Vercel AI SDK GitHub repo](https://github.com/vercel/ai)
- [Vercel AI SDK React package](https://github.com/vercel/ai/tree/main/packages/react)
- [Exa docs](https://docs.exa.dev/)
- [Exa GitHub repo](https://github.com/exa-dev/exa)