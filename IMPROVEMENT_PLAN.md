# Improvement Plan: react-app

## Overview
React 16 CRA app with customer management, routing, and Bootstrap. React 16 is several major versions behind (19 is current). CRA is deprecated. No TypeScript, no state management library, no tests.

## Improvements

### Modernization (High Priority)
- Migrate from Create React App (deprecated, unmaintained) to Vite + React 19
- Add TypeScript — define `Customer` and related interfaces
- Upgrade React Router from v4/v5 to v6 (data router API)
- Replace Bootstrap with Tailwind CSS or keep Bootstrap but use the React-Bootstrap component library

### State Management
- Replace prop drilling / local state with Zustand or React Query for server state if a real backend is added
- For a simple app, React Context + `useReducer` is sufficient

### Testing
- Add Vitest + React Testing Library unit tests for components
- Add tests for customer CRUD operations
- Add Playwright e2e tests for the main customer management flow
- Set up coverage reporting

### Features
- Add a real backend API (Express, Django, or NestJS) to replace any in-memory/mock data
- Add form validation using React Hook Form + Zod
- Add pagination and sorting for the customer list
- Add search/filter functionality

### Code Quality
- Add ESLint + Prettier
- Enable strict TypeScript mode after migration
- Add Husky pre-commit hooks for linting

### DevOps
- Add GitHub Actions CI: lint + type-check + test + build
- Add Dependabot for dependency updates
