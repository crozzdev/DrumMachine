import './DrumControl.css'
import { ToggleSwitch } from './ToggleSwitch'
import { VolumeInput } from './VolumeInput'

export const DrumControl = ({ setBank, setPower, volume }) => {

    return (
        <div className="drum-controls-container">
            <ToggleSwitch setState={setPower} label="Power" />
            <div id="display" class="display-container">Volume: 50</div>
            <VolumeInput volume={volume} />
            <ToggleSwitch setState={setBank} label="Bank" />
        </div>
    )

}