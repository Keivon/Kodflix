
import friends from '../src/images/Friends from College.jpg';
import smallville from '../src/images/Smallville.jpg';
import sherlock from '../src/images/sherlock.jpg';
import southPart from '../src/images/South Park.jpg';
import stranger_things from '../src/images/stranger things.jpg';
import Luke_Cage from '../src/images/Luke Cage.jpg';


export default function getGallery() {

    return[
            { title: "Friends from College", img: friends, id: "Friends_from_College"},
            { title: "Smallville", img: smallville, id: "Smallville"},
            { title: "Sherlock", img: sherlock, id: "Sherlock"},
            { title: "South Part", img: southPart, id: "South_Part"},
            { title: "Stranger Things", img: stranger_things, id: "Stranger_Things"},
            { title: "Luke Cage", img: Luke_Cage, id: "Luke_Cage" }
    ];

}