import ProjectCard from "./ProjectCard";
/** Project page for site. */



function Projects(){
    let projectsInfo = [
        {
            title: "Jobly",
            description: "A full-stack app for finding companies and jobs.",
            github: "https://github.com/BMLucano/react-jobly",
            demo: "https://react-jobly-bl.surge.sh/",
            img:"",
        },
        {
            title: "Share BnB",
            description: "A an app for exploring outdoor places to rent.",
            github: "https://github.com/BMLucano/sharebnb",
            demo: "https://bml-sharebnb.onrender.com/",
            img:"",
        },
        {
            title: "Warbler",
            description: "A twitter clone.",
            github: "https://github.com/BMLucano/flask-warbler",
            demo: "https://brandie-lucano-warbler.onrender.com/",
            img:"",
        }

    ]
    return(
        <div>
            <h3>Featured Work</h3>
            {projectsInfo.map(p => <ProjectCard id={p.title} title={p.title} description={p.description} github={p.github} demo={p.demo} img={p.img}/>)}
        </div>
    )
}
export default Projects;