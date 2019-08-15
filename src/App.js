import React from 'react';
import Tvcover from './Tvcover';
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

            <Tvcover title="Friends from College" img={friends}/>
            <Tvcover title="Smallville" img={smallville}/>
            <Tvcover title="Sherlock" img={sherlock}/>
          
          </div>
         <div class="flex-container">

          <Tvcover title="South Part" img={southPart}/>
          <Tvcover title="Stranger Things" img={stranger_things}/>
          <Tvcover title="Luke Cage" img={Luke_Cage}/>

         </div>
     </div>
   
  );
}

export default App;
