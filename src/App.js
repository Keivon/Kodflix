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
            
            <img src={friends}  alt='Friends from College' />
             </div>
             
            <div class="flex-item">
            
            <img src={smallville}  alt='smallville' />
            </div>

            <div class="flex-item">
           
            <img src={sherlock}  alt='' />
            </div>
          </div>
          <div class="flex-container">

                <div class="flex-item">
                
                <img src={southPart}  alt='' />
                </div>

                <div class="flex-item">
                
                <img src={stranger_things}  alt='stranger_things' />
                </div>

                <div class="flex-item">
                
                <img src={Luke_Cage} resizeMode="stretch" alt='Luke Cage' />
                </div>

        </div>
     </div>
   
  );
}

export default App;
