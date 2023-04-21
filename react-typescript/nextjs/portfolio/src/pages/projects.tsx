import { projects } from "../../data"

const Projects=()=>{
    return (
        <div>
            <nav>NavBar</nav>

            <div>
                {
                    projects.map(project=>{
                        <div>
                            <ProjectCard/>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Projects
