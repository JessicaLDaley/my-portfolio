import React from "react";
import github_icon from "../images/github_icon.svg";
import linkedIn_icon from "../images/linkedin_icon.png";
import email_icon from "../images/email_icon.jpeg";

function Contact(props) {
  return (
    <div className="moreLeft">
     
    
    <a href="https://github.com/JessicaLDaley"><img className="contactImg" src={ github_icon } alt="github icon" /></a><a className="contactLink" href="https://github.com/JessicaLDaley" target="_blank" rel="noreferrer"> Github</a><br/>
    <a href="https://www.linkedin.com/in/jessica-daley-full-stack-developer/"><img className="contactImg" src={ linkedIn_icon } alt="linkedIn icon" /></a><a className="contactLink" href="https://www.linkedin.com/in/jessica-daley-full-stack-developer" target="_blank" rel="noreferrer"> LinkedIn</a><br/>
    <a href="mailto:jessicadaley127@gmail.com"><img className="contactImg" src={ email_icon } alt="email icon" /></a><a className="contactLink" href="mailto:jessicadaley127@gmail.com">Email me</a>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    </div>
  );
}

export default Contact;