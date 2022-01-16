import React from 'react';
import github_icon from "../images/github_icon.svg";
import downloadResume from "../images/downloadResume.svg";
import { Heading, Text } from '@chakra-ui/react';
import "../styles.css";
import resumeDoc from "../images/Resume Jessica Daley.docx";

function Resume() {
    return (
        <div className="moreLeft row">
 <a className="resumeLink" href={resumeDoc} target="_blank"  rel="noreferrer"><p>Download My Resume</p><img width="20rem" className="downloadResume" src={ downloadResume } alt="download icon"/> 
            </a>
            <hr/>
            <div className="col-md">
                <Heading className="pt">
                    <h3 fontSize={"2xl"}>Front-End Skills and Technologies</h3>
                </Heading>
                <Text className="languages">
                    <ul>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>AJAX</li>
                        <li>jQuery</li>
                        <li>Multer s3</li>
                        <li>Bootstrap</li>
                        <li>Bulma</li>
                        <li>Chakra UI</li>
                        <li>Adobe Photoshop</li>
                        <li>GIMP</li>
         
                    </ul>
                </Text>
            </div>
            <div className="col-md">
                <Heading className="pt">
                    <h3 fontSize={"2xl"}>Back-End Skills and Technologies</h3>
                </Heading>
                <Text>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Heroku</li>
                        <li>MongoDB Atlas</li>
                        <li>Insomnia</li>
                        <li>Jest</li>
                        
                    </ul>
                </Text>
            </div>
        </div>


    )
}

export default Resume;