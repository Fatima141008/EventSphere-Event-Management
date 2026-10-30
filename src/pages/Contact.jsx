// Contact.jsx
// ------------------------------------------------------------
// A feedback / contact form. This page demonstrates CONTROLLED
// FORMS in React - every input's value comes from state, and every
// keystroke updates that state through onChange.
//
// REACT CONCEPTS USED HERE:
// - useState: one object holding all three form fields together,
//   plus a separate boolean state for whether the form was submitted.
// - Controlled components: <input>/<textarea> value = state value.
// - Event handling: onChange updates fields, onSubmit handles the
//   form submission.
// - event.preventDefault(): stops the browser from doing its normal
//   behaviour (reloading the page), since we handle everything with
//   React instead.
// - Conditional rendering: after submitting, we hide the form and
//   show a thank-you message instead.
// ------------------------------------------------------------

import { useState } from "react";

function Contact() {
  // Keeping all three fields in ONE state object (instead of three
  // separate useState calls) means we only need one onChange handler
  // (handleChange below) for every input, which keeps the code short.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // isSubmitted switches the form into a "Thank you" view once the
  // user has successfully submitted feedback.
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    // The spread operator (...formData) copies all existing field
    // values, and [name]: value overwrites just the one field the
    // user is currently typing into (name, email, or message).
    // We NEVER modify formData directly - React state must always
    // be replaced with a new object, not edited in place.
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    // Without this line, the browser would try to reload the page
    // and send the form data to a server address, which we do not
    // have in this project (there is no backend). preventDefault()
    // stops that so React can handle the submission instead.
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div className="page-section">
      <div className="section-heading">
        <div>
          <h2>Contact & Feedback</h2>
          <p>Have a suggestion or question about an event? Let us know.</p>
        </div>
      </div>

      {isSubmitted ? (
        <div className="form-success">
          Thank you, {formData.name || "there"}! Your feedback has been recorded.
          <br />
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;
