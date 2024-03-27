import portrait from "./portrait.jpeg"

/**About: displays photo and about me section */
function About(){

    return(
        <div>
            <div>
                <h1>Hi, I'm Brandie Lucano.</h1>
                <h3>Software Engineer and Educator</h3>
                {/* <img src={portrait} alt="Brandie Lucano-portrait"></img> */}
            </div>
            <div>
                <p>Hello there! I'm a full-stack software engineer with a background in education. My journey into software engineering was fueled by a genuine passion for leveraging technology to enhance educational experiences. I've witnessed firsthand the transformative power that software can have in the classroom, and it's this intersection of education and technology that drives my passion for engineering. </p>
                <p>Beyond coding, I'm an advocate for accessibility in digital spaces, firmly believing that everyone should have equal access to the web. As an aspiring contributor to the growing field of educational technology, I'm excited about the prospect of merging my passions for software engineering and education to create meaningful impacts in the space of learning and beyond!</p>
            </div>

        </div>
    )
}

export default About;