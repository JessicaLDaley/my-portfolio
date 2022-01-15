//header will go here
import "./styles.css";
import React from "react";
import profile_pic from "./images/Me.jpg"

function HeaderInfo() {
    return (
        <div className="jumbotron jumbotron-fluid">   
        <div className="moreLeft"><img className="profile" src={profile_pic} alt="profile" />
        <div className="headerText">
        <h1>Hello</h1>
        <p>
                    I'm a visual artist with experience in a wide range of mediums, including drawing, oil painting,
					sculpture, photography and most recently, web development.
					<br />
                    Currently I'm enrolled in Uconn's School of Engineering Coding Bootcamp and I'm excited to build my
					career as a full-stack developer.
				</p>
             </div>
             </div>
             </div>
    );
}

export default HeaderInfo;