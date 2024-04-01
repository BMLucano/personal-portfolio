import portrait from "./images/portrait.jpeg"
import "./About.css"

/**About: displays photo and about me section */
function About(){

    return(
        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col-sm-12 col-md-4 order-md-2 d-flex align-items-center justify-content-center mb-2">
                    <img class="portrait" src={portrait} alt="Brandie Lucano-portrait"></img>

                </div>
                <div class="col-sm-12 col-md-8 order-md-1 text-light d-flex flex-column justify-content-center">
                    <p>Hello there! I'm a full-stack software engineer with a background in education. My journey into software engineering was fueled by a genuine passion for leveraging technology to enhance educational experiences. I've witnessed firsthand the transformative power that software can have in the classroom, and it's this intersection of education and technology that drives my passion for engineering.</p>
                    <p>Beyond coding, I'm an advocate for accessibility in digital spaces, firmly believing that everyone should have equal access to the web. As an aspiring contributor to the growing field of educational technology, I'm excited about the prospect of merging my passions for software engineering and education to create meaningful impacts in the space of learning and beyond!</p>
                    <a className="btn btn-warning" href="/assets/resume.pdf" download role="button">Download Resume</a>
                </div>

            </div>
        </div>
    )
}

export default About;