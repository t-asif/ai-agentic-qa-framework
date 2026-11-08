# AI Agentic QA Framework

A starter repository for organizing quality checks for AI applications. The current implementation contains a Playwright UI smoke test; the `agentic-tests`, `llm-evals`, and `rag-evals` directories are placeholders for future test suites.

## Requirements

- Node.js and npm
- A supported Playwright browser (Chromium for the current test)
- Network access to Hugging Face for the current UI test

## Setup

Install the JavaScript dependencies and the Chromium browser:

```bash
npm install
npx playwright install chromium
```

## Run the UI test

Run the current Playwright spec directly:

```bash
npx playwright test tests/ui-playwright/specs/login.spec.ts
```

The test in `tests/ui-playwright/specs/login.spec.ts` opens `https://huggingface.co/chat/`, selects **Start chatting**, and checks that a **Log In** control appears. It depends on the external site being reachable and its UI remaining compatible with the selectors in the test; it does not test a locally hosted chatbot.

To run TypeScript checking:

```bash
npx tsc --noEmit
```

The `npm test` script is currently a placeholder and exits with an error. Use the Playwright command above to run the existing UI test.

## Project structure

```text
.
├── package.json
├── tsconfig.json
└── tests/
    ├── agentic-tests/       # Placeholder for agent behavior tests
    ├── llm-evals/           # Placeholder for language-model evaluations
    ├── rag-evals/           # Placeholder for retrieval-augmented generation evaluations
    └── ui-playwright/
        ├── pages/           # Page-object area
        └── specs/
            └── login.spec.ts
```

## Dependencies

- **Playwright Test** runs browser-based tests.
- **TypeScript** provides type checking for the TypeScript test files.
- **Promptfoo** is installed as a development dependency for potential LLM evaluation workflows; no Promptfoo evaluation is configured yet.

## Extending the framework

Add test files under the appropriate directory in `tests/`. For browser tests, place specs under `tests/ui-playwright/specs/` and run them with `npx playwright test`. Add the required configuration and scripts when introducing additional runners or evaluation suites.
