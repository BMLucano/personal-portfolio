import { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";


/** Homepage for site. */

function Home(){
    const [showAbout, setShowAbout] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showContact, setShowContact] = useState(false);

    function handleAbout(){
        setShowAbout(true);
        setShowProjects(false);
        setShowContact(false);
    }

    function handleProjects(){
        setShowProjects(true);
        setShowAbout(false);
        setShowContact(false);
    }

    function handleContact(){
        setShowContact(true);
        setShowAbout(false);
        setShowProjects(false);
    }


        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="text-light"><a href="/">Hi, I'm Brandie Lucano.</a></h1>
                        <h3 className="text-secondary">Software Engineer and Educator</h3>

                        <div className="mt-3">
                            <button onClick={handleAbout} className="btn btn-primary btn-outline-warning mr-1">About Me</button>
                            <button onClick={handleProjects} className="btn btn-primary btn-outline-success mr-1">Projects</button>
                            <button onClick={handleContact} className="btn btn-primary btn-outline-info mr-1">Contact</button>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        {showAbout && <About/>}
                        {showProjects && <Projects/>}
                        {showContact && <Contact />}
                    </div>
                </div>
            </div>

    )
}

export default Home;
