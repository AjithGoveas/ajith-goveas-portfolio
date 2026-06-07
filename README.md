# myBio - Ajith Goveas

### 🚀 Kotlin Multiplatform, Android & Web Engineer
_Building scalable mobile logic ecosystems and high-fidelity, high-performance web interfaces._

---

## 01. Who I Am

I am a software engineer specializing in cross-platform mobile architecture and modern, high-performance web systems. Currently pursuing my B.E. in Computer Science at Sahyadri College of Engineering & Management, my engineering philosophy is simple: **build robust software architectures that prioritize scalability, technical rigor, and sleek, intuitive user experiences.**

I focus on creating software that is as maintainable as it is fast. By separating platform-agnostic business logic from presentation layers, I ensure codebases are modular, testable, and optimized for long-term growth.

---

## 02. Core Engineering Focus

### 📱 Android & Kotlin Multiplatform (KMM/CMP)
*   **Shared Logic Systems:** Writing shared business logic, networking (Ktor), and local databases (SQLDelight/Room) in pure Kotlin to run natively on both Android and iOS platforms.
*   **Native Android UI:** Engineering responsive, modern mobile layouts using Jetpack Compose, Kotlin Coroutines, and strict clean architecture principles (MVVM/MVI).

### 🌐 Modern Web Development
*   **Next.js & React Applications:** Designing server-side pre-rendered (SSR), statically generated (SSG), and type-safe frontends with Next.js (App Router) and TypeScript.
*   **Fluid Animations & Design Systems:** Creating interactive user interfaces using Tailwind CSS and spring-physics animations.

### ⚡ Performance & UX Tuning
*   **Bundle Optimization:** Reducing client JavaScript payloads through lazy-loading, tree-shaking, and optimizing dynamic components.
*   **Cumulative Layout Shift (CLS) Reduction:** Designing size-matching skeletons to ensure pages load smoothly without jarring layout shifts.

---

## 03. The Portfolio System (Overview)

This repository serves as my personal portfolio—a clean, responsive web interface engineered as a live sandbox to test new design patterns, database integrations, and web optimizations.

### Key System Integrations

*   **Bento Grid Architecture:** A dynamic grid layout that automatically adjusts to screen sizes. It features a responsive two-column layout with a 60/40 visual width split when dynamic cards are multiples of 3.
*   **Zero-Layout Shift Skeletons:** Dynamic skeletal loaders that match the dimensions of your project cards and contact nodes, completely eliminating visual jumpiness (CLS) during content hydration.
*   **Hydration-Guarded IST Clock:** A client-side hydrated system clock running on Indian Standard Time. It uses a mount lifecycle guard to display static monospace dashes (`--:--:--`) during Server-Side Rendering (SSR) to prevent hydration mismatches before flipping to a live-ticking display.
*   **LazyMotion & Asset Caching:** Features a global `<LazyMotion>` provider to lazy-load animations via the `domMax` feature library. Additionally, next-config rules apply long-lived Cache-Control headers to public assets (fonts, icons, and image directories) to preserve CDN bandwidth.
