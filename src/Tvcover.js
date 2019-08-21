import React from 'react';
import {Link} from "react-router-dom";
import './App.css';

export default function Tvcover(props) {

    return (
        <Link to = {props.link}>
            <div class="flex-item">
                <div class="overlay"><h1>{props.title}</h1></div>
                <img src={props.img}  alt={props.title}/>
            </div>
        </Link>
    );
}