import './ToggleSwitch.css'

export const ToggleSwitch = ({ state, setState, label }) => {
    const labelText = label === "Power" ? "power-switch" : "bank-switch"

    const handleChange = () => {
        setState(!state)
    }

    return (
        <label htmlFor={labelText} className="switch">
            <span className="label-text">{label}</span>
            <input id={labelText} type="checkbox" onChange={handleChange} checked={state} />
            <span className="slider "></span>
        </label>
    )
}