
import Link from "next/link";

const Navbar = () => {
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

export default Navbar;