import React from 'react';

import TypingComponent from "../TextPresentation/TypingComponent";
import "../TextPresentation/typing-component.css";

import useMediaQuery from '@mui/material/useMediaQuery';


function Hero() {

    const matches = useMediaQuery('(min-width:600px)');

    const TypingComponentStyles = {
        top: "45%",
        position: "absolute",
        textAlign: "center",
        width: matches ? "35%" : "70%",
        left:  matches ? "32%" : "15%",
        fontFamily: 'stalinist_oneregular',
        fontSize: matches ? "22px" : "10px",
        color: "#F4A442"
    }

    const textArrayOne = [
        "Hello, my name is Mykhaylo. I'm a Front-End Developer."
    ];

    const textArrayTwo = [
        "Welcome to my website. There, you can see my skills and projects."
    ]

    return (
        <div>
            <TypingComponent
                classString="assign-as-many classes-as-you-want here"
                text1={textArrayOne}
                //add text2 if you want self deleting effect after typing the first phrase
                text2={textArrayTwo}
                typingContentElementId="give-your-component-an-element-id-to-reference"
                styles={TypingComponentStyles}
            />
        </div>
    )
}

export default Hero
