import { Environment } from "@react-three/drei";

export default function Lights({ isDayMode }) {
    return (
        <>
            <ambientLight intensity={isDayMode ? 0.8 : 0.2} />

            {/* Main Directional Light / Spotlight */}
            <spotLight
                position={[0, 15, 0]}
                angle={0.3}
                penumbra={1}
                intensity={isDayMode ? 1 : 2}
                castShadow
                shadow-bias={-0.0001}
            />

            <directionalLight
                position={[5, 5, 5]}
                intensity={isDayMode ? 2 : 0.5}
                castShadow
                shadow-mapSize={1024}
            />

            {/* Environment Map */}
            <Environment preset={isDayMode ? "sunset" : "city"} background={false} />
        </>
    );
}
