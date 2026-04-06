# Clean Duplicate or Unused Code

## When to Use

- Removing duplicate logic in a specific package
- Unifying repeated functions or components
- Cleaning unused code without changing behavior

## Critical Rules

- Follow `docs/agent-guides/nextjs.md`.
- Apply changes only to the specified package.
- Modify other packages only if required by dependencies.
- Do not remove functionality that is in use.

## Testing Requirements

- If you create new utilities, add unit tests.
- Use `docs/agent-guides/vitest.md` for test structure.

## Validation

1. Run tests in the package:
   - `yarn test`
2. Run Biome:
   - `yarn biome check`

Both must pass before completion.

## References

- `docs/agent-guides/nextjs.md`
- `docs/agent-guides/vitest.md`
