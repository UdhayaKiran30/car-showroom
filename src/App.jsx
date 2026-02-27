import { useState } from "react";
import Scene from "./components/Scene";
import UIOverlay from "./components/UIOverlay";

const MODELS = [
  { id: "car", name: "Phantom X", path: "/models/car.glb", basePrice: 2500000 },
  { id: "car1", name: "Roadster S", path: "/models/car1.glb", basePrice: 3200000 },
  { id: "car2", name: "Apex GT", path: "/models/car3.glb", basePrice: 4500000 },
];

const PREMIUM_PAINT_PRICE = 50000;

export default function App() {
  const [selectedModelId, setSelectedModelId] = useState(MODELS[0].id);
  const [selectedColor, setSelectedColor] = useState("#111111");
  const [isDayMode, setIsDayMode] = useState(false);

  const currentModel = MODELS.find(m => m.id === selectedModelId) || MODELS[0];

  const calculatePrice = (colorValue) => {
    // Basic heuristic for premium colors (Black, Blue, Silver as defined in UIOverlay)
    const isPremium = ["#111111", "#0000ff", "#c0c0c0"].includes(colorValue);
    return currentModel.basePrice + (isPremium ? PREMIUM_PAINT_PRICE : 0);
  };

  const [currentPrice, setCurrentPrice] = useState(calculatePrice(selectedColor));

  const handleColorChange = (colorObj) => {
    setSelectedColor(colorObj.value);
    const paintCost = colorObj.isPremium ? PREMIUM_PAINT_PRICE : 0;
    setCurrentPrice(currentModel.basePrice + paintCost);
  };

  const handleModelChange = (model) => {
    setSelectedModelId(model.id);
    const isPremium = ["#111111", "#0000ff", "#c0c0c0"].includes(selectedColor);
    setCurrentPrice(model.basePrice + (isPremium ? PREMIUM_PAINT_PRICE : 0));
  };

  return (
    <>
      <Scene
        isDayMode={isDayMode}
        carColor={selectedColor}
        modelPath={currentModel.path}
      />

      <UIOverlay
        carName={currentModel.name}
        models={MODELS}
        selectedModelId={selectedModelId}
        onModelChange={handleModelChange}
        onColorChange={handleColorChange}
        selectedColor={selectedColor}
        currentPrice={currentPrice}
        isDayMode={isDayMode}
        toggleDayMode={() => setIsDayMode(!isDayMode)}
      />
    </>
  );
}
