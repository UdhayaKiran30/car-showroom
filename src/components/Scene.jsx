import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import Loader from "./Loader";
import Lights from "./Lights";
import EnvironmentSetup from "./Environment"; // Renamed to avoid reserved word conflict if any
import CarModel from "./CarModel";

import { Center } from "@react-three/drei";

export default function Scene({ isDayMode, carColor, modelPath }) {
    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [-5, 2, 6], fov: 35 }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        >
            <color attach="background" args={[isDayMode ? "#f0f0f0" : "#050505"]} />
            <fog attach="fog" args={[isDayMode ? "#f0f0f0" : "#050505", 5, 15]} />

            <Lights isDayMode={isDayMode} />

            <Suspense fallback={<Loader />}>
                <CarModel key={modelPath} modelPath={modelPath} color={carColor} />
                <EnvironmentSetup isDayMode={isDayMode} />
            </Suspense>

            <OrbitControls
                autoRotate
                autoRotateSpeed={0.5}
                enablePan={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2.1}
                minDistance={4}
                maxDistance={10}
                makeDefault
            />
        </Canvas>
    );
}
