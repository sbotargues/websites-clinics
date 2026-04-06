# Create Tests (Vitest)

## When to Use

- Creating new `.spec.ts` or `.spec.tsx` files
- Adding missing coverage for new functionality
- Updating existing unit tests for changes
- User asks to "add tests" or "generate unit tests"

## Critical Rules

- If a test file exists, extend it instead of creating a new one.
- Use the source file name with `.spec.ts` or `.spec.tsx`.
- Follow `docs/agent-guides/vitest.md`.
- Do not add comments inside tests.
- Ask only for missing essentials; avoid long Q&A loops.
- Always run tests and ensure they pass.
- After tests pass, run `yarn biome check <modified file>` and fix issues.

## Workflow

1. Locate the target module/component and expected behavior.
2. Find an existing test file or create one with the correct suffix.
3. Implement tests that cover the new or changed behavior.
4. Run the smallest relevant test command for the package.
5. Run biome on the modified test file and fix any issues.

## Commands

```bash
# Example: run tests in the package where the code lives
yarn test

# Lint only the modified test file after tests pass
yarn biome check path/to/file.spec.ts
```

## References

- `docs/agent-guides/vitest.md`
