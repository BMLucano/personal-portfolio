import ProjectCard from "./ProjectCard";
import "./Projects.css"
import Bootstrap from "./images/icons/Bootstrap.svg"
import CSS from "./images/icons/CSS3.svg"
import Django from "./images/icons/Django.svg"
import Express from "./images/icons/Express.svg"
import Flask from "./images/icons/Flask.svg"
import Git from "./images/icons/Git.svg"
import GitHub from "./images/icons/GitHub.svg"
import HTML from "./images/icons/HTML5.svg"
import Insomnia from "./images/icons/Insomnia.svg"
import JavaScript from "./images/icons/JavaScript.svg"
import Node from "./images/icons/Node.js.svg"
import NPM from "./images/icons/NPM.svg"
import PostgresSQL from "./images/icons/PostgresSQL.svg"
import Python from "./images/icons/Python.svg"
import React from "./images/icons/React.svg"
import SQLAlchemy from "./images/icons/SQLAlchemy.svg"
import TypeScript from "./images/icons/TypeScript.svg"
import VSCode from "./images/icons/VSCode.svg"

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

function Projects() {
    return (
        <div className="container">
            <div className="toolbox-section bg-secondary border-primary p-3 mb-3">
                <h1 className="text-left text-primary">My Toolbox:</h1>
                <div className="d-flex flex-wrap align-items-center justifu-content-center">
                    <img className="icon" src={Bootstrap} alt="Bootstrap icon"></img>
                    <img className="icon" src={CSS} alt="CSS icon"></img>
                    <img className="icon" src={Django} alt="Django icon"></img>
                    <img className="icon" src={Express} alt="Express icon"></img>
                    <img className="icon" src={Flask} alt="Flask icon"></img>
                    <img className="icon" src={Git} alt="Git icon"></img>
                    <img className="icon" src={GitHub} alt="GitHub icon"></img>
                    <img className="icon" src={HTML} alt="HTML icon"></img>
                    <img className="icon" src={Insomnia} alt="Insomnia icon"></img>
                    <img className="icon" src={JavaScript} alt="JavaScript icon"></img>
                    <img className="icon" src={Node} alt="Node.js icon"></img>
                    <img className="icon" src={NPM} alt="NPM icon"></img>
                    <img className="icon" src={PostgresSQL} alt="PostgresSQL icon"></img>
                    <img className="icon" src={Python} alt="Python icon"></img>
                    <img className="icon" src={React} alt="React icon"></img>
                    <img className="icon" src={SQLAlchemy} alt="SQLAlchemy icon"></img>
                    <img className="icon" src={TypeScript} alt="TypeScript icon"></img>
                    <img className="icon" src={VSCode} alt="VSCode icon"></img>
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