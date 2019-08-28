import React from 'react';
import {Link} from "react-router-dom";
import './App.css';
import './Tvcover.css';

export default function Tvcover(props) {

    return (
        <Link to ={`/${props.id}`}>
            <div className="flex-item">
                <div className="overlay"><h1>{props.title}</h1></div>
                <img src={props.img}  alt={props.title}/>
            </div>
        </Link>
    );
}