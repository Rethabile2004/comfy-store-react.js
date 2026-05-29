# Comfy Store

Comfy Store is a responsive e-commerce frontend built with React, Vite, React Router, Redux Toolkit, TanStack Query, Axios, and Tailwind CSS. It includes product browsing, filtering, pagination, cart management, authentication, checkout, and order history.

The project focuses on clean React structure, route-based data loading, reusable components, and a polished shopping experience without relying on UI component libraries.

## Features

- Responsive landing page with a clean hero section
- Product catalog with grid and list views
- Search, category, company, price, shipping, and sort filters
- Server-driven pagination
- Single product details page
- Product color and quantity selection
- Persistent shopping cart with Redux Toolkit
- Cart totals with tax, shipping, and order total calculation
- User login, registration, and guest login
- Protected checkout and orders routes
- Checkout form with React Router actions
- Order history table with pagination
- Loading and error states
- Tailwind-only styling with a black, white, deep blue, and purple palette

## Tech Stack

- React
- Vite
- JavaScript
- React Router
- Redux Toolkit
- TanStack Query
- Axios
- Tailwind CSS
- React Toastify
- Lucide React
- React Icons

## Project Structure

```text
src/
  components/     Shared UI, forms, navigation, cart, filters, and product views
  features/       Redux slices for user and cart state
  pages/          Route-level pages and route loaders/actions
  utils/          Axios client, price formatting, and helper functions
  App.jsx         Router and query client setup
  main.jsx        React entry point
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/Rethabile2004/comfy-store-react.js.git
cd comfy-store-react.js
npm install
```

### Run Locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Notes

This project uses an external API through the custom Axios client in `src/utils`. Some features, such as login, checkout, and orders, depend on that API being available.

## Portfolio Summary

Built a full React e-commerce frontend with route loaders/actions, Redux cart state, authenticated checkout, order history, dynamic filtering, pagination, reusable components, and a custom Tailwind design system.

## Author

Rethabile Eric Siase  
[GitHub](https://github.com/Rethabile2004) | [LinkedIn](https://www.linkedin.com/in/rethabile-eric-siase-6199a131a/)
