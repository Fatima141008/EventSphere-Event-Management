// main.jsx
// ------------------------------------------------------------
// This is the very first file that runs when the project starts.
// Its only job is to "mount" (attach) our React application onto
// the single <div id="root"></div> that exists in index.html.
//
// WHY IS THIS FILE NEEDED?
// A React app is just JavaScript. Something has to tell the browser
// WHERE on the page to draw the React components. main.jsx does
// exactly that using ReactDOM.createRoot().render().
// If this file is removed, React has no starting point and nothing
// would ever appear on the screen, even though all the components
// still exist in code.
// ------------------------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter enables page navigation (Home / Events / About / Contact)
        without reloading the whole browser page. Every component inside it
        is allowed to use React Router features like <Link> and <Routes>. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
