export default function WheelSelector({ wheels, selectedWheelId, onSelect }) {
    return (
        <div className="wheel-selector">
            <label className="selector-label">Wheels</label>
            <div className="wheel-options">
                {wheels.map((wheel) => (
                    <button
                        key={wheel.id}
                        className={`wheel-btn ${selectedWheelId === wheel.id ? "active" : ""}`}
                        onClick={() => onSelect(wheel)}
                        title={wheel.name}
                    >
                        {wheel.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
