import React, { useState }  from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from './axios';


function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('')
        }
    }, [name])
    // [
    //     {
    //         name: "Bruno Gomes",
    //         url: "https://pbs.twimg.com/media/EeTDgb4WoAAcrmS.jpg",
            
    //     },
    //     {
    //         name: "Lewandowski",
    //         url: "https://i0.wp.com/www.dci.com.br/wp-content/uploads/2020/12/lewandowski.jpg?fit=1250%2C700&ssl=1",
            
    //     },
    //     {
    //         name: "Gabriel Zauza",
    //         url: "https://s2.glbimg.com/u-40flekw7Ipx4CH-UL8zAr_8Rs=/560x750/e.glbimg.com/og/ed/f/original/2017/09/11/rodrigo_hilbert.jpg"
    //     },
    //     {
    //         name: "Aee kasinão",
    //         url: "https://www.kboing.com.br/fotos/imagens/49d0c22030fdc.jpg",
    //     }


    // ]

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) =>{
        console.log(name + " left the screen!");
    };
    return (    
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
            {people.map((person) => (
               <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
               >
                   <div
                   style={{ backgroundImage: `url(${person.url})`
                }}
                className="card"
                   >
                       <h3>{person.name}</h3>
                   </div>

               </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards;
