# Enterprise Playwright TypeScript Automation Framework

A production-ready, scalable, and maintainable automation framework built with Playwright and TypeScript.

## Architecture

The framework follows a layered design to ensure separation of concerns:

- `tests/`: Feature/module-based test files.
- `src/pages/`: Page Object classes representing web pages.
- `src/components/`: Reusable UI components (Table, Modal, etc.).
- `src/actions/`: High-level business actions composed from pages/components.
- `src/fixtures/`: Custom Playwright fixtures for dependency injection.
- `src/utils/`: Generic utilities (logger, waits, etc.).
- `src/config/`: Environment-based configurations.
- `src/types/`: Shared TypeScript interfaces and types.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
npm install
npx playwright install
```

### Running Tests

```bash
# Run tests in default (QA) environment
npm test

# Run tests in a specific environment
npm run test:dev
npm run test:uat

# Run in headed mode
npx playwright test --headed

# Generate and view report
npm run test:report
```

## Environment Configuration

Environments are managed in `src/config/environments.ts`. You can switch environments using the `ENV` environment variable.

## Best Practices

- **Page Object Model**: Always use POM for better maintainability.
- **Component Abstraction**: Abstract complex UI elements like tables and modals into components.
- **Auto-waiting**: Leverage Playwright's built-in auto-waiting; avoid hardcoded `sleep`.
- **Fixtures**: Use fixtures to manage page object instantiation and session state.
- **Type Safety**: Use TypeScript interfaces for test data and configurations.

## Scaling the Framework

1. **Adding a New Module**: Create a new directory in `tests/` and corresponding pages in `src/pages/`.
2. **New Components**: If a UI pattern repeats (e.g., a custom date picker), add it to `src/components/`.
3. **API Testing**: Add an `api/` layer in `src/utils/` to handle API requests for setup/teardown.
4. **Data Management**: Use `src/data/` for JSON-based test data and factory patterns for dynamic data.

---

## Enterprise Insights

### Why Playwright + TypeScript?

- **Fast & Reliable**: Native support for modern web features and excellent auto-waiting reduces flakiness.
- **Developer Experience**: Strong typing with TypeScript provides better IDE support and reduces runtime errors.
- **Rich Tooling**: Built-in tracing, debugging, and reporting tools.

### Reducing Maintenance Overhead

By using the **Component-Based Page Object Model**, changes in UI components only need to be updated in one place, even if they are used across multiple pages.

### Migration from Selenium

1. **Shift to Locators**: Move away from fragile XPaths to robust locators like `getByRole` or `getByText`.
2. **Asynchronous Execution**: Embrace the `async/await` pattern of Playwright.
3. **Built-in Assertions**: Use Playwright's web-first assertions which include automatic retries.
