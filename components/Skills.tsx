// Define a functional component called Skills using the arrow function syntax
const Skills = () => {
  // Return a div element with class name 'skills-container'
  // containing a header and a grid of skill cards
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <div className="skill-card node">
          <i className="fa-brands fa-node-js"></i>
          <p>Node</p>
        </div>
        <div className="skill-card docker">
          <i className="fa-brands fa-docker"></i>
          <p>Docker</p>
        </div>
        <div className="skill-card js">
          <i className="fa-brands fa-js-square js-icon"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill-card react">
          <i className="fa-brands fa-react react-icon"></i>
          <p>React</p>
        </div>
        <div className="skill-card linux">
          <i className="fa-brands fa-linux"></i>
          <p>Linux</p>
        </div>
        <div className="skill-card database">
          <i className="fa-sharp fa-solid fa-database"></i>
          <p>SQL</p>
        </div>
        <div className="skill-card aws">
          <i className="fa-brands fa-aws"></i>
          <p>AWS</p>
        </div>
        <div className="skill-card azure">
          <i className="fa-brands fa-microsoft"></i>
          <p>azure</p>
        </div>
      </div>
    </div>
  )
}

// Export the Skills component as the default export of the module
export default Skills;



// with react individual import


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faNode,faDocker,faJs,faReact,faLinux, faMicrosoft, faAws } from '@fortawesome/free-brands-svg-icons'
// import { faDatabase } from "@fortawesome/free-solid-svg-icons"





// const Skills = () => {
//   return (
//     <div className="skills-container">
//       <h2>Skills</h2>
//       <div className="grid-skills">
//         <div className="skill-card node">
//           <FontAwesomeIcon icon={faNode} />
//           <p>Node</p>
//         </div>
//         <div className="skill-card docker">
//           <FontAwesomeIcon icon={faDocker} />
//           <p>Docker</p>
//         </div>
//         <div className="skill-card js">
//           <FontAwesomeIcon icon={faJs} />
//           <p>JavaScript</p>
//         </div>
//         <div className="skill-card react">
//           <FontAwesomeIcon icon={faReact} />
//           <p>React</p>
//         </div>
//         <div className="skill-card linux">
//           <FontAwesomeIcon icon={faLinux} />
//           <p>Linux</p>
//         </div>
//         <div className="skill-card database">
//           <FontAwesomeIcon icon={faDatabase} />
//           <p>SQL</p>
//         </div>
//         <div className="skill-card aws">
//           <FontAwesomeIcon icon={faAws} />
//           <p>AWS</p>
//         </div>
//         <div className="skill-card azure">
//           <FontAwesomeIcon icon={faMicrosoft} />
//           <p>azure</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Skills;

