// App.jsx
// ------------------------------------------------------------
// App.jsx is the "root component" of the project. Every other
// component (Navbar, pages, Footer) is eventually displayed
// through this one file.
//
// WHAT DOES IT DO?
// 1. It always shows the Navbar at the top and the Footer at the
//    bottom, on every page.
// 2. In between, it uses React Router's <Routes> to decide WHICH
//    page component to show, based on the current URL path.
//
// WHY IS ROUTING NEEDED?
// Without routing, we would have to use if/else or state just to
// switch between Home, Events, About and Contact "pages". React
// Router lets us do this cleanly using URL paths like "/events",
// which also lets the browser's Back/Forward buttons work properly.
// ------------------------------------------------------------

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* main-content wraps whichever page is currently active.
          Routes looks at the browser URL and renders the FIRST
          Route whose "path" matches it. */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
