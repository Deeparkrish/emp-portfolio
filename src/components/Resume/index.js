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

import './resume.css'



function Resume(){
return(
  
            <div className='container'>
                 <h3>Skills</h3>
                 <hr/>
                <div className='flex-row'>
                      <h4><i>Concepts:</i></h4>
                            <ul className ="flex-column">
                                <li>Data Structures</li>
                                <li>Algorithm</li>
                                <li>Networking</li>
                            </ul>
                                
                </div>
                <div className='flex-column'>
                        <h4><i>Technologies:</i></h4>
                        <div className='flex-row' className ='tech' >           
                            <img src={html} alt ="html-css" className='img' />                   
                            <img src={nexplogo}  alt ="node-express"className='img' />
                            
                            <img src={jqlogo} alt ="jQuery" className='img' />
                           
                            <img src={bslogo}  alt ="bootstrap"className='img' />
                            
                            <img src={wplogo}  alt ="web-pack"className='img' />
                    
                            <img src={sqlogo}  alt ="sql"className='img' />
                        
                            <img src={seqlogo} alt ="sequelize" className='img' />
                                                                
                            <img src={hblogo} alt ="handlebar" className='img' />
                                        
                            <img src={monglogo} alt ="MongoDB"className='img' />
             
                            <img src={mernlogo} alt ="MERN"className='img' />
                           
                            <img src={gqllogo} alt ="graphQL" className='img' />
                             
                        </div>
                </div>    
                <div className="flex-row">
                            <div>
                                <a href= {resumeFile} target="_blank"  rel="noreferrer" title ="Resume"><h4><u><i>Download Resume</i></u></h4></a>

                            </div>
                </div>
            </div>      
    );
};

export default Resume;
