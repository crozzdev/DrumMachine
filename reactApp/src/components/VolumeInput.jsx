import './VolumeInput.css'

export const VolumeInput = ({ volume, setVolume }) => {
    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    };

    return (
        <div className="volume-slider-container">
            <input
                id="volume-slider"
                type="range"
                max="1"
                min="0"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
            />
        </div>
    )
}