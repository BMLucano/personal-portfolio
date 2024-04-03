import ProjectCard from "./ProjectCard";
import "./Projects.css"
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

// function Projects(){

//     return(
//         <div className="container">
//             <div className="row">
//                 <div className="card">
//                     <div className="card-body bg-secondary d-flex flex-wrap align-items-center">
//                             <h1 className="col-3 text-left">My toolbox:</h1>
//                             <img className="icon col-1" src="src/images/icons/Bootstrap.svg" alt="Bootstrap icon"></img>
//                             <img className="icon col-1" src="src/images/icons/CSS3.svg" alt="CSS icon"></img>
//                             <img className="icon col-1" src="src/images/icons/Django.svg" alt="Django icon"></img>
//                             <img className="icon col-1" src="src/images/icons/Express.svg" alt="Express icon"></img>
//                             <img className="icon col-1" src="src/images/icons/Flask.svg" alt="Flask icon"></img>
//                             <img className="icon col-1" src="src/images/icons/Git.svg" alt="Git icon"></img>
//                             <img className="icon col-1" src="src/images/icons/GitHub.svg" alt="GitHub icon"></img>
//                             <img className="icon col-1" src="src/images/icons/HTML5.svg" alt="HTML icon"></img>
//                             <img className="icon col-1" src="src/images/icons/Insomnia.svg" alt="Insomnia icon"></img>
//                             <img className="icon col-1" src="src/images/icons/JavaScript.svg" alt="JavaScript icon"></img>
//                             <img className="icon col-1" src="src/images/icons/Node.js.svg" alt="Node.js icon"></img>
//                             <img className="icon col-1" src="src/images/icons/NPM.svg" alt="NPM icon"></img>
//                             <img className="icon col-1" src="src/images/icons/PostgresSQL.svg" alt="PostgresSQL icon"></img>
//                             <img className="icon col-1" src="src/images/icons/Python.svg" alt="Python icon"></img>
//                             <img className="icon col-1" src="src/images/icons/React.svg" alt="React icon"></img>
//                             <img className="icon col-1" src="src/images/icons/SQLAlchemy.svg" alt="SQLAlchemy icon"></img>
//                             <img className="icon col-1" src="src/images/icons/TypeScript.svg" alt="TypeScript icon"></img>
//                             <img className="icon col-1" src="src/images/icons/VSCode.svg" alt="VSCode icon"></img>
//                     </div>
//                 </div>
//             </div>
//             <h1 className="text-success mt-2 mb-3">Featured Work</h1>
//             <div className="row">
//                 {projectsInfo.map(p => (
//                     <div className="col-sm-6 mb-3" key={p.title}>
//                         <ProjectCard
//                             title={p.title}
//                             description={p.description}
//                             tech={p.tech}
//                             github={p.github}
//                             demo={p.demo}
//                             img={p.img}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

function Projects() {
    return (
        <div className="container">
            <div className="toolbox-section bg-secondary border-primary p-3 mb-3">
                <h1 className="text-left text-primary">My Toolbox:</h1>
                <div className="d-flex flex-wrap align-items-center justifu-content-center">
                    <img className="icon" src="src/images/icons/Bootstrap.svg" alt="Bootstrap icon"></img>
                    <img className="icon" src="src/images/icons/CSS3.svg" alt="CSS icon"></img>
                    <img className="icon" src="src/images/icons/Django.svg" alt="Django icon"></img>
                    <img className="icon" src="src/images/icons/Express.svg" alt="Express icon"></img>
                    <img className="icon" src="src/images/icons/Flask.svg" alt="Flask icon"></img>
                    <img className="icon" src="src/images/icons/Git.svg" alt="Git icon"></img>
                    <img className="icon" src="src/images/icons/GitHub.svg" alt="GitHub icon"></img>
                    <img className="icon" src="src/images/icons/HTML5.svg" alt="HTML icon"></img>
                    <img className="icon" src="src/images/icons/Insomnia.svg" alt="Insomnia icon"></img>
                    <img className="icon" src="src/images/icons/JavaScript.svg" alt="JavaScript icon"></img>
                    <img className="icon" src="src/images/icons/Node.js.svg" alt="Node.js icon"></img>
                    <img className="icon" src="src/images/icons/NPM.svg" alt="NPM icon"></img>
                    <img className="icon" src="src/images/icons/PostgresSQL.svg" alt="PostgresSQL icon"></img>
                    <img className="icon" src="src/images/icons/Python.svg" alt="Python icon"></img>
                    <img className="icon" src="src/images/icons/React.svg" alt="React icon"></img>
                    <img className="icon" src="src/images/icons/SQLAlchemy.svg" alt="SQLAlchemy icon"></img>
                    <img className="icon" src="src/images/icons/TypeScript.svg" alt="TypeScript icon"></img>
                    <img className="icon" src="src/images/icons/VSCode.svg" alt="VSCode icon"></img>
                </div>
            </div>
            <h1 className="text-success mt-2 mb-3">Featured Work</h1>
            <div className="row">
                {projectsInfo.map(p => (
                    <div className="col-sm-6 mb-3" key={p.title}>
                        <ProjectCard
                            title={p.title}
                            description={p.description}
                            tech={p.tech}
                            github={p.github}
                            demo={p.demo}
                            img={p.img}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;