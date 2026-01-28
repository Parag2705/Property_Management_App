# Property Portfolio Management Application

A clean, executive-friendly property portfolio management application designed for minimal cognitive load with large fonts, clear visual hierarchy, and intuitive navigation.

## Overview

This application helps large business groups manage their property portfolios with ease. Built specifically for senior executives, it features extra-large typography, high-contrast colors, and a summary-first design pattern that presents actionable information upfront.

## Key Features

### 1. Dashboard Overview
- Morning briefing style presentation
- Key metrics at a glance (total properties, portfolio value, items needing attention)
- Properties requiring immediate attention
- Upcoming tasks with due dates
- Recent directions given with priority indicators

### 2. All Properties View
- Filterable card grid with status indicators
- Filter by status (Active, Needs Attention, Under Review)
- Filter by portfolio type (Commercial, Industrial, Hospitality, Residential)
- Complete property information cards including:
  - Area, values (purchase & current), legal status
  - Mortgage information
  - Document tracking
  - Task management
  - SPOC (Single Point of Contact) with quick phone/email actions

### 3. Meeting Minutes
- Chronological view of all meetings
- Chairman's direction history
- Task completion tracking with progress indicators
- Priority levels (High, Medium, Low) with visual indicators
- Status tracking (Pending, In Progress, Completed)
- Expandable meeting details

### 4. Map View
- Geographic overview of all properties across India
- Interactive property markers
- Site image galleries with navigation
- Detailed property information modal
- Visual status indicators on map

## UX Optimizations for Senior Users

- **Extra Large Typography**: 18-20px body text, 32px+ headers
- **High Contrast Palette**: Stone/Amber/Emerald color scheme with clear status colors
- **Large Click Targets**: Minimum 44px touch areas for easy interaction
- **Dual Status Indicators**: Color + Text (never color alone)
- **Summary-First Pattern**: Dashboard shows actionable items upfront, details on drill-down

## Technology Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful, consistent icons

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Property_Management_App
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Property_Management_App/
├── src/
│   ├── components/
│   │   └── Navigation.jsx       # Main navigation bar
│   ├── pages/
│   │   ├── Dashboard.jsx        # Dashboard overview
│   │   ├── AllProperties.jsx    # Properties grid view
│   │   ├── MeetingMinutes.jsx   # Meeting minutes tracker
│   │   └── MapView.jsx          # Geographic map view
│   ├── data/
│   │   └── mockData.js          # Mock property and meeting data
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # App entry point
│   └── index.css                # Global styles and Tailwind
├── index.html                   # HTML entry point
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── postcss.config.js           # PostCSS configuration
```

## Data Structure

The application uses comprehensive mock data including:

- **6 Properties** across different Indian cities (Mumbai, Pune, Goa, Bangalore, Delhi NCR, Hyderabad)
- **3 SPOCs** (Single Points of Contact) with contact information
- **6 Meeting Records** with directions and task tracking
- **Portfolio Statistics** for dashboard metrics

## Actionable Next Steps

1. **Integrate Real Map API** - Replace placeholder with Google Maps/Mapbox for actual property plotting
2. **Add Image Upload** - Connect site visit photo uploads from SPOCs
3. **Backend Integration** - Connect to your database for live property/meeting data
4. **Export MOM as PDF** - Add meeting minutes export for sharing
5. **Mobile Responsiveness** - Extend for tablet use during site visits

## Company/Venture Tracking

Properties are organized with clear hierarchy:
- **Group** - Business group that owns the venture
- **Owner** - Specific ownership entity
- **Portfolio** - Property category (Commercial, Industrial, Hospitality, Residential)

## Contact Management

Each property has a dedicated SPOC with:
- Name and role
- Direct phone number (click to call)
- Email address (click to email)
- Assigned properties tracking

## Task & Meeting Management

- Meeting minutes stored chronologically
- Directions tracked with assigned person and priority
- Task completion status (Pending, In Progress, Completed)
- Due date tracking and visual indicators
- Progress bars for meeting completion rates

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

All modern browsers with ES6+ support are compatible.

## License

Proprietary - For internal business use only
