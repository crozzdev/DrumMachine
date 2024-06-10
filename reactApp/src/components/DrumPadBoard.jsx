import { useRef } from 'react'
import { DrumPad } from "./DrumPad"
import { Sounds } from "../constants"
import { useKeydownSound } from '../hooks/useKeydownSound'
import './DrumPadBoard.css'

export const DrumPadBoard = ({ bank, power, volume, setDisplayMsg }) => {
    const audioRefs = Sounds.map(() => useRef(null));

    useKeydownSound(audioRefs, volume, setDisplayMsg)

    const handleClick = (audioRef, id) => {
        const audio = audioRef.current;
        audio.volume = volume
        audio.currentTime = 0;
        audio.play();
        setDisplayMsg(id)

    }

    return (
        <div className="drum-pads-container">
            {Sounds.map((elem, index) =>
            (<DrumPad
                key={elem.id}
                letter={elem.id}
                id={bank ? elem.soundBank.title : elem.sound.title}
                src={power ? (bank ? elem.soundBank.src : elem.sound.src) : "#"}
                ref={audioRefs[index]}
                handleClick={handleClick}

            />))}
        </div>
    )
}