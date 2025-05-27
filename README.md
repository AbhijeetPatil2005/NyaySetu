# Legal Rights Advisor 🏛️

> AI-powered legal guidance platform for Indian citizens with multilingual support

**🌐 Live Demo:** [View Application](https://nyay-setu01.vercel.app/)

---

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Configuration](#api-configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## 🎯 Overview

Legal Rights Advisor is a comprehensive web application designed to bridge the gap between complex legal systems and everyday Indian citizens. Built with React 19 and powered by Google's Gemini AI, it provides accessible legal guidance in multiple Indian languages.

### 🎪 Target Audience
- **Rural citizens** with limited legal knowledge
- **Urban users** seeking quick legal guidance
- **Non-English speakers** requiring native language support
- **Emergency situations** requiring immediate legal assistance

---

## ✨ Features

### 🤖 AI-Powered Core
- **Smart Legal Search** - Gemini AI-powered comprehensive legal information
- **Intelligent Chatbot** - 24/7 legal assistant with conversation memory
- **Rights Calculator** - Personalized legal advice based on user situation

### 🗣️ Accessibility Features
- **Voice Search** - Speech recognition in 4 languages
- **Text-to-Speech** - Audio responses for accessibility
- **Multilingual Support** - English, Hindi, Marathi, Telugu

### 📄 Legal Tools
- **Document Templates** - Ready-to-use legal forms with PDF generation
- **Emergency Contacts** - Location-based legal aid and helplines
- **Case Studies** - Real-world legal success stories

### 🎨 User Experience
- **Responsive Design** - Mobile-first approach for all devices
- **Dark/Light Theme** - Comfortable viewing in any environment
- **Smooth Animations** - Enhanced user interaction with Framer Motion

---

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with concurrent features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first styling framework

### State & Routing
- **Zustand** - Lightweight state management
- **React Router DOM** - Client-side routing

### AI & APIs
- **Google Gemini API** - AI-powered legal guidance
- **Web Speech API** - Voice recognition and synthesis

### Utilities
- **Framer Motion** - Smooth animations and transitions
- **jsPDF** - Client-side PDF generation
- **React Hot Toast** - User notifications

---


## 📱 Usage

### Basic Navigation
- **Search Legal Questions** - Use the main search bar with voice or text
- **Chat with AI** - Click the chatbot icon for detailed conversations
- **Download Documents** - Access legal forms in the Documents section
- **Emergency Help** - Find local legal aid in Emergency Contacts

### Voice Features
- Click microphone icon to activate voice search
- Speak naturally in your preferred language
- Use speaker icons to hear responses aloud

### Language Switching
- Use the language switcher in the header
- All content, voice features, and documents adapt automatically

---

## 📁 Project Structure

legal-advisor-app/
├── src/
│ ├── components/
│ │ ├── common/ # Header, Sidebar, Search
│ │ ├── sections/ # Features, Calculator, Documents
│ │ ├── chatbot/ # AI Chat Interface
│ │ └── ui/ # Reusable UI Components
│ ├── pages/ # Route Pages (Home, FAQ, About)
│ ├── hooks/ # Custom React Hooks
│ ├── services/ # API Services (Gemini, Translation)
│ ├── store/ # Zustand State Management
│ ├── utils/ # Helper Functions
│ └── styles/ # Global CSS
├── public/ # Static Assets
└── config files # Vite, Tailwind, PostCSS

Made by Hactivate
