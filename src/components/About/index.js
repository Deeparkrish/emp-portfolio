import React from 'react';
import avatarImage from "../../assets/images/DC.jpg";
import '../../index.css'

function About(){


    return(
        <section className ="my-5" id ="about">
            <h2 ><i>About Me</i></h2>
            <hr/>
            <div>
            <img src={avatarImage} className="my-2" style={{ width: "100px", height:"150px" }} alt="avatar"></img>
            </div>
            <p className ="aboutme">Exceptionally creative and dependable entry level Web-Developer, knowledgeable in a wide variety of computer languages as well as the principles and techniques of website construction and maintenance. Highly adept at conveying complex technical information to a variety of professional and lay audiences in a clear and understandable manner.I seek challenging opportunities where I can fully use my skills for the success of the organization.</p>
        </section>
    );
}
export default About;