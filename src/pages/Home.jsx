// Home.jsx
// ------------------------------------------------------------
// The landing page of the website. It shows a welcome banner
// (hero section), a short introduction, and a few "featured"
// upcoming events pulled from the same events.js data file used
// by the Events page.
//
// REACT CONCEPTS USED HERE:
// - map(): used to turn the first 3 events in our array into 3
//   <EventCard /> components, without repeating JSX by hand.
// - useState: keeps track of which event (if any) the user clicked
//   on, so we know whether to show the EventModal.
// - Link (react-router-dom): lets us navigate to the Events page
//   without a full page reload, when the user clicks "Explore Events".
// ------------------------------------------------------------

import { useState } from "react";
import { Link } from "react-router-dom";
import events from "../data/events.js";
import EventCard from "../components/EventCard.jsx";
import EventModal from "../components/EventModal.jsx";

function Home() {
  // selectedEvent stores the event object the user wants to see in
  // detail. It starts as "null", which means "no event selected /
  // modal closed". Clicking a card's "View Details" button updates
  // this state, which causes React to re-render and show the modal.
  const [selectedEvent, setSelectedEvent] = useState(null);

  // .slice(0, 3) copies just the first 3 events from the full list
  // to show as "featured" events on the home page.
  const featuredEvents = events.slice(0, 3);

  return (
    <div>
      <section className="hero">
        <div className="hero-inner">
          <h1>Plan less. Attend more.</h1>
          <p>
            EventSphere brings every college event — music, sports, workshops and
            conferences — onto a single, easy-to-browse page, so
            students never miss out on what's happening on campus.
          </p>
          <div className="hero-buttons">
            <Link to="/events" className="btn btn-primary">
              Explore Events
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <div>
            <h2>Featured Events</h2>
            <p>A quick look at some of the upcoming events on campus.</p>
          </div>
          <Link to="/events" className="link-button">
            View all →
          </Link>
        </div>

        <div className="event-grid">
          {/* Every event in featuredEvents becomes one EventCard.
              "key={event.id}" is required by React whenever we render
              a list with map() - it helps React tell each card apart
              so it can update the list efficiently. */}
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} onViewDetails={setSelectedEvent} />
          ))}
        </div>
      </section>

      {/* EventModal only actually shows itself when selectedEvent is
          not null (see the check inside EventModal.jsx). */}
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}

export default Home;
