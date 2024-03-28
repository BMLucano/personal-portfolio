import ProjectCard from "./ProjectCard";
/** Project page for site. */
let projectsInfo = [
    {
        title: "Jobly",
        description: "A full-stack app for finding companies and jobs.",
        github: "https://github.com/BMLucano/react-jobly",
        demo: "https://react-jobly-bl.surge.sh/",
        img:"src/images/jobly-gif.gif",
    },
    {
        title: "Share BnB",
        description: "A an app for exploring outdoor places to rent.",
        github: "https://github.com/BMLucano/sharebnb",
        demo: "https://bml-sharebnb.onrender.com/",
        img:"src/images/sharebnb.gif",
    },
    {
        title: "Warbler",
        description: "A twitter clone.",
        github: "https://github.com/BMLucano/flask-warbler",
        demo: "https://brandie-lucano-warbler.onrender.com/",
        img:"",
    }

]

function Projects(){

    return(
        <div>
            <h3>Featured Work</h3>
            <div className="card-group">
            {projectsInfo.map(p => <ProjectCard key={p.title} title={p.title} description={p.description} github={p.github} demo={p.demo} img={p.img}/>)}
            </div>
        </div>
    )
}
export default Projects;