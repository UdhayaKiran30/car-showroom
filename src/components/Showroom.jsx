import { Canvas } from "@react-three/fiber";
import {
    OrbitControls,
    Environment,
    ContactShadows,
    MeshReflectorMaterial,
    PerspectiveCamera
} from "@react-three/drei";
import { Suspense } from "react";

export default function Showroom({ children, isDayMode }) {
    return (
        <Canvas shadows dpr={[1, 2]} camera={{ position: [4, 2, 5], fov: 50 }}>
            {/* Lighting Setup */}
            <ambientLight intensity={isDayMode ? 0.8 : 0.2} />
            <directionalLight
                position={[5, 10, 5]}
                intensity={isDayMode ? 2 : 1}
                castShadow
                shadow-mapSize={1024}
            />

            <group position={[0, -0.5, 0]}>
                {/* Car Model Container */}
                <Suspense fallback={null}>
                    {children}
                </Suspense>

                {/* Reflective Floor */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
                    <planeGeometry args={[20, 20]} />
                    <MeshReflectorMaterial
                        blur={[300, 100]}
                        resolution={1024}
                        mixBlur={1}
                        mixStrength={40}
                        roughness={1}
                        depthScale={1.2}
                        minDepthThreshold={0.4}
                        maxDepthThreshold={1.4}
                        color={isDayMode ? "#1a1a1a" : "#050505"}
                        metalness={0.5}
                    />
                </mesh>

                {/* Realistic Shadows */}
                <ContactShadows
                    resolution={1024}
                    scale={10}
                    blur={1.5}
                    opacity={0.6}
                    far={1}
                    color="#000000"
                />
            </group>

            {/* Controls & Environment */}
            <OrbitControls
                autoRotate
                autoRotateSpeed={0.5}
                enablePan={false}
                enableZoom={true}
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2.2}
            />

            <Environment preset={isDayMode ? "sunset" : "city"} background={false} />

            {/* Background Color */}
            <color attach="background" args={[isDayMode ? "#e0e0e0" : "#101010"]} />
        </Canvas>
    );
}
