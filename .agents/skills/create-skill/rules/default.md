## When to Create a Skill

Create a skill when:

- A pattern is used repeatedly and AI needs guidance
- Project-specific conventions differ from generic best practices
- Complex workflows need step-by-step instructions
- Decision trees help AI choose the right approach

**Don't create a skill when:**

- Documentation already exists (create a reference instead)
- Pattern is trivial or self-explanatory
- It's a one-off task

---

## Skill Structure

```
.github/skills/[scope/]{skill-name}/
├── SKILL.md              # Required - main skill file
├── assets/               # Optional - code templates, schemas, examples
│   ├── template.tsx      # MUST be error-free, valid TypeScript
│   └── schema.json
├── rules/                # Optional - sub-skills for variants/edge cases
│   ├── advanced.md       # Specialized patterns
│   └── edge-case.md
└── references/           # Optional - links to local docs
    └── docs.md           # Points to docs/
```

**Critical**: All code examples in SKILL.md, assets/, and rules/ MUST:

- ✅ Be syntactically correct
- ✅ Have no TypeScript errors
- ✅ Follow project conventions
- ✅ Be tested before committing

---

## When to Use Sub-Skills (rules/)

Create sub-skills in `rules/` directory when:

- **Skill is too generic**: Base skill covers common case, sub-skills handle
  variants
- **User requests it**: Explicitly asked to split logic into sub-skills
- **Multiple approaches exist**: Different solutions for different contexts
- **Complexity is high**: Breaking down makes it more manageable

### Sub-Skill Structure

```
create-service/
├── SKILL.md              # Base pattern (common case)
└── rules/
    ├── authenticated.md  # Variant: with JWT auth
    └── server-side.md    # Variant: SSR data fetching
```

The main SKILL.md references sub-skills with a decision table:

| Use Case          | Sub-Skill              |
| ----------------- | ---------------------- |
| Public API        | Main skill (SKILL.md)  |
| Authenticated API | rules/authenticated.md |
| Server-side only  | rules/server-side.md   |

**Critical**: Sub-skills MUST also have error-free code examples.

---

## SKILL.md Template

````markdown
---
name: { skill-name }
description: {One-line description. Trigger: when to load this skill.}
license: MIT
metadata:
  author: Mango
  version: "1.0"
---

## When to Use

{Bullet points of when to use this skill}

## Critical Patterns

{The most important rules - what AI MUST know}

## Code Examples

{Minimal, focused examples}

## Commands

```bash
{Common commands}
```
````

## Resources

- **Templates**: See [assets/](assets/) for {description}
- **Documentation**: See [references/](references/) for local docs

```

---

## Naming Conventions

| Type | Pattern | Examples |
|------|---------|----------|
| Generic skill | `{technology}` | `playwright`, `typescript` |
| Backoffice-specific | `Backoffice-{package}` | `Backoffice-families` |

---

## Decision: assets/ vs references/

```

Need code templates? -> assets/
Need JSON schemas? -> assets/
Need example configs? -> assets/
Link to existing docs? -> references/
Link to external guides? → references/ (with local path)

```

**Key Rule**: `references/` should point to LOCAL files (`docs/developer-guide/*.mdx`), not web URLs.

---

## Decision: Specific vs Generic

```

Patterns apply to ANY package? → Generic skill (e.g typescript)
Patterns are package-specific? → package-{name} skill
Generic skill needs package info? → Add references/ pointing to package docs

````

---

## Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Skill identifier (lowercase, hyphens) |
| `description` | Yes | What + Trigger in one block |
| `license` | Yes | Always `MIT` for Mango |
| `metadata.author` | Yes | `Mango` |
| `metadata.version` | Yes | Semantic version as string |

---

## Content Guidelines

### DO
- Start with the most critical patterns
- Use tables for decision trees
- Keep code examples minimal and focused
- **Test all code examples** - no TypeScript/syntax errors
- Include Commands section with copy-paste commands
- Use sub-skills (rules/) for complex patterns with variants

### DON'T
- Add Keywords section (agent searches frontmatter, not body)
- Duplicate content from existing docs (reference instead)
- Include lengthy explanations (link to docs)
- Add troubleshooting sections (keep focused)
- Use web URLs in references (use local paths)
- **Include code with errors** - always validate syntax and types

---

## Registering the Skill

After creating the skill, register it in the appropriate custom agent file (in `.github/agents/`):

```markdown
#### {skill-name}
**Path**: `.github/skills/{domain}/{skill-name}/SKILL.md`
**Auto-invoke on**: keyword1, keyword2, palabra clave
**Use for**: Brief description
````

---

## Checklist Before Creating

- [ ] Skill doesn't already exist (check `skills/`)
- [ ] Pattern is reusable (not one-off)
- [ ] Name follows conventions
- [ ] Frontmatter is complete (description includes trigger keywords)
- [ ] Critical patterns are clear
- [ ] **All code examples are error-free** (no TypeScript/syntax errors)
- [ ] Code examples tested in actual project
- [ ] Commands section exists (if applicable)
- [ ] Sub-skills (rules/) used if pattern has variants
- [ ] Registered in appropriate custom agent file

## Resources

- **Templates**: See [assets/](assets/) for SKILL.md template
