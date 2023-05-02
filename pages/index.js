import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Baseem's Portfolio</title>
        <meta name="description" content="Baseem's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>
      </Head>
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