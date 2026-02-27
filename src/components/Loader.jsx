import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
    const { progress } = useProgress();

    return (
        <Html center>
            <div className="loader">
                <div className="spinner"></div>
                <p>Loading Showroom Experience...</p>
                <p className="progress">{progress.toFixed(0)}%</p>
            </div>
        </Html>
    );
}
