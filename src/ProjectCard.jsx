/**Individual project card.  */

function ProjectCard({title, description, demo, github, img}){
    let cardStyle = {width: "25rem"};
    return(
        <div className="card" style={cardStyle}>
            <img className="card-img-top" src={img} alt="project image"></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="card-footer">
                    <a href={github} className="btn btn-light">View on Github</a>
                    <a href={demo} className="btn btn-dark">Live Demo</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;