// Import the global CSS file from the styles directory
import "../styles/global.css"

// Import the Layout component from the components directory
import Layout from '../components/layout';

// Define a functional component called App that takes two props: Component and pageProps
export default function App({ Component, pageProps }) {
  // Return the Layout component with the Component and pageProps passed as props
  // This will render the Component as a child of the Layout component
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
