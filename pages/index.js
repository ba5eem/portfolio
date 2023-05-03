// Import the necessary components from the components directory
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

// Import the Head component from Next.js to update the head of the page
import Head from 'next/head';

// Define a functional component called Home
const Home = () => {
  return (
    <>
      <Head>
        // Set the page title, description, viewport, and favicon using the Head component
        <title>Baseem's Portfolio</title>
        <meta name="description" content="Baseem's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        
        // Add a stylesheet link to load Font Awesome icons
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>
      </Head>
      
      // Render the necessary components in the desired order
      <div>
        <Projects />
        <Skills />
        <Hero />
        <About />
        <Contact />
      </div>
    </>
  );
};

export default Home;
