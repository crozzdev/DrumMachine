import './ToggleSwitch.css'

export const ToggleSwitch = ({ setState, label }) => {
    const labelText = label === "Power" ? "power-switch" : "bank-switch"
    return (
        <label for={labelText} className="switch">
            <span className="label-text">{label}</span>
            <input id={labelText} type="checkbox" checked />
            <span className="slider "></span>
        </label>
    )
}