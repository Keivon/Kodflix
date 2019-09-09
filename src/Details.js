import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import GetGallery from './gallery-get';
import './Details.css';



export default function Details(props) {
    const [cover, setCover] = useState(1);
    const tvShowId = props.match.params.tvShows;

    useEffect(() => {
        let tvShow = GetGallery().find(show => show.id === tvShowId);
        setCover(tvShow);
    }, [tvShowId]);


    if (cover === undefined) {
        return <Redirect to="/Not-found" />;
    } else {
        return (
            <div>
                <h1>{cover.title}</h1>
                <div className="container">
                    <div className="item-text">{cover.synopsis}</div>
                    <div className="item"> <img src={cover.img} alt={cover.title} /> </div>
                </div>
                <Link to="/">Back to the Home page</Link>
            </div>
        );
    }
} 