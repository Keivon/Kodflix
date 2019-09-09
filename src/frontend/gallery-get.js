
import friends from './images/Friends from College.jpg';
import smallville from './images/Smallville.jpg';
import sherlock from './images/sherlock.jpg';
import southPart from './images/South Park.jpg';
import stranger_things from './images/stranger things.jpg';
import Luke_Cage from './images/Luke Cage.jpg';


export default function GetGallery() {

    return [
        { title: "Friends from College", img: friends, id: "Friends_from_College",
        synopsis: "Marianne lets Ethan and Lisa crash on her couch while they save "+
        "up for more permanent lodging in the city. Nick is…well, I don't know who "+
        "Nick is or what he does. He's flexible, though, and spends a lot of time "+
        "platonically relaxing with Lisa when Ethan is cheating on her with Sam."},

        { title: "Smallville", img: smallville, id: "Smallville",
        synopsis: "A young Clark Kent struggles to find his place in the world as "+
        "he learns to harness his alien powers for good and deals with the typical "+
        "troubles of teenage life in Smallville, Kansas." },

        { title: "Sherlock", img: sherlock, id: "Sherlock",
        synopsis: "Sherlock Holmes (Benedict Cumberbatch) solving various mysteries "+
        "in modern-day London. Holmes is assisted by his flatmate and friend, Dr. John "+
        "Watson (Martin Freeman), who has returned from military service in Afghanistan "+
        "with the Royal Army Medical Corps."},
        
        { title: "South Part", img: southPart, id: "South_Part",
        synopsis: "Follows the misadventures of four irreverent grade-schoolers in the "+
        "quiet, dysfunctional town of South Park, Colorado. The curious, adventure-seeking, "+
        "fourth grade group of 10 year old boys, Stan, Kyle, Cartman, and Kenny, all join "+
        "in in buffoonish adventures that sometimes evolve nothing."},

        { title: "Stranger Things", img: stranger_things, id: "Stranger_Things",
        synopsis: "When a young boy disappears, his mother, a police chief, and his friends "+
        "must confront terrifying supernatural forces in order to get him back. ... Trying to "+
        "help find him, the boy's friends discover a strange little girl, who is on the run "+
        "from (bad men)."},

        { title: "Luke Cage", img: Luke_Cage, id: "Luke_Cage",
        synopsis: "Luke Cage, a man with super strength and unbreakable skin caused by a "+
        "sabotaged experiment. ... After he escaped from his prison, he changed his name to "+
        "Luke Cage and then moved to New York City."}
    ];

}