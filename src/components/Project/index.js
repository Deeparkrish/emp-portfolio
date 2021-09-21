import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from '../ProjectCard';
import projectList from './projectList'
import './project.css'
function Project () { 
  

function ProjectInfo(props) {
    return <div className="projectdata">{props.children}</div>;
}

 

    return (
        <section>
          <div className="project">
            <h1 className="title">Project Portfolio</h1>
            <hr></hr>
          </div>

          <ProjectInfo id="card-data">
            {projectList.map((project) => (
              <ProjectCard  key={project.id}  name={project.name} image ={project.image} github={project.github} deploy={project.deploy} topics={project.topics}/>
            ))}
          </ProjectInfo>
        </section>
    
    );
  }



export default Project;