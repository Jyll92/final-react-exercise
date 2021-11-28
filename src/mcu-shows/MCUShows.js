import "./MCUShows.css";

import React from 'react'

const MCUShows = ({ dates, randomChar, charList, currentChar, nextChar }) => {

    const rollRandomChar = () => {
        let newChar = Math.floor(Math.random() * charList);
        randomChar(newChar)
    }
    
    const nextCharacter = () => {
        if (currentChar === charList - 1) {
            nextChar(0);
        } else {
            nextChar(currentChar + 1);
        }
    }

    return (
        <div className="MCUShows">
            <h1 style={{fontFamily: "georgia", textDecoration: "underline"}}>Disney+</h1>
            <h2>MCU Show Release Dates</h2>
            <p>WandaVision: {dates.wandaVision}</p>
            <p>The Falcon and the Winter Soldier: {dates.falconWinter}</p>
            <p>Loki: {dates.loki}</p>
            <p>What If...?: {dates.whatIf}</p>
            <p>Hawkeye: {dates.hawkeye}</p>
            <button onClick={rollRandomChar}>RANDOM MCU CHARACTER</button>
            <button onClick={nextCharacter}>NEXT MCU CHARACTER</button>
        </div>
    )
}

export default MCUShows;