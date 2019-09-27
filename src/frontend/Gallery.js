import './Gallery.css';
import React, { useState, useEffect } from 'react';
import Tvcover from './Tvcover.js';

export default function Gallery(props) {

    const [shows, setShows] = useState([]);

    useEffect(() => {

        fetch('/rest/shows')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
             setShows(myJson);
            });
            
    }, []);

 return (
     
        <div className="flex-container">
        {
            shows.map(tvShow => (
                    <Tvcover key={tvShow.id}
                        id={tvShow.id}
                        title={tvShow.title}
                         />
            ))
        }
        </div>
 ); 
}

