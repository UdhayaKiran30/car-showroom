import { MeshReflectorMaterial, ContactShadows } from "@react-three/drei";

export default function Environment({ isDayMode }) {
    return (
        <group position={[0, -0.5, 0]}>
            {/* Reflective Floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
                <planeGeometry args={[50, 50]} />
                <MeshReflectorMaterial
                    blur={[300, 100]}
                    resolution={1024}
                    mixBlur={1}
                    mixStrength={40}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color={isDayMode ? "#333333" : "#050505"}
                    metalness={0.8}
                />
            </mesh>

            {/* Realistic Grounding Shadows */}
            <ContactShadows
                resolution={1024}
                scale={10}
                blur={1.5}
                opacity={0.6}
                far={1}
                color="#000000"
            />
        </group>
    );
}
