export default function LightingToggle({ isDayMode, onToggle }) {
    return (
        <div className="lighting-toggle">
            <button
                className={`toggle-btn ${isDayMode ? 'day' : 'night'}`}
                onClick={onToggle}
            >
                {isDayMode ? "☀️ Day" : "🌙 Night"}
            </button>
        </div>
    );
}
