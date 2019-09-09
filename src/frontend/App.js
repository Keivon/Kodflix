import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gallery from './Gallery.js';
import Details from './Details.js'
import NotFound from './Not-found.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route path="/Not-found" component={NotFound} />
          <Route exact path="/:tvShows" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}
fetch('/rest/shows')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(JSON.stringify(myJson));
            });

export default App;
