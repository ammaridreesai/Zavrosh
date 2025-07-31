# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a React-based portfolio/landing page for Zavrosh, a software development company. The application is built with Create React App and follows a component-based architecture for displaying company information, services, portfolio items, and contact details.

## Development Commands

### Core Development
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

### Project Structure
```
src/
├── App.jsx - Main application component that orchestrates all sections
├── components/ - Reusable UI components for each page section
│   ├── navigation.jsx - Site navigation
│   ├── header.jsx - Hero section
│   ├── features.jsx - Features/industries served
│   ├── about.jsx - About company section
│   ├── services.jsx - Services offered
│   ├── portfolio.jsx - Portfolio/projects showcase
│   ├── gallery.jsx - Technology stack gallery
│   ├── testimonials.jsx - Client testimonials
│   ├── Team.jsx - Team members
│   └── contact.jsx - Contact information
├── data/
│   └── data.json - All content data (text, images, portfolio items)
└── App.css - Main styles
```

## Architecture

### Data-Driven Design
- All content is centralized in `src/data/data.json`
- Components receive data as props from the main App component
- Content includes: Header, About, Services, Portfolio, Gallery (tech stack), Testimonials, Team, Contact

### Component Pattern
- Each major page section is a separate component
- Components are functional components using React hooks
- App.jsx imports JsonData and distributes it to child components
- Uses smooth scrolling navigation between sections

### Key Dependencies
- `react` v17 - Core React library
- `react-modal` - Modal functionality
- `smooth-scroll` - Smooth scrolling navigation
- `emailjs-com` - Email integration for contact forms
- `bootstrap` v5.3.7 - CSS framework
- `swiper` v11.2.2 - Carousel/slider functionality

### Content Management
- Portfolio items support both images and videos
- Technologies are displayed with icons and names
- All content is easily editable through data.json
- Images are stored in public/img/ directory structure

## Development Notes

- The app uses Create React App, so standard CRA development practices apply
- No custom build scripts or complex bundling configuration
- Static assets (images, fonts) are served from the public/ directory
- The README.md file is empty, so refer to package.json for available scripts