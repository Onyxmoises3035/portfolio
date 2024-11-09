import CardP from "./CardP";

const Projects = ({ lan }) => {

    return (
        <div id="projects" className="section grid grid-cols-4">
            {lan.projects.map(project => (
                <CardP key={project.id} id={project.id} name={project.name} links={project.links} image={project.image} tecs={project.tecs} info={project.info} />
            ))}
        </div>
    )
}

export default Projects;