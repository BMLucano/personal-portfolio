import portrait from "./images/portrait.jpeg"
import "./About.css"
import resume from "./assets/Brandie_Lucano_resume.pdf"

/**About: displays photo and about me section */

function About() {
    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-md-4 order-md-2 d-flex align-items-center justify-content-center mb-2">
                    <img className="portrait" src={portrait} alt="Brandie Lucano-portrait" />
                </div>
                <div className="col-md-8 order-md-1 text-light">
                    <p>Hello! I'm a full-stack software engineer with a background in education. My journey into software engineering was fueled by a passion for leveraging technology to create meaningful impacts. I've witnessed firsthand the transformative power that software can have, and it's this potential to improve lives that drives my passion for engineering.</p>
                    <p>Beyond coding, I'm an advocate for accessibility in digital spaces, firmly believing that everyone should have equal access to the web. As an aspiring contributor to solutions that help people, I'm excited about the prospect of merging my passions for software engineering and education make a difference in the world of learning and beyond!</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col text-center">
                    <a className="btn btn-warning" href={resume} download>
                        <i className="bi bi-download"></i> Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
}


export default About;