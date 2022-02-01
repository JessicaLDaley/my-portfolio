import React from "react";
import Hero from "./images/hero2.jpg"

function HeroImage() {
    return (
    <div>
        <img margin="0" padding="0" overflow-x="hidden" className="hero" src={Hero} alt="Jessica Daley Front End Developer"></img> 
        <div class="down-arrow"></div> 
        </div>
    );
   
}

export default HeroImage;