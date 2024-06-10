import { useState } from "react"
import './DrumMachine.css'
import { DrumControl } from "./DrumControl"
import { DrumPadBoard } from "./DrumPadBoard"

export const DrumMachine = ({ id }) => {
    const [power, setPower] = useState(true)
    const [bank, setBank] = useState(true)
    const [volume, setVolume] = useState(0.5)
    const [displayMsg, setDisplayMsg] = useState("")


    return (
        <div className="drum-machine-container" id={id}>
            <div className="logo">
                <div className="inner-logo ">CrozzDev&nbsp;</div><i className="inner-logo fa fa-fire"></i>
            </div>
            <DrumPadBoard power={power} bank={bank} volume={volume} setDisplayMsg={setDisplayMsg} />
            <DrumControl power={power} bank={bank} setBank={setBank} setPower={setPower} setVolume={setVolume} volume={volume} displayMsg={displayMsg} setDisplayMsg={setDisplayMsg} />
        </div>
    )

}