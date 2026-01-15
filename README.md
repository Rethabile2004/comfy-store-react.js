# React E-Commerce Frontend

A complete e-commerce frontend built as part of a Udemy assignment.  
This project demonstrates **real-world React architecture**, modern routing patterns, dynamic UI rendering, server-driven pagination, filters, and clean component structure. It simulates a production-ready React application using **Tailwind CSS** and **React Router Data APIs**.

---

## Project Purpose

This project was created to practice building a scalable React application from scratch using:

- React Router loaders and actions  
- Tailwind CSS for styling  
- Reusable UI components  
- API-driven product fetching  
- Filters, pagination, and cart functionality  

The assignment required structuring the application properly, managing state across routes, and working with dynamic data while keeping the UI consistent and responsive.

---

## Features

### Product Listing
- Dynamic grid and list layouts  
- Server-side pagination  
- Category, company, and search filters  
- Sort options  
- Zero-results handling  

### Single Product Page
- Product details  
- Dynamic quantity selection  
- Add-to-cart integration  

### Cart
- Quantity adjustment  
- Automatic totals  
- Session-level state  

### UI and Styling
- Fully responsive Tailwind design  
- Consistent typography system  
- Reusable card, button, and layout components  

### Data Layer
- React Router loaders for data fetching  
- Actions for form handling  
- Axios + custom fetch wrapper  

---

## Technologies Used

- React  
- React Router v6 Data API  
- Tailwind CSS  
- Axios  
- Vite  
- JavaScript ES6+  

---

## React Hooks Used

This project leverages multiple built-in hooks for state, routing, and performance:

- `useState`  
- `useEffect`  
- `useParams`  
- `useNavigate`  
- `useSearchParams`  
- `useLoaderData`  
- `useNavigation`  
- `useNavigation`  
and more
---

## Project Structure
src/ components/ Filters.jsx ProductGrid.jsx ProductList.jsx PaginationContainer.jsx Navbar.jsx
pages/ Landing.jsx Products.jsx SingleProduct.jsx Cart.jsx
utils/ customFetch.js formatPrice.js generateAmountOptions.jsx
routes/ router.js
styles/ globals.css tailwind.config.j

---

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/rethabile2004/comfy-store-react.js.git
cd comfy-store
```
Install dependencies:

```bash
npm install
```
run project:

```bash
npm run dev
```
