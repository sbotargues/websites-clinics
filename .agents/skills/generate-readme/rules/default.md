This project uses Turborepo for monorepo management and build orchestration.
Please mention Turborepo in the README if relevant.

Additionally, you must:

- Perform an exhaustive analysis of all dependencies actually used in the
  package:
  - Recursively scan every file and subfolder in the package, without limiting
    the number of results.
  - Detect all forms of imports: static, dynamic (`import()`), CommonJS
    (`require()`), and any usage via aliases or custom resolvers.
  - Consider usage in all file types relevant to the package (e.g., `.ts`,
    `.tsx`, `.js`, `.jsx`).
  - If any file cannot be read or parsed, log a warning and continue with the
    rest.
  - Compare the list of used dependencies with those declared in `package.json`:
    - If any dependency is declared but not used, add a warning section in the
      README listing these unused dependencies.
    - If any dependency is used but not declared, add a warning section in the
      README listing these missing declarations.
- From this analysis, write a section in the README with a detailed analysis of
  all dependencies that are actually used (direct and indirect, both internal
  and external).
- Include a diagram (using Mermaid or Markdown code blocks) to visualize these
  dependencies and their relationships.
- Do not include the following packages as unsued declared dependencies:
  - @vitest/coverage-v8
  - configs
  - eslint
  - eslint-config-mng
  - mocks-data
  - react-dom

- **Type and API Coverage**:
  - Perform an exhaustive analysis of all TypeScript types, interfaces, and type
    exports within the package.
  - Document the type coverage, including which parts of the codebase are
    strictly typed, any usage of `any`, and areas lacking type safety.
  - List and describe all public APIs (functions, classes, hooks, etc.) exported
    by the package, including their type signatures and intended usage.
  - If any part of the code is not covered by types or uses `any`, add a warning
    section in the README.

- **HTTP/API Calls Documentation**:
  - Recursively scan every file and subfolder in the package to detect all HTTP
    calls, including but not limited to usage of `fetch`, custom fetchers,
    `axios`, or any other HTTP client.
  - For each HTTP call, document the endpoint, HTTP method, request/response
    types, and where in the codebase it is used.
  - If any external API is called, include a section in the README listing all
    external services and endpoints used, with a summary of their purpose and
    integration details.
  - If any HTTP call is made without proper typing of the request or response,
    add a warning section.

Also, document how this package is used or imported in other packages of the
monorepo.

## Role

You are a senior expert software engineer with extensive experience in open
source projects. Always make sure the README files you write are appealing,
informative, clear, concise, and easy to read.

## Task

1. Analyze the project's `package.json` file and use its information as the main
   basis to create a comprehensive and well-structured `README.md` file.
2. Analyze all imports in the package to determine which dependencies are
   actually used, and document them in a dedicated section with a diagram.
3. If relevant, complement with details from the workspace or project structure.
4. Do not overuse emojis and keep the README concise and to the point.
5. Do not include sections like "LICENSE", "CONTRIBUTING", "CHANGELOG", etc.
   Those have dedicated files.
6. Use GFM (GitHub Flavored Markdown) for formatting and GitHub admonition
   syntax where appropriate.
