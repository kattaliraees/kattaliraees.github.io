# Modernized Engineering Portfolio Dashboard

This repository hosts the personal portfolio of **Raees Kattali**, a cross-disciplinary systems engineer with 15+ years of experience bridging hardware silicon design, low-level firmware engineering, and production mobile applications.

The website is modernized as a high-fidelity, clean static profile dashboard designed specifically to represent cyber-physical engineering.

## 🚀 Features

### 1. Cyber-Physical Dashboard Theme
- **Laboratory Aesthetics**: Dark mode by default, styled as an engineering workbench terminal. Accents correspond to different engineering domains (oscilloscope cyan, hardware copper, system green, low-level amber).
- **Blueprint Grid Overlay**: A custom CSS radial blueprint grid overlaying the background.
- **Dynamic Circuit SVG**: Animated vector graphic with pulsing electrical paths representing signals flowing from sensors/antennas into a central microchip package.

### 2. Technical Dossier (Executive Summary)
- Displays core statistics (Years of Experience, Completed Boards, App Production Installs).
- Detailed professional biography charting your trajectory from register-level programming up to modern native Swift/Flutter development.

### 3. Core Pillars of Competence
Three cards representing your major areas of expertise:
- **Hardware & PCB Design**: Schematics, multi-layer layouts (KiCad), DFM, and EMI testing.
- **Firmware & Bare-Metal**: C/C++, assembly, device drivers, and microcontrollers (ESP32, nRF52, STM32).
- **Connected Mobile Apps**: iOS (Swift, Objective-C), Flutter, and BLE/NFC protocol integrations.

### 4. Direct Consultation Link
- Triggers a secure `mailto:kattaliraees@gmail.com` protocol with pre-configured subject headings to establish direct consultation links.

---

## 🛠️ Tech Stack & Directory Structure

This site uses a **zero-dependency, build-less design** to ensure instant loading times, absolute robustness, and zero maintenance. It runs directly on GitHub Pages.

```
kattaliraees.github.io/
├── index.html            # Core HTML5 layout & inline SVG modules
├── assets/
│   ├── css/
│   │   └── styles.css    # Custom CSS variables, responsive grid & animations
│   ├── js/
│   │   └── app.js        # Hamburger menu, scroll-up and theme toggles
│   ├── icons/            # SVG vector assets
│   └── images/           # Static raster images
└── README.md             # Systems documentation
```

## 💻 Local Testing

Since this project has no build tools or package configurations, you can test it locally by running a simple HTTP server.

Using Python:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.
