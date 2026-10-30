// EventCard.jsx
// ------------------------------------------------------------
// EventCard displays ONE event as a card. It is used by the Home
// page (for featured events) and the Events page (for the full,
// filtered list). Instead of writing this card's HTML again and
// again for every event, we write it ONCE here and reuse it.
//
// REACT CONCEPTS USED HERE:
// - Props: EventCard receives the "event" object and an
//   "onViewDetails" function from its PARENT component. EventCard
//   itself never changes this data - it only displays it and calls
//   the function it was given. This is what makes it "reusable".
// - Destructuring props: { event, onViewDetails } pulls the two
//   props directly out of the props object for shorter code.
// ------------------------------------------------------------

import { categoryStyles } from "../data/events.js";

function EventCard({ event, onViewDetails }) {
  // Look up this event's theme color and icon using its category
  // name. If a category is ever misspelled, we fall back to a
  // neutral grey so the app never crashes because of missing data.
  const style = categoryStyles[event.category] || { color: "#9CA3AF", icon: "📅" };

  return (
    <div className="event-card">
       <img
        src={event.image}
        alt={event.name}
        className="event-image"
      />

      <div className="event-body">
        <span className="event-category-badge" style={{ backgroundColor: style.color }}>
          {event.category}
        </span>

        <h3 className="event-name">{event.name}</h3>

        <div className="event-meta">
          <span>📅 {event.date}</span>
          <span>⏰ {event.time}</span>
          <span>📍 {event.venue}</span>
        </div>

        <p className="event-description">{event.description}</p>

        <div className="event-card-footer">
          {/* When clicked, we call the function passed down from the
              parent, giving it THIS specific event. The parent
              (Events.jsx) decides what should happen next - in our
              case, opening the details modal. This is how a child
              component "talks back" to its parent in React. */}
          <button className="link-button" onClick={() => onViewDetails(event)}>
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
