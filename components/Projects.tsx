
import { projectData } from './data.js';
import Link from "next/link"
import { useRouter } from "next/router"


const Projects = () => {
  const router = useRouter()

  return (
    <div className="projects-container">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projectData && projectData.map((project) => (
          <Link className={router.pathname == "/docker" ? "active" : ""} href="/docker">
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

export default Projects;