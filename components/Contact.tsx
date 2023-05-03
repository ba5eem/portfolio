// Define a functional component called Contact using the arrow function syntax
const Contact = () => {
  // Return a div element with class name 'contact-container'
  // containing a heading, a paragraph, and a link
  return (
    <div className="contact-container">
      <h2>Get In Touch</h2>
      <p>If you're looking to hire an experienced Node.js engineer with a passion for problem-solving, leadership, and collaboration, please feel free to send me an email.</p>
      <a href="mailto:baseem+portfolio@gmail.com" className='cta-btn'>Say Hello</a>
    </div>
  )
}

// Export the Contact component as the default export of the module
export default Contact;
