// About.jsx
// ------------------------------------------------------------
// A mostly static informational page explaining what event
// management is and why it matters. There is no state here at
// all - it is a good example of a "presentational" component that
// simply displays fixed content using plain JSX.
// ------------------------------------------------------------

function About() {
  return (
    <div className="page-section">
      <div className="section-heading">
        <div>
          <h2>About Event Management</h2>
          <p>Understanding what it takes to plan and run a successful event.</p>
        </div>
      </div>

      <div className="about-block">
        <h3>What is Event Management?</h3>
        <p>
          Event management is the process of planning, organizing and running
          an event from start to finish. It covers everything from choosing a
          date, time and venue, to arranging schedules, inviting participants,
          and making sure everything runs smoothly on the actual day.
        </p>
      </div>

      <div className="about-block">
        <h3>Why is it Important?</h3>
        <p>
          A poorly planned event can lead to clashing schedules, confused
          attendees, and wasted resources. Good event management ensures
          that information reaches the right people at the right time, venues
          are used efficiently, and every event category — from a small
          workshop to a large wedding — gets the attention it needs.
        </p>
      </div>

      <div className="about-block">
        <h3>Why Proper Planning and Organization Matters</h3>
        <p>
          Clear categorization (music, sports, cultural, academic, and so on),
          accurate scheduling, and easy access to event details help
          participants decide which events to attend and help organizers avoid
          double-booking venues or clashing timings. This is exactly the
          problem EventSphere is designed to help solve: giving students one
          simple place to browse, search and filter every event happening on
          campus.
        </p>
      </div>
    </div>
  );
}

export default About;
