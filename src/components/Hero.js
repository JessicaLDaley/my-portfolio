import React from "react";
import Hero from "./images/hero2.jpg"

function HeroImage() {
    return (
        <img margin="0" padding="0" overflow-x="hidden" className="hero" src={Hero} alt="Jessica Daley Full-Stack Developer" />

    );
}

export default HeroImage;