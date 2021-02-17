import React,{useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import db from './firebase';
function TinderCards() {

    const [people,setPeople]=useState([]);

    // setPeople([...people,"ravi","teja"]);

    useState(()=>{
        db.collection('people').onSnapshot(snapshot=>(
            setPeople(snapshot.docs.map(doc=>doc.data()))
        ))
    },[])

    return (
        <div>

            <div className="tinderCard__container">
            {
                people.map(person=>(
                    <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up','down']}
                    >

                        <div className="card"
                        style ={{backgroundImage: `url(${person.url})`}}
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>              
                                        
                    ))
                }
                </div>
        </div>
    )
}

export default TinderCards
