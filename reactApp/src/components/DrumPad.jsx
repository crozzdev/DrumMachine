import './DrumPad.css'

export const DrumPad = ({ id, src, letter, volume }) => {
    return (
        <div className="drum-pad" id={id}>
            <audio src={src} className="clip" id={letter}></audio>
            {letter}
        </div >
    )
}