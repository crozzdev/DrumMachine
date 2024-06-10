import React from 'react'
import './DrumPad.css'

export const DrumPad = React.forwardRef(({ id, src, letter, handleClick }, ref) => {

    return (
        <div className="drum-pad" id={id} onClick={() => handleClick(ref, id)}>
            <audio ref={ref} src={src} className="clip" id={letter}></audio>
            {letter}
        </div >
    )
})