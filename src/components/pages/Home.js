import React from 'react';
import "../styles.css";
import profile_pic from "../images/Me.jpg"

function Home() {
    return (
        
        <div className="jumbotron jumbotron-fluid">   
        <div className="moreLeft"><img className="profile" src={profile_pic} alt="profile" />
        <div className="headerText">
        <h1 className='hello'>Hello</h1>
            <p>
					My name is Jessica Daley. 
                    <br/>
                    I'm a visual artist with experience in a wide range of mediums, including drawing, oil painting,
					sculpture, photography and most recently, web development.
					
                    I graduated from Uconn's School of Engineering Coding Bootcamp and I'm excited to build my
					career as a developer.
				</p>
        </div>
        </div>
        </div>
        
    );
}

export default Home;


