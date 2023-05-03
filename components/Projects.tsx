// Import the projectData array from a local data module
import { projectData } from './data.js';

// Import the Link component from the 'next/link' module and the useRouter hook from the 'next/router' module
import Link from "next/link"
import { useRouter } from "next/router"

// Define a functional component called Projects using the arrow function syntax
const Projects = () => {
  // Use the useRouter hook to access the current route
  const router = useRouter()

  // Return a div element with class name 'projects-container'
  // containing a header, a grid of project cards, and a link to each project
  return (
    <div className="projects-container">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projectData && projectData.map((project) => (
          <Link href={project.projectLink}>
          <div className="project-card" key={project.id}>
            <div className="project-header">
              <i className="fa-regular fa-folder-open folder-icon"></i>
              <div className="small-icons">
                <a href={project.gitHubLink}><i className="fa-brands fa-github"></i></a>
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          </Link>
        ))
        }
      </div>
    </div>
  )
}

// Export the Projects component as the default export of the module
export default Projects;
