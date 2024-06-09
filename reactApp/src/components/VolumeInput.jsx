import './VolumeInput.css'

export const VolumeInput = ({ volume }) => {
    return (
        <div class="volume-slider-container">
            <input id="volume-slider" type="range" max="1" min="0" step="0.01" value="0.5" />
        </div>
    )
}