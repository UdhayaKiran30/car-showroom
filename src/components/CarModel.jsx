import { useGLTF, Center } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import * as THREE from 'three';

export default function CarModel({ modelPath = "/models/car.glb", color, ...props }) {
    const { scene } = useGLTF(modelPath);

    // Clone the scene to avoid modifying the cached original
    const clonedScene = useMemo(() => scene.clone(), [scene]);

    useEffect(() => {
        if (!clonedScene) return;

        // Reset scale before calculating bounds
        clonedScene.scale.set(1, 1, 1);

        // Calculate the bounding box of the model
        const box = new THREE.Box3().setFromObject(clonedScene);
        const size = box.getSize(new THREE.Vector3());

        // Find the maximum dimension
        const maxDim = Math.max(size.x, size.y, size.z);

        // Scale the model so its maximum dimension is roughly 4.5 units
        const targetSize = 4.5;
        const scaleFactor = targetSize / maxDim;
        clonedScene.scale.set(scaleFactor, scaleFactor, scaleFactor);

        clonedScene.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;

                // Broad material heuristic for car paint
                if (child.material) {
                    const materials = Array.isArray(child.material) ? child.material : [child.material];

                    materials.forEach(mat => {
                        const matName = mat.name.toLowerCase();
                        // Try to find body paint while excluding glass, tires, chrome, etc.
                        const isPaint = matName.includes("body") ||
                            matName.includes("paint") ||
                            matName.includes("car_color") ||
                            matName.includes("material_0") ||
                            matName.includes("ext_") || // Common external part prefix
                            matName === "color"; // Very generic

                        const isExcluded = matName.includes("glass") ||
                            matName.includes("tire") ||
                            matName.includes("rubber") ||
                            matName.includes("chrome") ||
                            matName.includes("light") ||
                            matName.includes("wheel") ||
                            matName.includes("rim");

                        if (isPaint && !isExcluded) {
                            mat.color.set(color);
                        }
                    });
                }
            }
        });
    }, [clonedScene, color, modelPath]);

    return (
        <Center top>
            <primitive object={clonedScene} {...props} />
        </Center>
    );
}
