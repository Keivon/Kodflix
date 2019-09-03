import './Gallery.css';
import React from 'react';
import GetGallery from './gallery-get';
import Tvcover from './Tvcover';

export default function Gallery(props) {

 return (
     
        <div className="flex-container">
        {
            GetGallery().map(tvShow => (
                    <Tvcover key={tvShow.id}
                        id={tvShow.id}
                        title={tvShow.title}
                        img={tvShow.img} />
            ))
        }
        </div>
 ); 
}

