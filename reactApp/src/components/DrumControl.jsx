import { useEffect } from 'react'
import './DrumControl.css'
import { ToggleSwitch } from './ToggleSwitch'
import { VolumeInput } from './VolumeInput'

export const DrumControl = ({ power, bank, setBank, setPower, volume, setVolume, displayMsg, setDisplayMsg }) => {
    // useeffect for when the volumen changes is displayed for some seconds
    useEffect(() => {
        setDisplayMsg(`Volume: ${Math.floor(parseFloat(volume * 100))}`)
        setTimeout(() => {
            setDisplayMsg("")
        }, 1500)
    }, [volume])

    return (
        <div className="drum-controls-container">
            <ToggleSwitch state={power} setState={setPower} label="Power" />
            <div id="display" className="display-container">{displayMsg}</div>
            <VolumeInput volume={volume} setVolume={setVolume} />
            <ToggleSwitch state={bank} setState={setBank} label="Bank" />
        </div>
    )

}