import React from 'react';
import PROJECTS from '../data/projects';

//stateless functional style doesn't use render() function
//used for cleaner syntax
const Project = props => {
    const { title, image, description, link} = props.project; //basically this.title, this.image declarations in 1 line

    return (
        <div style = {{ display: 'inline-block', width: 450, margin: 2 }}>
            <h3>{title}</h3>
            <img src = {image} alt = 'profile' className = 'projectImages'/>
            <p>{description}</p>
            <a href = {link}>{link}</a>
        </div>
    )

}

const Projects = () => (
    <div>
        <h2>Highlighted Projects</h2>
        <div>
            {
            PROJECTS.map(PROJECT => (
                    //key gives each child a unique id value so it can be selected from the PROJECTS array
                    <Project key = {PROJECT.id} project = {PROJECT} />
                ))
            }
        </div>
    </div>
)

export default Projects;