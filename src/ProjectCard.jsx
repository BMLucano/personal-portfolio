/**Individual project card.  */

function ProjectCard({title, description, tech, demo, github, img}){
    let cardStyle = {width: "25rem"};
    return(
        <div className="card mb-3 text-white bg-secondary" style={cardStyle}>
            <div className="card-header">
                <h3>{title}</h3>
            </div>
            <img className="card-img-top aspect-ratio-item" src={img} alt="project image" />
            <div className="card-body">
                {/* <h5 className="card-title">{title}</h5> */}
                <p className="card-text">{description}</p>
                <small className="card-text text-warning"><i>{tech}</i></small>
                <div className="card-footer">
                    <a href={github} className="btn btn-light">View on Github</a>
                    <a href={demo} className="btn btn-dark">Live Demo</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;