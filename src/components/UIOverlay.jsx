import ColorSelector from "./ColorSelector";
import LightingToggle from "./LightingToggle";
import ModelSelector from "./ModelSelector";

export default function UIOverlay({
    carName,
    onColorChange,
    selectedColor,
    currentPrice,
    isDayMode,
    toggleDayMode,
    models,
    selectedModelId,
    onModelChange
}) {
    const colors = [
        { name: "Red", value: "#ff0000", isPremium: false },
        { name: "Black", value: "#111111", isPremium: true },
        { name: "White", value: "#ffffff", isPremium: false },
        { name: "Blue", value: "#0000ff", isPremium: true },
        { name: "Silver", value: "#c0c0c0", isPremium: true },
    ];

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <div className="ui-overlay">
            <div className="header">
                <h1>{carName}</h1>
                <div className="price-tag">
                    <span className="label">Estimated Price</span>
                    <span className="value">{formatPrice(currentPrice)}</span>
                </div>
            </div>

            <div className="controls-panel">
                <ModelSelector
                    models={models}
                    selectedModelId={selectedModelId}
                    onSelect={onModelChange}
                />
                <div className="divider"></div>
                <ColorSelector
                    colors={colors}
                    selectedColor={selectedColor}
                    onSelect={onColorChange}
                />
                <div className="divider"></div>
                <LightingToggle
                    isDayMode={isDayMode}
                    onToggle={toggleDayMode}
                />
            </div>
        </div>
    );
}
