import React from 'react';
import "./css/navigation.css"

const Navigation = (props) => {
	return(
        <div>
            <button className="storybook-nav-button" onClick={props.previousSlide}>Previous</button>
            <button className="storybook-nav-button" onClick={props.nextSlide}>Next</button>
        </div>
    );
};

export default Navigation;
