# Analyze and Fix Bugs

## When to Use

- Reviewing a package for potential bugs
- Fixing issues in TypeScript or React logic
- Improving error handling or safety

## Critical Rules

- Follow `docs/agent-guides/nextjs.md`.
- Preserve existing behavior unless it is clearly broken.
- Keep changes minimal and readable.

## Analysis Checklist

Review all TS/JS files for:

- Type safety issues
- Logic errors
- Performance problems
- Security vulnerabilities
- Potential runtime errors

### Common Bug Categories

- Null/undefined references
- Type mismatches
- Missing error handling
- Improper async/await usage
- Memory leaks
- Race conditions
- Incorrect API usage
- Missing validations
- Accessibility issues
- Performance bottlenecks

## Output

Provide a summary of:

- Issues found
- Fixes applied

## References

- `docs/agent-guides/nextjs.md`
