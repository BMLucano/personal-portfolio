import ProjectCard from "./ProjectCard";
/** Project page for site. */
let projectsInfo = [
    {
        title: "Jobly",
        description: "A full-stack app for finding companies and jobs.",
        tech:" React - Node.js - Express - PostgreSQL - JWT",
        github: "https://github.com/BMLucano/react-jobly",
        demo: "https://react-jobly-bl.surge.sh/",
        img:"src/images/jobly-gif.gif",
    },
    {
        title: "Share BnB",
        description: "An app for exploring outdoor places to rent.",
        tech:"Flask - jQuery - PostgreSQL - AWS - Bootstrap",
        github: "https://github.com/BMLucano/sharebnb",
        demo: "https://bml-sharebnb.onrender.com/",
        img:"src/images/sharebnb.gif",
    },
    {
        title: "Warbler",
        description: "An app similar to twitter...but warbler.",
        tech:"Flask - Jinja - PostgreSQL - Bootstrap - unittest",
        github: "https://github.com/BMLucano/flask-warbler",
        demo: "https://brandie-lucano-warbler.onrender.com/",
        img:"src/images/warbler.gif",
    }

]

function Projects(){

    return(
        <div>
            <h3 className="text-success mt-2 mb-2">Featured Work</h3>
            <div className="card-group">
            {projectsInfo.map(p => <ProjectCard key={p.title} title={p.title} description={p.description} tech={p.tech} github={p.github} demo={p.demo} img={p.img}/>)}
            </div>
        </div>
    )
}
export default Projects;