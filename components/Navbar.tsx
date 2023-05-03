// Import the Link component from the 'next/link' module
import Link from "next/link";

// Define a functional component called Navbar using the arrow function syntax
const Navbar = () => {
  // Return a div element with class name 'nav-container'
  // containing a logo that links to the home page and a 'Resume' button
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Portfolio
        </Link>
      </div>
      <a href="https://docs.google.com/document/d/e/2PACX-1vQvjcHvHGdPph0WYyn2WdlW0hotUdKRdy4pQmMr-DCQa5O93GY0veMlF9UvBwpuIPlGoyegAaSvKa4H/pub" className="cta-btn">Resume</a>
    </div>
  )
}

// Export the Navbar component as the default export of the module
export default Navbar;
