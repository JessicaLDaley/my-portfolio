import React from 'react';
import "../styles.css";
import profile_pic from "../images/Me.jpg"

function Home() {
    return (
        
        <div className="jumbotron jumbotron-fluid">   
        <div className="moreLeft"><img className="profile" src={profile_pic} alt="profile" />
        <div className="headerText">
        <h1 className='hello'>Hello</h1>
            <p className="bio">
					My name is Jessica Daley. 
                    <br/>
                    I'm a full-stack bootcamp grad from Uconn's School of Engineering, as well as 
                    a visual artist with experience in a wide range of mediums. 
					My artistic background brings an insightful eye to the visual and physical flow of front-end applications. 
                    I'm a dedicated problem solver with a love for learning and
                    a passion for creating efficient, intuitive and beautiful user interfaces. 
                    
                   
				</p>
        </div>
        </div>
        </div>
        
    );
}

export default Home;


