import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/me.png' className="profile-img" width={300} height={300} alt="Joe's personal headshot" />
      <div className="hero-text">
        <h1>Hey, I'm Baseem 🚲</h1>
        <p>
          React | NodeJS | PostgreSQL | Docker | Cyclist
        </p>
        <div className="social-icons">
          
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
    </div>
  )
}

export default Hero;