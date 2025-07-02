# C-Suit Web

> A modern, high-performance web application built with React, TypeScript, Vite, and Tailwind CSS.

---

## 🚀 Overview

C-Suit Web is a scalable, component-driven React application designed for rapid development and beautiful user experiences. It leverages the latest frontend technologies and best practices, including:

- **React 18** for fast, interactive UIs
- **TypeScript** for type safety and maintainability
- **Vite** for lightning-fast builds and HMR
- **Tailwind CSS** for utility-first styling
- **Radix UI** and custom UI components for accessibility and flexibility

---

## 📦 Project Structure

```
components.json
index.html
package.json
tailwind.config.js
vite.config.ts
public/
src/
  components/
  css/
  data/
  interface/
  lib/
  routes/
  sections/
```

- **src/components/**: Reusable UI and layout components
- **src/sections/**: Page sections and feature modules
- **src/routes/**: App routing (React Router)
- **src/css/**: Custom and third-party styles
- **public/**: Static assets (images, icons, etc.)

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## ✨ Features
- **Component-based architecture** for scalability
- **Infinite horizontal scroll** and carousel components
- **Responsive design** out of the box
- **Expert team, blog, and solution sections**
- **Modern UI/UX** with Tailwind CSS and Radix UI
- **TypeScript-first** for reliability
- **ESLint** and best practices enforced

---

## 📚 Key Components & Usage

### Infinite Horizontal Scroll

The `InfiniteMovingCards` component provides a seamless, automatic horizontal scrolling effect for any list of items (testimonials, brands, etc.).

**Usage Example:**

```tsx
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  { quote: "...", name: "...", title: "..." },
  // ...more items
];

<InfiniteMovingCards items={testimonials} direction="left" speed="fast" />
```

**Props:**
- `items`: Array of objects (`{ quote, name, title }`)
- `direction`: "left" | "right" (default: "left")
- `speed`: "fast" | "normal" | "slow" (default: "fast")
- `pauseOnHover`: boolean (default: true)

---

## 🧩 Tech Stack
- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Radix UI**
- **Embla Carousel**
- **ESLint**

---

## 📄 Scripts
- `dev`: Start development server
- `build`: Build for production
- `preview`: Preview production build
- `lint`: Run ESLint

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

---

## 📝 License

This project is [MIT](LICENSE) licensed.
