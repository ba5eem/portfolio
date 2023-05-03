// Import the Image component from the 'next/image' module
import Image from "next/image";

// Define a functional component called About using the arrow function syntax
const About = () => {
  // Return a div element with class name 'about-container'
  // containing a heading, a paragraph, and an Image component
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            I am a passionate and skilled developer who has always found joy in tackling programming challenges and mastering APIs. One of my proudest accomplishments was leading the development of remote-operated tools and services for the University of Hawaii's Institute for Astronomy UKIRT telescope. This experience was both challenging and rewarding, and it reminded me of the fun that coding can be. 
          </p>
          <p>As part of the project, I utilized my expertise in bash scripting to develop several scripts that automated processes and streamlined tasks. Additionally, I played a critical role in building the system using Docker Swarm, which allowed us to deploy and manage containers at scale. This experience not only deepened my understanding of these technologies, but it also provided me with the opportunity to collaborate with a dedicated and talented team towards a shared goal. I am excited to continue to grow and learn as a developer, and I believe that my skills and passion make me an ideal candidate for your team.</p>
        </div>
        <div className="about-img">
          <Image src='/me.png' className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  )
}

// Export the About component as the default export of the module
export default About;
