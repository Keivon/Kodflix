import React from 'react';
import './App.css';

export default function Tvcover(props) {

    return (
            <div class="flex-item">
                <div class="overlay"><h1>{props.title}</h1></div>
                <img src={props.img}  alt={props.title}/>
            </div>
    );
}