# React Customer Management

A React single-page application for managing customers. Features user authentication (login/register), a customer list with CRUD operations, and a dashboard with counters.

## Features

- User registration and login
- Customer list with add, edit, delete
- Customer form with validation
- Dashboard with summary counters
- Responsive navbar

## Tech Stack

- React (Create React App)
- JavaScript (ES6+)
- Axios (HTTP client)
- React Router

## Prerequisites

- [Node.js](https://nodejs.org/) v14+
- A running backend API (configure the base URL in `src/config.json`)

## Getting Started

```bash
git clone https://github.com/ahasan09/react-customer-management
cd react-customer-management
npm install
```

### Configure the API

Edit `src/config.json` to point to your backend:

```json
{
  "apiUrl": "http://localhost:3000/api"
}
```

### Start the app

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start dev server on port 3000 |
| `npm test` | Run tests in interactive watch mode |
| `npm run build` | Production build to `build/` |

## Project Structure

```
src/
├── components/
│   ├── customers.jsx        # Customer list
│   ├── customersTable.jsx   # Sortable table
│   ├── customerForm.jsx     # Add/edit form
│   ├── dashboard.jsx        # Summary dashboard
│   ├── loginForm.jsx        # Login page
│   ├── registerForm.jsx     # Registration page
│   ├── navbar.jsx           # Navigation
│   └── common/              # Shared UI components
├── services/                # Axios API calls
└── utils/                   # Helpers and validation
```
