# Garuda — Custom Website

A premium, modern agency website built with **React + Vite**. Created by **Partho**.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI Framework |
| Vite 7 | Build Tool & Dev Server |
| Framer Motion | Animations & Transitions |
| Lucide React | Icon Library |
| Vanilla CSS | Styling |

---

## 📁 Project Structure

```
custom-website-main/
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Landing hero section
│   │   ├── Navigation.jsx        # Floating bottom navigation bar
│   │   ├── BrandMarquee.jsx      # Scrolling brand logos
│   │   ├── Projects.jsx          # Sticky project cards
│   │   ├── Testimonials.jsx      # Client testimonials carousel
│   │   ├── AIImpact.jsx          # AI-powered design section with animated lines
│   │   ├── WhyUs.jsx             # "Why Us?" section header
│   │   ├── WhatWeDo.jsx          # Services with sticky scroll effect
│   │   ├── WhyChooseUs.jsx       # Feature cards grid
│   │   ├── Pricing.jsx           # Pricing plans
│   │   ├── Openings.jsx          # Job openings / career cards
│   │   ├── ScrollingReferrals.jsx # Auto-scrolling referral cards
│   │   ├── FAQ.jsx               # Expandable FAQ accordion
│   │   ├── Consultation.jsx      # Contact form with budget selector
│   │   ├── PreFooter.jsx         # Trust banner + social links + subscribe form
│   │   ├── Footer.jsx            # Site footer with links
│   │   └── BackToTop.jsx         # Sticky back-to-top button
│   ├── assets/                   # Local assets (logo, icons, mockups)
│   ├── App.jsx                   # Root component — assembles all sections
│   ├── App.css                   # Global component styles
│   ├── index.css                 # Base resets & root variables
│   └── main.jsx                  # App entry point
├── img/                          # External image assets
├── index.html                    # HTML shell
├── vite.config.js                # Vite configuration
└── package.json                  # Dependencies
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18 or higher
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## ✨ Key Features

- **Sticky Project Cards** — Cards stack on scroll with z-index layering
- **AI Section** — Animated SVG connecting lines with pulsing center logo and traveling dot animations
- **Floating Navigation** — Fixed bottom nav bar with glassmorphism blur effect
- **Animated Hero** — Framer Motion entrance animations with floating 3D elements
- **Contact Form** — Integrated with [FormSubmit](https://formsubmit.co) for email delivery
- **Scrolling Testimonials** — Auto-scrolling marquee rows (left & right)
- **Responsive Design** — Fully mobile-friendly with breakpoints at 768px, 1024px, 1200px

---

## 📦 Dependencies

```json
{
  "framer-motion": "^12.34.3",
  "lucide-react": "^0.575.0",
  "react": "^19.2.4",
  "react-dom": "^19.2.4",
  "vite": "^7.3.1",
  "@vitejs/plugin-react": "^5.1.4"
}
```

---

## 👨‍💻 Author

**Partho** — Website Designer & Developer

> Built with ❤️ using React + Vite
