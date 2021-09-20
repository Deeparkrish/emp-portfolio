import React from 'react';
import resumeFile from "../../assets/Deepa-Resume.pdf";


function Resume(){
return(
    <div id ="resume">
    <a href= {resumeFile}target="_blank" title ="Resume">Download Resume</a>
    </div>
);
}

export default Resume;
