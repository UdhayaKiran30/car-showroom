export default function ColorSelector({ colors, selectedColor, onSelect }) {
    return (
        <div className="color-selector">
            {colors.map((color) => (
                <button
                    key={color.name}
                    className={`color-btn ${selectedColor === color.value ? "active" : ""}`}
                    style={{ backgroundColor: color.value }}
                    onClick={() => onSelect(color)}
                    aria-label={`Select ${color.name}`}
                    title={color.name}
                />
            ))}
        </div>
    );
}
