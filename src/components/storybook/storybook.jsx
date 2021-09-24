import React, {useState} from 'react';
import Viewer from "./viewer";
import Navigation from "./navigation"

const Storybook = (props) => {
	const [slides] = useState(props.slides ? props.slides : []);
    const [currentSlide, setCurrentSlide] = useState(props.currentSlide ? props.currentSlide : 0);
    
    const nextSlide = () => {
        if ((slides.length - currentSlide) > 1){
            setCurrentSlide(currentSlide + 1);
        }
    }

    const previousSlide = () => {
        if (currentSlide > 0){
            setCurrentSlide(currentSlide - 1);
        }
    }

	return(
        <>
            <Viewer slideData={slides[currentSlide]}></Viewer>
            <Navigation nextSlide={nextSlide} previousSlide={previousSlide}/>
        </>
    );
};

export default Storybook;
