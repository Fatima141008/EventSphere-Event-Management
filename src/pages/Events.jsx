// Events.jsx
// ------------------------------------------------------------
// This page shows EVERY event, with a search box and a category
// filter dropdown. It is the most "React-heavy" page in the
// project, because it manages three separate pieces of state.
//
// REACT CONCEPTS USED HERE:
// - useState (three times): one each for the search text, the
//   selected category, and the event chosen for the details modal.
// - Controlled components: the <input> and <select> below always
//   show exactly what is stored in state - React state is the
//   "single source of truth", not the DOM. This is what "controlled"
//   means.
// - Event handling: onChange handlers update state as the user types
//   or picks a category.
// - filter() + map(): filter() narrows the full list down to only
//   the events that match the search text AND category, then map()
//   turns the narrowed-down list into EventCard components.
// - Conditional rendering: if no events match, we show a message
//   instead of an empty grid.
// ------------------------------------------------------------

import { useState } from "react";
import events, { categoryStyles } from "../data/events.js";
import EventCard from "../components/EventCard.jsx";
import EventModal from "../components/EventModal.jsx";

function Events() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Object.keys() reads the category names straight from
  // categoryStyles (Music, Sports, College, ...) so the dropdown
  // list always matches the categories actually used in events.js.
  // "All" is added manually as the first, default option.
  const categoryOptions = ["All", ...Object.keys(categoryStyles)];

  // filteredEvents is recalculated every time the component
  // re-renders (i.e. every time searchText or selectedCategory
  // changes). It does NOT modify the original "events" array -
  // filter() always returns a brand new array.
  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;

    // The event is only kept in the final list if BOTH conditions
    // are true - this is how search and category filter combine.
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page-section">
      <div className="section-heading">
        <div>
          <h2>All Events</h2>
          <p>Search by name or filter by category to find what you're looking for.</p>
        </div>
      </div>

      <div className="controls-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search events by name..."
          value={searchText}
          // Every keystroke updates state, and React immediately
          // re-renders the filtered list below - there is no
          // separate "Search" button needed.
          onChange={(e) => setSearchText(e.target.value)}
        />

        <select
          className="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Conditional rendering: the ternary (? :) below checks if the
          filtered list is empty. If it is, we show a friendly message
          instead of map()-ing over an empty array (which would just
          render nothing, leaving a confusing blank space). */}
      {filteredEvents.length === 0 ? (
        <p className="no-results">No events match your search. Try a different keyword or category.</p>
      ) : (
        <div className="event-grid">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} onViewDetails={setSelectedEvent} />
          ))}
        </div>
      )}

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}

export default Events;
