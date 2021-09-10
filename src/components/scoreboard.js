import React from 'react'
function ScoreBoard(props) {
    return(
        <>
         <p>Score: {props.score}</p>
         <p>High Score: {props.highScore}</p>
        </>
    )}
export default ScoreBoard;