import React from 'react';
import './css/viewer.css'

const Viewer = (props) => {
	return(
        <div>
            <h1>{props.slideData.title}</h1>
            <p>{props.slideData.body}</p>
            {props.slideData.imageURL ? <img className="slide-image" src={props.slideData.imageURL} alt=""/>: null}
        </div>
    );
};

export default Viewer;
