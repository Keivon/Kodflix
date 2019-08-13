import React from 'react';
import friends from '../src/images/Friends from College.jpg';
import smallville from '../src/images/Smallville.jpg';
import sherlock from '../src/images/sherlock.jpg';
import southPart from '../src/images/South Park.jpg';
import stranger_things from '../src/images/stranger things.jpg';
import Luke_Cage from '../src/images/Luke Cage.jpg'; 
import './App.css';

function App() {
  return (
    
    <div className="App">
   
    <div class="flex-container">

            <div class="flex-item">
            <div class="overlay"><h1>Friends from College</h1></div>
            <img src={friends}  alt='Friends from College' />
            </div>
             
            <div class="flex-item">
            <div class="overlay"><h1>Smallville</h1></div>
            <img src={smallville}  alt='smallville' />
            </div>

            <div class="flex-item">
            <div class="overlay"><h1>Sherlock</h1></div>
            <img src={sherlock}  alt='Sherlock' />
            </div>

          </div>
          <div class="flex-container">

                <div class="flex-item">
                 <div class="overlay"><h1>South Part</h1></div>
                <img src={southPart}  alt='South Part' />
                </div>

                <div class="flex-item">
                <div class="overlay"><h1>Stranger Things</h1></div>
                <img src={stranger_things}  alt='stranger_things' />
                </div>

                <div class="flex-item">
                <div class="overlay"><h1>Luke Cage</h1></div>
                <img src={Luke_Cage}  alt='Luke Cage' />
                </div>

        </div>
     </div>
   
  );
}

export default App;
