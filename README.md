# E-Commerce Project (Full Stack)

A full-stack e-commerce web application with a React frontend and a Node.js/Express backend.

## Why This Project Was Built

This project was built to practice and demonstrate end-to-end web development skills in a realistic storefront workflow:

- Browsing products and searching catalog data
- Managing cart items and delivery options
- Placing and viewing orders
- Calculating payment summaries
- Building and consuming a REST API from a modern frontend

It is also structured as a practical learning project, with starter materials and exercise solutions included in the repository.

## Features

- Product listing and search
- Cart management (`GET`, `POST`, `PUT`, `DELETE`)
- Delivery option selection
- Order creation and order history/tracking pages
- Payment summary API
- Reset endpoint to restore default data
- Static image serving and production static hosting support

## Tech Stack

### Frontend

- React 19
- Vite
- React Router

### Backend

- Node.js + Express
- Sequelize ORM
- SQL.js SQLite-compatible layer (`sql.js-as-sqlite3`)
- CORS + JSON APIs

## Project Structure

```
.
├── client/               # React app (Vite)
├── routes/               # Express route handlers
├── models/               # Sequelize models
├── defaultData/          # Seed/default data
├── images/               # Product and rating assets
├── server.js             # Backend entry point
├── documentation.md      # API endpoint documentation
└── troubleshooting.md    # Common setup/runtime fixes
```

## Getting Started

### Prerequisites

- Node.js 22+
- npm

### 1) Install backend dependencies

From the repository root:

```bash
npm install
```

### 2) Install frontend dependencies

```bash
cd client
npm install
```

### 3) Run the backend

From the repository root:

```bash
npm run dev
```

Backend runs on `http://localhost:3000` (unless overridden by `PORT`).

### 4) Run the frontend

In a second terminal:

```bash
cd client
npm run dev
```

Vite will print the frontend URL (typically `http://localhost:5173`).

## Available Scripts

### Root (`/`)

- `npm run dev` – Start backend with nodemon
- `npm start` – Start backend with node
- `npm run zip` – Run zip utility script

### Frontend (`/client`)

- `npm run dev` – Start Vite dev server
- `npm run build` – Build frontend assets
- `npm run preview` – Preview built frontend
- `npm run lint` – Run ESLint

## API Documentation

Detailed endpoint docs are available in [documentation.md](documentation.md).

Main endpoint groups:

- `/api/products`
- `/api/delivery-options`
- `/api/cart-items`
- `/api/orders`
- `/api/payment-summary`
- `/api/reset`

## Troubleshooting

If you run into setup or runtime issues, see [troubleshooting.md](troubleshooting.md).

## Notes

- The backend can serve built frontend assets from `dist` when present.
- Default data is seeded automatically when the database is empty.
