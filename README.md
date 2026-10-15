# Math Step

Math Step helps students solve linear equations. The website uses simple A2 English.

## What it does
- Foundation: x + b = c, with small steps and direct hints.
- Standard: ax + b = c, with two steps.
- Advanced: a(x + b) = c, with a ticket and snack problem.
- Students can change the level, try a new question, check an answer, read hints and see the full solution.
- The AI tutor gives a hint or feedback for the chosen level and answer.
- The program checks answers using numbers. It does not ask AI to decide if an answer is right.

## Run the project
Use Node.js 22.13 or later and pnpm.

```sh
pnpm install
pnpm dev
```

For AI, add OPENAI_API_KEY to the server environment. OPENAI_MODEL is optional and defaults to gpt-4o-mini. For local testing, use the environment loader supported by your host, or export these variables before starting the server. Never put a real key in browser code, Git, or the README. The example file only shows variable names. On Sites, set the key as a secret and deploy again.

```sh
pnpm build
pnpm start
```

## Main files
- app/page.tsx: page, levels, answer box, hints and progress.
- app/globals.css: desktop and phone layout.
- lib/math.ts: task generation, checked steps and answer checks.
- app/api/tutor/route.ts: server-only AI request, prompt and error handling.
- REPORT.html: short A2 report; open it and print to PDF on A4.
- scripts/test-math.mjs: math and input tests.

## AI prompt
The full prompt is in app/api/tutor/route.ts. It tells AI to use A2 English, keep the checked equation, give one useful step, and adapt the help to Foundation, Standard or Advanced. A hint must not reveal the final answer. The server sends the task, checked steps, request type and numeric answer. It uses the OpenAI Responses API with a JSON schema.

Reference: https://developers.openai.com/api/docs/guides/structured-outputs

## Status and limits
The AI code is included. Without a server API key, the site clearly says AI is not connected. Built-in hints are checked program content, not AI output. AI text can still contain errors, so checked solutions stay available. Live AI tests must be completed after the key is set.

The initial Sites deployment is private. Give the teacher access before submission. A public GitHub or GitLab repository is also required by the assignment; the Sites source repository alone is not a replacement.

## Before submission
1. Connect the AI key and test hints and feedback at all three levels.
2. Publish the source to your public GitHub or GitLab repository.
3. Make sure your teacher can open the live website.
4. Add your name, website link and repository link to the report.
5. Read, understand and adapt the work. Follow your course rules on AI assistance; do not claim that AI-assisted code is fully your own work.
