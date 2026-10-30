# EventSphere — Event Management System

A React JS mini project that lets students browse, search and filter college
events (music, sports, cultural, workshops, conferences and more) from one
clean, simple website.

## Features

- **Home page** with a hero banner and featured upcoming events
- **Events page** with a full event grid, live search by name, and category
  filtering
- **Event details modal** with full event information (date, time, venue,
  description)
- **About page** explaining what event management is and why it matters
- **Contact/Feedback page** with a working front-end form (name, email,
  message) built using controlled components
- Fully responsive layout (desktop, tablet, mobile)
- No external images or internet connection required — event "banners" use
  CSS colors + emoji icons instead of downloaded photos, so the project runs
  identically offline or online

## Technologies Used

- [React JS](https://react.dev/) 18 (functional components + hooks)
- [React Router](https://reactrouter.com/) 6 (client-side page navigation)
- [Vite](https://vitejs.dev/) (development server & build tool)
- Plain CSS (no external CSS framework)

## Project Structure

```
event-management/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx                # Root component + route definitions
│   ├── App.css                 # Component styles
│   ├── index.css                # Global styles / design tokens
│   ├── data/
│   │   └── events.js             # All event data (single source of truth)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── EventCard.jsx
│   │   └── EventModal.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── Events.jsx
│       ├── About.jsx
│       └── Contact.jsx
```

## Installation & Running the Project

1. Make sure [Node.js](https://nodejs.org/) (version 18 or higher) is
   installed on your computer.
2. Open a terminal inside the `event-management` folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the URL shown in the terminal (usually `http://localhost:5173`) in
   your browser.
6. To stop the server, press `Ctrl + C` in the terminal.
7. To create a production build (optional):
   ```bash
   npm run build
   ```

## Basic Usage

- Use the navigation bar to move between **Home**, **Events**, **About** and
  **Contact**.
- On the **Events** page, type into the search box to find an event by name,
  or use the dropdown to filter by category.
- Click **View Details** on any event card to open a pop-up with full event
  information.
- Fill in the **Contact** form and click **Submit** to see a confirmation
  message (this is a front-end only demo — no data is sent to a server).

## Notes

This project is intentionally kept simple (no backend, database or
authentication) so that every part of the code can be understood and
explained by the student who built it, as required for the EIT mini project
submission.
