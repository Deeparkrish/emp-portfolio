import React from 'react';
import resumeFile from "../../assets/Deepa-Resume.pdf";

import html from '../../assets/images/logo/html.png';
import jqlogo from '../../assets/images/logo/jquery-logo.png';
import bslogo from '../../assets/images/logo/bootstrap-logo.png';
import seqlogo from '../../assets/images/logo/seql.png';
import mernlogo from '../../assets/images/logo/mern-logo.png';
import wplogo from '../../assets/images/logo/webpack-logo.png';
import nexplogo from '../../assets/images/logo/nodeexpress.png';
import hblogo from '../../assets/images/logo/handlebars-logo.png';
import sqlogo from '../../assets/images/logo/sql-logo.png';
import monglogo from '../../assets/images/logo/mongodb-logo.png';
import gqllogo from '../../assets/images/logo/graphql.png';

// import './resume.css'



function Resume(){
return(
  
            <div className='container'>
                 <h3>Skills</h3>
                 <hr/>
                <div className='flex-row'>
                      <h4><i>Concepts</i></h4>
                            <ul className ="flex-column">
                                <li>Data Structures</li>
                                <li>Algorithm</li>
                                <li>Networking</li>
                            </ul>
                                
                </div>
                <div className='flex-column'>
                        <h4><i>Technologies</i></h4>
                        <div className='flex-row' className ='tech' >           
                            <img src={html} alt ="html-css" className='logo'  />                   
                            <img src={nexplogo}  alt ="node-express"className='logo' />
                            
                            <img src={jqlogo} alt ="jQuery" className='logo' />
                           
                            <img src={bslogo}  alt ="bootstrap"className='logo' />
                            
                            <img src={wplogo}  alt ="web-pack"className='logo' />
                    
                            <img src={sqlogo}  alt ="sql"className='logo' />
                        
                            <img src={seqlogo} alt ="sequelize" className='logo' />
                                                                
                            <img src={hblogo} alt ="handlebar" className='logo' />
                                        
                            <img src={monglogo} alt ="MongoDB"className='logo' />
             
                            <img src={mernlogo} alt ="MERN"className='logo' />
                           
                            <img src={gqllogo} alt ="graphQL" className='logo' />
                             
                        </div>
                </div>    
                <div className="flex-row">
                            <div>
                                <a className ="myresume" href= {resumeFile} target="_blank"  rel="noreferrer" title ="Resume"><h4><u><i>Download Resume</i></u></h4></a>

                            </div>
                </div>
            </div>      
    );
};

export default Resume;
