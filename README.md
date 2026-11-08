# ⚡ 3D Animated Developer Portfolio

A modern, high-performance 3D animated portfolio built with **React**, **Three.js**, **Tailwind CSS**, and **Vite**.

## 🚀 Live Local Development

The development server is running at:
- **Local:** [http://localhost:3000/](http://localhost:3000/)

To run manually:
```bash
npm install
npm run dev
```

To build for production:
```bash
npm run build
```

---

## 🌟 Key Features

1. **Interactive Three.js 3D Holographic Core**
   - Central rotating icosahedron with glowing vertex shaders and wireframe cage.
   - Deep particle starfield with 1,200 orbiting stars.
   - Smooth mouse parallax and spring inertia tracking.
   - Click to trigger an energy pulse shockwave.
   - 3D render mode switcher (*Core Mode*, *Wireframe Mode*, *Particle Singularity*).

2. **Distributed Systems Architecture Lab**
   - Interactive live request visualizer (`Client Browser -> Edge WAF -> API Gateway -> Microservices -> Redis Cache -> Postgres DB`).
   - Click **"Send Live Request"** or **"Simulate Load Spike (5k req/s)"** to watch real-time data packets traverse the pipeline with live latency tracking and console event bus logs.

3. **Interactive Developer CLI Terminal**
   - Press **`~`** (tilde) or click the **CLI** button in the navbar to open.
   - Commands: `help`, `about`, `skills`, `projects`, `architecture`, `contact`, `sudo hire`, `theme`, `clear`.
   - `sudo hire` triggers confetti and sound effects!

4. **Multi-Theme Cyber Matrix**
   - Click the palette icon in the navbar to cycle between:
     - **Cyber Cyan**
     - **Matrix Emerald**
     - **Quantum Violet**

5. **Built-in Web Audio API Synthesizer**
   - Click the volume button in the navbar to enable futuristic UI sound clicks, hums, and success chimes (zero external audio file dependencies).

6. **Filterable Projects & Architecture Deep-Dive Modal**
   - Categorized by *Full-Stack*, *Cloud/DevOps*, *3D & AI*.
   - Inspect architecture button reveals system impact, metrics, and technology breakdowns.

7. **Simulated Contact Form with Confetti**
   - One-click copy email button with instant feedback.
   - Encrypted dispatch simulator with celebration confetti.

---

## 🛠️ How to Customize Your Info

All personal content, project descriptions, skills, and links are centralized in one single clean file:
👉 **[`src/data/portfolioData.js`](src/data/portfolioData.js)**

Simply edit:
- `portfolioData.personal` (Name, title, bio, email, social links, location)
- `portfolioData.skills` (Categories, names, proficiencies)
- `portfolioData.projects` (Add your GitHub links, live URLs, metrics, and descriptions)
- `portfolioData.experience` (Career milestones and achievements)
