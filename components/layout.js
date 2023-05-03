// Import the Navbar and Footer components from local modules
import Navbar from './navbar';
import Footer from './footer';

// Define a functional component called Layout using the arrow function syntax
const Layout = ({ children }) => {
  // Return a fragment containing the Navbar and Footer components, as well as a main element that contains any child components
  return (
    <>
      <Navbar />
      
      <main>{children}</main>
      <Footer />
    </>
  )
}

// Export the Layout component as the default export of the module
export default Layout;
