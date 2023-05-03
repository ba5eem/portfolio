// Define a functional component called Footer using the arrow function syntax
const Footer = () => {
  // Return a div element with class name 'footer-container'
  // containing a horizontal line, a paragraph, and a set of social media links
  return (
    <>
      <hr/>
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} Baseem's Portfolio
        </p>
        <div className="social_icons">
          <a
            href="https://twitter.com/ba5eem"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/ba5eem"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/bmissaghi/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  )
}

// Export the Footer component as the default export of the module
export default Footer;
