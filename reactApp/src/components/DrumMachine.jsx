import { useState } from "react"
import './DrumMachine.css'
import { DrumControl } from "./DrumControl"
import { DrumPadBoard } from "./DrumPadBoard"

export const DrumMachine = () => {


    return (
        <div className="drum-machine-container">
            <div className="logo">
                <div className="inner-logo ">CrozzDev&nbsp;</div><i className="inner-logo fa fa-fire"></i>
            </div>
            <DrumPadBoard />
            <DrumControl />
        </div>
    )


}