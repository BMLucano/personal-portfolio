/**Individual project card.  */

function ProjectCard({title, description, demo, github, img}){
    return(
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src={img} alt="Card image cap"></img>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
                <a href={github} class="btn btn-light">View on Github</a>
                <a href={demo} class="btn btn-dark">Live Demo</a>
            </div>
        </div>
    )
}

export default ProjectCard;