export default function UI({ carName, onColorChange, currentPrice, isDayMode, toggleDayMode }) {
    const colors = [
        { name: "Red", value: "#ff0000", price: 0 },
        { name: "Black", value: "#111111", price: 1000 },
        { name: "White", value: "#ffffff", price: 1200 },
        { name: "Blue", value: "#0000ff", price: 800 },
        { name: "Silver", value: "#c0c0c0", price: 1500 },
    ];

    return (
        <div className="ui-overlay">
            <div className="header">
                <h1>{carName}</h1>
                <p className="price">${currentPrice.toLocaleString()}</p>
            </div>

            <div className="controls">
                <div className="color-picker">
                    {colors.map((color) => (
                        <button
                            key={color.name}
                            className="color-btn"
                            style={{ backgroundColor: color.value }}
                            onClick={() => onColorChange(color)}
                            aria-label={`Select ${color.name}`}
                        />
                    ))}
                </div>

                <button className="toggle-btn" onClick={toggleDayMode}>
                    {isDayMode ? "🌙 Night Mode" : "☀️ Day Mode"}
                </button>
            </div>
        </div>
    );
}
