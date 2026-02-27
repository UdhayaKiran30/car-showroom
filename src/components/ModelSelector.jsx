export default function ModelSelector({ models, selectedModelId, onSelect }) {
    return (
        <div className="model-selector">
            <label className="selector-label">Model</label>
            <div className="model-options">
                {models.map((model) => (
                    <button
                        key={model.id}
                        className={`model-btn ${selectedModelId === model.id ? "active" : ""}`}
                        onClick={() => onSelect(model)}
                        title={model.name}
                    >
                        {model.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
