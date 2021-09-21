import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from '../ProjectCard';
import projectArr from './projectArr.js';
import './project.css';

function ProjectInfo(props) {
  return <div className="projectdata">{props.children}</div>;
}
function Project () { 


    return (
        <section>
          <div className="project" id ="project">
            <h2 className="title"><i>Projects</i></h2>
            <hr></hr>
          </div>

          <ProjectInfo id="card-data">
            {projectArr.map((project) => (
              <ProjectCard  key={project.id}  name={project.name} image ={project.image} github={project.github} deploy={project.deploy} topics={project.topics}/>
            ))}
          </ProjectInfo>
        </section>
    
    );
  }



export default Project;