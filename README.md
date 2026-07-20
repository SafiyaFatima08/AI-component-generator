# AI Component Generator

An interactive, premium front-end prototyping platform built with **React** and **Tailwind CSS**, powered by the official **Google Gen AI SDK**. The application enables developers to instantly generate clean, production-ready, and fully responsive UI components from natural language descriptions across various frontend styling configurations.

---

## 🔗 Live Deployment & Showcases

* **Live Demo Link**: [https://github.com/SafiyaFatima08/AI-component-generator](https://github.com/SafiyaFatima08/AI-component-generator)
* **Production Workspace URL**: `http://localhost:5173` (Local Development)

---

## 🚀 Features

### Core Generation Workspace (`Home.jsx`)
* **AI-Driven Code Generation**: Utilizes high-efficiency Gemini architectures via the official `@google/genai` SDK library.
* **Dual-Pane Engineering Sandbox**: Toggle seamlessly between a production-grade **Monaco Code Editor** (`vs-dark` mode) and an isolated, hot-reloaded **Live Preview** `iframe` sandbox environment.
* **Dynamic Framework Swapping**: Out-of-the-box styling presets managed via custom-styled dark interfaces (`react-select`):
  * HTML + CSS
  * HTML + Tailwind CSS
  * HTML + Bootstrap
  * HTML + CSS + JS
  * HTML + Tailwind CSS + Bootstrap
* **Integrated Action Utilities**: Single-click actions to copy code directly to the clipboard (`react-toastify` notifications) or export the generated element as a physical text payload file (`GenUI-Code.html`).
* **Expanded Preview Modal**: Implements an expansive, full-screen viewport layout layer to test components at native resolutions.

### Account Control Center (`ProfileDropdown.jsx`)
* **Glassmorphic Control Center**: An interactive dashboard overlay panel featuring slide-in entry animations, click-outside backdrop event capturing, and session termination hooks.
* **API Resource Analytics Tracker**: Dynamic resource consumption monitor visualizing real-time free-tier request thresholds.
* **Interactive Component Vault**: Queries localized storage indexes (`genui_history`) to display an asset history log, enabling instantaneous restoration of cached layout configurations.
* **Custom Credential Sandbox**: A secure token injection override portal allowing developers to supply their personal `user_gemini_key` to avoid global engine rate limits.

### Advanced Engine Workspace Config (`SettingsModal.jsx`)
* **Granular LLM Swapping**: Hot-swap between targeted AI models at runtime:
  * `gemini-3-flash-preview` *(Optimized Speed & Rapid Prototyping)*
  * `gemini-1.5-pro` *(Complex Structural Layout Analysis)*
  * `gemini-1.5-flash` *(Minimal Processing Latency)*
* **Hyperparameter Simulator**: Adjust the AI Novelty Factor (Temperature Coefficient) from `0.1` (deterministic/accurate boilerplate) up to `1.0` (highly creative/animated responsive layouts).
* **Code Synthesis Pre-Processor Directives**: Boolean execution filters to control code styling before compiling prompts:
  * **Inject Theme Variants**: Forces deep validation blocks mapping inline `dark:` utilities into the DOM markup.
  * **Inline Documentation Strings**: Embeds clean, component-level structural breakdown comments directly into the source code.
* **Memory Evacuation Safeguard**: Factory-reset utility that wipes out volatile local storage data (settings, custom tokens, and historical caches) upon deep confirmation check validation.

---

## 🛠️ Tech Stack

* **Core UI Ecosystem**: React.js (Hooks, Context lifecycle mapping)
* **Styling Engine**: Tailwind CSS (Synchronized document-level dark mode classes)
* **AI Orchestration**: Official `@google/genai` SDK
* **Code Surface Renderer**: `@monaco-editor/react` (Embedded VS Code core engine)
* **Icon Framework Suite**: `react-icons` (`fi`, `bs`, `hi`, `io5`, `pi`, `im`, `md`)
* **Alerts & Loading**: `react-toastify` (Toasts engine) & `react-spinners` (`ClipLoader`)

---

## 💾 State Persistence Matrix (Local Cache Schema)

The workspace handles client-side caching mechanisms cleanly mapped using standard browser local vectors:

| Storage Key | Target Element Type | Operational Defaults | System Intent |
| :--- | :--- | :--- | :--- |
| `genui_model` | String Select | `gemini-3-flash-preview` | Declares the active target engine model variant. |
| `genui_temperature` | Floating-point Number | `0.7` | Controls hyperparameter creative freedom variance. |
| `genui_opt_dark` | Evaluated Boolean | `true` | Dictates generation rules for responsive dark mode utility classes. |
| `genui_opt_comments` | Evaluated Boolean | `false` | Sets execution flags for inline code commentary strings. |
| `user_gemini_key` | Encrypted String Cache | *Optional Override* | Customer developer token to bypass request throttling. |
| `genui_history` | JSON Array | `[]` | Internal data cache for the Interactive Component Vault. |

---

## 📦 Installation & Setup Instructions

### 1. Clone the Repository & Navigate
Run the following commands in your terminal to grab the local project stack:
```bash
git clone [https://github.com/SafiyaFatima08/AI-component-generator.git](https://github.com/SafiyaFatima08/AI-component-generator.git)
cd AI-component-generator

### 2. Install Dependencies
Execute layout package synchronization via your node package manager:

Bash
npm install

### 3. Environment Key Setup
Create a .env file in the root structure of your directory and insert your Gemini developer parameters:

Code snippet
VITE_GEMINI_API_KEY= "AIzaSyCdXB_-QOGeIcSTVOqwoduTa4UNJ5m2XLM"

### 4. Boot Up the Local Development Cluster
Spin up the internal bundler ecosystem using Vite:

Bash
npm run dev

## 👤 Author

**Safiya Fatima**
