# 🚀 AI Component Generator

An AI-powered web application that generates modern, responsive, and production-ready UI components from natural language prompts using **Google Gemini AI**.

The application allows users to describe the component they want, select their preferred frontend framework, and instantly receive AI-generated code with a live preview. It also provides a built-in code editor, fullscreen preview, AI configuration settings, generation history, and customizable API integration for a seamless development experience.

---

# ✨ Features

## 🤖 AI-Powered Component Generation

- Generate UI components from natural language prompts
- Powered by Google Gemini AI
- Fast and intelligent code generation
- Clean and readable output
- Responsive and modern UI designs
- Optimized prompts for better results

---

## 🎨 Multiple Framework Support

Generate components using:

- HTML + CSS
- HTML + Tailwind CSS
- HTML + Bootstrap
- HTML + CSS + JavaScript
- HTML + Tailwind CSS + Bootstrap

---

## 💻 Built-in Code Editor

- Monaco Editor Integration
- Syntax Highlighting
- Read-only Generated Code
- Professional Coding Experience
- Dark Theme Editor

---

## 👀 Live Preview

- Real-time Preview
- Instant Rendering
- Refresh Preview
- Fullscreen Preview Mode
- iframe-based Rendering

---

## 📋 Code Utilities

- Copy Generated Code
- Download Generated HTML
- Export Components
- Toast Notifications
- Loading Animation

---

## 👤 Personal Dashboard

- Component Generation Statistics
- Generation History
- Saved Component Vault
- API Usage Monitor
- Developer Status Panel

---

## 🔐 API Configuration

- Custom Gemini API Key Support
- Save Personal API Key
- Reset API Configuration
- Secure Local Storage Integration

---

## ⚙️ AI Generation Settings

Customize AI generation using:

- AI Model Selection
- Temperature (Creativity) Control
- Dark Mode Output
- Inline Documentation Option

---

## 🌙 Theme Support

- Dark Mode
- Light Mode
- Smooth Theme Switching
- Modern Glassmorphism UI

---

## 💾 Local Storage Support

The application stores:

- User Preferences
- AI Model
- Temperature
- Generated History
- API Keys
- Theme Preferences
- Output Configuration

---

## 📱 Responsive Design

Optimized for:

- Desktop
- Laptop
- Tablet
- Mobile Devices

---

# 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- React Router DOM

### Styling

- Tailwind CSS
- CSS3

### Artificial Intelligence

- Google Gemini AI API

### Editor

- Monaco Editor

### Libraries

- React Select
- React Icons
- React Toastify
- React Spinners

### Browser APIs

- Clipboard API
- Blob API
- Local Storage API
- iframe Preview

---

# 📂 Project Structure

```text
AI-Component-Generator
│
├── public
│
├── src
│   │
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── ProfileDropdown.jsx
│   │   └── SettingsModal.jsx
│   │
│   ├── pages
│   │   ├── Home.jsx
│   │   └── NoPage.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/SafiyaFatima08/ai-component-generator.git
```

## Navigate to the Project

```bash
cd ai-component-generator
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

---

# 🔑 Environment Variables

Create a `.env` file in the project root.

```env
VITE_GEMINI_API_KEY="AIzaSyCdXB_-QOGeIcSTVOqwoduTa4UNJ5m2XLM" 
```

Use the API key inside your application:

```javascript
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});
```

> **Note:** Never commit your API key to GitHub. Always use environment variables.

---

# 🚀 Application Workflow

1. Open the application.
2. Select your preferred frontend framework.
3. Describe the UI component.
4. Click the **Generate** button.
5. Gemini AI generates the component.
6. View the generated code.
7. Preview the component live.
8. Copy or download the generated code.

---

# 🤖 Supported AI Models

- Gemini 3 Flash Preview
- Gemini 1.5 Pro
- Gemini 1.5 Flash

---

# 💡 Main Functionalities

- AI Code Generation
- Framework Selection
- Monaco Code Editor
- Live Preview
- Fullscreen Preview
- Copy Code
- Download HTML
- API Configuration
- Personal Dashboard
- Saved Component Vault
- Generation History
- Toast Notifications
- Theme Switching
- Responsive Interface

---

# 💾 Local Storage

The application uses Local Storage to store:

- User API Key
- Selected AI Model
- Temperature Configuration
- Theme Preferences
- Generated Components
- Generation History
- Output Preferences

---

# 🎨 UI Highlights

- Modern Dashboard
- Glassmorphism Design
- Gradient Buttons
- Responsive Layout
- Smooth Animations
- Clean Typography
- Interactive Modals
- Beautiful Icons
- Professional User Experience

---

# 👩‍💻 Author

**Safiya Fatima**

B.Tech Computer Science Student

GitHub

https://github.com/SafiyaFatima08

---

# 🙏 Acknowledgements

This project was built using:

- Google Gemini AI
- React.js
- Vite
- Tailwind CSS
- Monaco Editor
- React Router DOM
- React Select
- React Icons
- React Toastify
- React Spinners
