// EventModal.jsx
// ------------------------------------------------------------
// EventModal shows the FULL details of one event in a pop-up box
// that appears on top of the page. It is a good example of
// CONDITIONAL RENDERING: the Events page only renders <EventModal />
// at all when an event has actually been selected.
//
// REACT CONCEPTS USED HERE:
// - Props: "event" (which event to show) and "onClose" (a function
//   to call when the user wants to close the modal).
// - Conditional rendering INSIDE the component: if "event" is null,
//   we return null, meaning React renders nothing for this component.
// ------------------------------------------------------------

import { categoryStyles } from "../data/events.js";

function EventModal({ event, onClose }) {
  // Safety check: if no event was passed in (event is null), there
  // is nothing to show, so we render nothing at all. This lets the
  // parent component simply always include <EventModal /> in its
  // JSX without worrying about wrapping it in an if statement.
  if (!event) {
    return null;
  }

  const style = categoryStyles[event.category] || { color: "#9CA3AF", icon: "📅" };

  return (
    // Clicking the dark overlay behind the box also closes the modal,
    // which is the behaviour users expect from most pop-ups.
    <div className="modal-overlay" onClick={onClose}>
      {/* stopPropagation prevents a click INSIDE the white box from
          "bubbling up" to the overlay's onClick and closing the modal
          by accident while the user is just reading the details. */}
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-banner">
  <img
    src={event.image}
    alt={event.name}
    className="modal-event-image"
  />

  <button className="modal-close" onClick={onClose} aria-label="Close">
    ✕
  </button>
</div>

        <div className="modal-content">
          <span className="event-category-badge" style={{ backgroundColor: style.color }}>
            {event.category}
          </span>
          <h2>{event.name}</h2>

          <p className="modal-detail-row">
            <strong>Date:</strong> {event.date}
          </p>
          <p className="modal-detail-row">
            <strong>Time:</strong> {event.time}
          </p>
          <p className="modal-detail-row">
            <strong>Venue:</strong> {event.venue}
          </p>

          <p style={{ marginTop: "14px" }}>{event.description}</p>
        </div>
      </div>
    </div>
  );
}

export default EventModal;
