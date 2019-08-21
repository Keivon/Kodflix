import './Gallery.css';
import React from 'react';
import Tvcover from './Tvcover';
import friends from '../src/images/Friends from College.jpg';
import smallville from '../src/images/Smallville.jpg';
import sherlock from '../src/images/sherlock.jpg';
import southPart from '../src/images/South Park.jpg';
import stranger_things from '../src/images/stranger things.jpg';
import Luke_Cage from '../src/images/Luke Cage.jpg'; 

export default function Gallery(props) {

 return (
     <div>
        <div class="flex-container">
            <Tvcover title="Friends from College" img={friends} link="/details"/>
            <Tvcover title="Smallville" img={smallville} link="/details"/>
            <Tvcover title="Sherlock" img={sherlock} link="/details"/>
        </div>

        <div class="flex-container">
            <Tvcover title="South Part" img={southPart} link="/details"/>
            <Tvcover title="Stranger Things" img={stranger_things} link="/details"/>
            <Tvcover title="Luke Cage" img={Luke_Cage} link="/details"/>
        </div>
    </div>
 ); 
}

