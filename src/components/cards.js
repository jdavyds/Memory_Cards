import React, {useState} from 'react'
import './../App.css';
function Cards(props) {
    const [ clickCard, setClickCard ] = useState([])
    return(
        <>
        {props.cards.map(card => {
                return(
                    <>
                    <button
                     className='btn'
                     onClick={props.handleClick}
                     value={card.split("/").pop().split(".")[0]}
                     >
                    <img src={card} alt=""  title={card.split("/").pop().split(".")[0]}/>
                    </button>
                    </>)})}
        </>
    )}
export default Cards;