import React from 'react';
import "../styles.css";
import profile_pic from "../images/Me.jpg"

function About() {
    return (
        
        <div  className="jumbotron jumbotron-fluid">   
        <div className="moreLeft"><img className="profile" src={profile_pic} alt="profile" />
        <div className="headerText">
        <h1 className='hello'>JESSICA DALEY</h1>
            <p className="what-i-do">
            Visual artist meets Web Developer.
                    </p>
                    <p className='bioStyle'>
                    Creating beautiful and engaging digital experiences.
                    Focused on simplicity and purpose.  
                   
				</p>
        </div>
        </div>
        </div>
        
    );
}

export default About;


