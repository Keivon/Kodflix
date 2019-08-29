import './Gallery.css';
import React from 'react';
import getGallery from './gallery-get';
import Tvcover from './Tvcover';

export default function Gallery(props) {

 return (
     <div>
        <div className="flex-container">
        {
            getGallery().map(tvShow => (
                    <Tvcover key={tvShow.id}
                        id={tvShow.id}
                        title={tvShow.title}
                        img={tvShow.img} />
            ))
        }
        </div>
        
    </div>
 ); 
}

