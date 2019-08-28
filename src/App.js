import React from 'react';
import { HashRouter, Route} from "react-router-dom";
import Gallery from './Gallery.js';
import Infor from './Info.js';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <HashRouter>
          <Route exact path='/' component={Gallery}/>
          <Route exact path='/:details' component={Infor}/>
      </HashRouter>
    </div>
  );
}

export default App;
