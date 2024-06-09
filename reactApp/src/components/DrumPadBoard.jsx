import { DrumPad } from "./DrumPad"
import { Sounds } from "../constants"
import './DrumPadBoard.css'

export const DrumPadBoard = ({ Bank, Power, volume }) => {

    return (
        <div className="drum-pads-container">
            {Sounds.map(elem =>
            (<DrumPad
                key={elem.id}
                letter={elem.id}
                id={Bank ? elem.soundBank.title : elem.sound.title}
                src={Power ? (Bank ? elem.soundBank.src : elem.sound.src) : "#"}
            />))}
        </div>
    )
}