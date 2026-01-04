
```md
# Mini Quote Component

A small, self-contained React component that calculates dynamic pricing for custom apparel orders based on product selection and quantity-based price breaks.

This project was built as a time-boxed technical exercise to demonstrate state management, pricing logic, and clean component design in a modern React stack.

---

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS

---

## Features

- Product selection (Shirt A / Shirt B)
- Quantity-based price breaks:
  - 1–12 items → $15 / unit
  - 13–49 items → $12 / unit
  - 50+ items → $10 / unit
- Product-specific pricing matrix:
  - Shirt B adds a $2 surcharge per unit
- Instant price updates as the user types (no “Calculate” button)
- Derived state (no unnecessary effects)

---

## Pricing Logic Overview

The total price is calculated as:

1. Determine the base unit price from the quantity price breaks
2. Apply any product-specific surcharge
3. Multiply the final unit price by the quantity

All pricing rules are implemented in a declarative and easily extensible way.

---

## Project Structure


src/
├─ MiniQuote.tsx   # Core pricing component
├─ App.tsx         # Minimal app wrapper
├─ main.tsx        # Vite entry point
└─ index.css       # Tailwind styles

````

---

## Local Development

```bash
npm install
npm run dev
````

The app will be available at `http://localhost:5173`.

---

## Notes

* Styling is intentionally minimal and functional, aligned with Tailwind / shadcn design principles.
* The pricing logic is isolated from UI concerns and can be easily extracted to shared domain logic or moved server-side.
* The component is designed to scale to more complex pricing rules commonly found in ERP and order management systems.

```