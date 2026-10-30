// Footer.jsx
// ------------------------------------------------------------
// A very simple component that displays a copyright line at the
// bottom of every page. This is a great example of a component
// that takes NO props and has NO state - it just returns fixed JSX.
// It still deserves its own file/component because it keeps App.jsx
// clean and makes the footer reusable and easy to find.
// ------------------------------------------------------------

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p style={{ margin: 0 }}>
        © {currentYear} EventSphere — Event Management System | Built with React JS
      </p>
    </footer>
  );
}

export default Footer;
