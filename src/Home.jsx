import { useState } from "react";
// import Nav from "./Nav";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
// import portrait from "./images/portrait.jpeg"
import "./Home.css"
/** Homepage for site. */

function Home(){
    const [showAbout, setShowAbout] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showContact, setShowContact] = useState(false);

    // const imgStyles = {width: "200px", height: "300px"}


    function handleAbout(){
        setShowAbout(true);
        //hide other components
        setShowProjects(false);
        setShowContact(false);

    }

    function handleProjects(){
        setShowProjects(true);

        //hide other components
        setShowAbout(false);
        setShowContact(false)
    }

    function handleContact(){
        setShowContact(true);

        //hide other components
        setShowAbout(false);
        setShowProjects(false);
    }

    return(
        <div className="container">
            <div className="row stickey-top">
                <div className="col">
                    <h1>Hi, I'm Brandie Lucano.</h1>
                    <h3>Software Engineer and Educator</h3>
                    {/* <img style={imgStyles} src={portrait} alt="Brandie Lucano-portrait"></img> */}

                    <div>
                        <button onClick={handleAbout} className="btn btn-primary">About Me</button>
                        <button onClick={handleProjects} className="btn btn-primary">Projects</button>
                        <button onClick={handleContact} className="btn btn-primary">Contact</button>
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

// import { useState } from "react";
// import About from "./About";
// import Projects from "./Projects";
// import Contact from "./Contact";

// function Home(){
//     const [showAbout, setShowAbout] = useState(false);
//     const [showProjects, setShowProjects] = useState(false);
//     const [showContact, setShowContact] = useState(false);

//     // const imgStyles = {width: "200px", height: "300px", border-radius: "50%"}


//     function handleAbout(){
//         setShowAbout(true);
//         setShowProjects(false);
//         setShowContact(false);
//     }

//     function handleProjects(){
//         setShowProjects(true);
//         setShowAbout(false);
//         setShowContact(false);
//     }

//     function handleContact(){
//         setShowContact(true);
//         setShowAbout(false);
//         setShowProjects(false);
//     }

//     return(
//         <div>
//             <div className="main-section">
//                 <h1 className="text-light">Hi, I'm Brandie Lucano.</h1>
//                 <h3 className="text-secondary">Software Engineer and Educator</h3>
//                 {/* <img src={portrait} alt="Brandie Lucano-portrait"></img> */}
//                 <div>
//                     <button onClick={handleAbout} className="btn btn-primary">About Me</button>
//                     <button onClick={handleProjects} className="btn btn-primary">Projects</button>
//                     <button onClick={handleContact} className="btn btn-primary">Contact</button>
//                 </div>
//             </div>
//             <div className="dynamic-content">
//                 {showAbout && <About/>}
//                 {showProjects && <Projects/>}
//                 {showContact && <Contact />}
//             </div>
//         </div>
//     )
// }

// export default Home;

// import { useRef } from "react";
// import About from "./About";
// import Projects from "./Projects";
// import Contact from "./Contact";

// function Home(){
//     const aboutRef = useRef(null);
//     const projectsRef = useRef(null);
//     const contactRef = useRef(null);

//     const [showAbout, setShowAbout] = useState(false);
//     const [showProjects, setShowProjects] = useState(false);
//     const [showContact, setShowContact] = useState(false);

//     const handleAbout = () => {
//         setShowAbout(true);
//         setShowProjects(false);
//         setShowContact(false);
//         aboutRef.current.scrollIntoView({ behavior: "smooth" });
//     };

//     const handleProjects = () => {
//         setShowProjects(true);
//         setShowAbout(false);
//         setShowContact(false);
//         projectsRef.current.scrollIntoView({ behavior: "smooth" });
//     };

//     const handleContact = () => {
//         setShowContact(true);
//         setShowAbout(false);
//         setShowProjects(false);
//         contactRef.current.scrollIntoView({ behavior: "smooth" });
//     };

//     return(
//         <div className="container">
//             <div className="row">
//                 <div className="col">
//                     <h1>Hi, I'm Brandie Lucano.</h1>
//                     <h3>Software Engineer and Educator</h3>
//                     <div>
//                         <button onClick={handleAbout} className="btn btn-primary">About Me</button>
//                         <button onClick={handleProjects} className="btn btn-primary">Projects</button>
//                         <button onClick={handleContact} className="btn btn-primary">Contact</button>
//                     </div>
//                 </div>
//             </div>
//             <div ref={aboutRef}>
//                 {showAbout && <About />}
//             </div>
//             <div ref={projectsRef}>
//                 {showProjects && <Projects />}
//             </div>
//             <div ref={contactRef}>
//                 {showContact && <Contact />}
//             </div>
//         </div>
//     )
// }

// export default Home;
