## When to Use

Use this skill when:

- Development is complete and changes need to be committed
- User asks to "commit changes" or "organize commits"
- Multiple files changed and need logical grouping
- Need to follow Conventional Commits standard

## Critical Patterns

### 1. Group Changes Logically

**Analyze changed files:**
```bash
git status --short
```

**Group by:**
- Component/feature (e.g., all ProductCard changes)
- Package/folder (e.g., all @backoffice/families changes)
- Service layer (e.g., API service + hook + test)
- Configuration (e.g., all config files)

### 2. Conventional Commits Format

**Format:**
```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code refactoring
- `docs`: Documentation changes
- `style`: Formatting, missing semicolons, etc.
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `perf`: Performance improvements
- `ci`: CI/CD changes
- `build`: Build system changes

**Scope examples:**
- Component: `(ProductCard)`, `(FilterSideSheet)`
- Package: `(families)`, `(fetcher)`, `(fukku/button)`
- Feature: `(auth)`, `(checkout)`, `(search)`

**Subject rules:**
- Use imperative mood: "add" not "added"
- No capitalization
- No period at the end
- Max 50 characters

### 3. Commit Organization

**Single responsibility:**
- Each commit should represent one logical change
- If a feature requires multiple changes, split into multiple commits

**Order:**
1. Core functionality first
2. UI components second
3. Tests third
4. Documentation last

## Examples

### Feature Development

**Scenario:** Created new ProductCard component with tests

**Commits:**
```bash
# 1. Core component
git add packages/pdp/components/ProductCard/ProductCard.tsx
git add packages/pdp/components/ProductCard/ProductCard.module.scss
git commit -m "feat(ProductCard): add product card component"

# 2. Tests
git add packages/pdp/components/ProductCard/ProductCard.spec.tsx
git commit -m "test(ProductCard): add component tests"

# 3. Export
git add packages/pdp/components/ProductCard/index.ts
git commit -m "chore(pdp): export ProductCard component"
```

### Service Layer

**Scenario:** Added new API service with hook

**Commits:**
```bash
# 1. API service
git add backoffice/families/services/fetcher.ts
git commit -m "feat(families): add family fetcher service"

# 2. React hook
git add backoffice/families/services/useFamilies.ts
git commit -m "feat(families): add useFamilies hook"

# 3. Tests
git add backoffice/families/services/fetcher.spec.ts
git add backoffice/families/services/useFamilies.spec.ts
git commit -m "test(families): add service tests"
```

### Bug Fix

**Scenario:** Fixed pagination issue in table

**Commit:**
```bash
git add backoffice/mambo/components/Monitoring/Monitoring.tsx
git commit -m "fix(Monitoring): correct pagination calculation"
```

### Refactoring

**Scenario:** Extracted shared utility function

**Commit:**
```bash
git add backoffice/utils/formatDate.ts
git add backoffice/families/components/FamilyList.tsx
git add backoffice/products/components/ProductList.tsx
git commit -m "refactor(utils): extract formatDate utility function"
```

### Multiple Package Changes

**Scenario:** Updated button component in fukku and all consumers

**Commits:**
```bash
# 1. Core component
git add fukku/button/Primary/Primary.tsx
git commit -m "feat(fukku/button): add loading state to Primary button"

# 2. Update consumers
git add apps/backoffice/pages/families/index.tsx
git add backoffice/products/components/ProductForm.tsx
git commit -m "chore: update Primary button usage"
```

## Commands

**Check staged files:**
```bash
git diff --cached --name-only
```

**Check unstaged files:**
```bash
git status --short
```

**Stage specific files:**
```bash
git add path/to/file1 path/to/file2
```

**Stage by pattern:**
```bash
git add packages/pdp/**/*.tsx
```

**Review staged changes:**
```bash
git diff --cached
```

**Commit with message:**
```bash
git commit -m "feat(scope): message"
```

**Amend last commit:**
```bash
git commit --amend
```

## Decision Tree

| Scenario | Type | Example |
|----------|------|---------|
| New feature | `feat` | `feat(families): add family filter` |
| Bug fix | `fix` | `fix(pagination): correct page calculation` |
| Code cleanup | `refactor` | `refactor(utils): extract helper function` |
| UI styling | `style` | `style(ProductCard): adjust spacing` |
| New tests | `test` | `test(families): add service tests` |
| Documentation | `docs` | `docs(families): update README` |
| Config changes | `chore` | `chore: update biome config` |
| Performance | `perf` | `perf(families): optimize list rendering` |

## Best Practices

**DO:**
- Group related changes together
- Use clear, descriptive commit messages
- Follow Conventional Commits format strictly
- Keep commits atomic (one logical change)
- Use present tense imperative mood

**DON'T:**
- Mix unrelated changes in one commit
- Use vague messages like "fix stuff" or "update code"
- Create commits with too many files (split them)
- Use past tense ("added feature")
- Capitalize subject or add period at end

## Resources

- **Conventional Commits**: https://www.conventionalcommits.org/
