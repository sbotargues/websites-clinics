# Review and Refactor Changes

## When to Use

- Reviewing recent code changes for quality and maintainability
- Refactoring code after implementation
- Running a structured /review workflow

## Critical Rules

- Follow `AGENTS.md` and the relevant guides in `docs/agent-guides/`.
- Keep changes scoped to the files detected by the diff command.
- If a component has heavy logic, move it to a utils module.
- Ensure tests still pass for affected areas.
- Run `yarn biome check` on modified files and fix all issues.

## Workflow

1. Read project instructions from `AGENTS.md`.
2. Identify changed files:
   - `git diff --diff-filter=ACRM origin/main...HEAD --name-only`
   - `git diff --diff-filter=ACRM HEAD --name-only`
   - `git ls-files -o --exclude-standard`
3. Review and refactor for clarity, reuse, and correctness.
4. Add tests for new files or logic when needed.
5. Run tests for affected packages if they exist.
6. Run `yarn biome check <modified files>` and fix errors.
7. Provide a concise summary of changes.

## Commands

```bash
git diff --diff-filter=ACRM origin/main...HEAD --name-only
git diff --diff-filter=ACRM HEAD --name-only
git ls-files -o --exclude-standard
yarn biome check path/to/modified-file.ts
```

## References

- `AGENTS.md`
- `docs/agent-guides/nextjs.md`
- `docs/agent-guides/css.md`
- `docs/agent-guides/vitest.md`
- `docs/agent-guides/graphql.md`
