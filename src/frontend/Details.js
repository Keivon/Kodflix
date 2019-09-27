import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Details.css';



export default function Details(props) {
    
    const [shows, setShows] = useState([]);

    const tvShowId = props.match.params.tvShows;

    useEffect(() => {

        fetch('/rest/shows')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                let tvShow = myJson.find(show => show.id === tvShowId);
                setShows(tvShow);
            });
            
    }, [tvShowId]);


    if (shows === undefined) {
        return <Redirect to="/Not-found" />;
    } else {
        return (
            <div>
                <h1>{shows.title}</h1>
                <div className="container">
                    <div className="item-text">{shows.synopsis}</div>
                    <div className="item"> 
                    <img src={require(`./common/images/${tvShowId}.jpg`)}  alt={shows.title}/>
                    </div>
                </div>
            </div>
            
        );
    }
} 