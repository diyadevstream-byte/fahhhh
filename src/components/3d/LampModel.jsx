import React from 'react';

const LampModel = ({
    shadeColor = "#fff",
    poleColor = "#a88e68",
    baseColor = "#333",
    ...props
}) => {
    return (
        <group {...props} dispose={null}>
            {/* Base */}
            <mesh position={[0, 0.05, 0]} castShadow>
                <cylinderGeometry args={[0.4, 0.4, 0.1, 32]} />
                <meshStandardMaterial color={baseColor} metalness={0.5} roughness={0.2} />
            </mesh>

            {/* Pole */}
            <mesh position={[0, 2, 0]} castShadow>
                <cylinderGeometry args={[0.03, 0.03, 4, 16]} />
                <meshStandardMaterial color={poleColor} metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Shade */}
            <mesh position={[0, 4, 0]} castShadow>
                <cylinderGeometry args={[0.4, 0.6, 0.8, 32, 1, true]} />
                <meshStandardMaterial color={shadeColor} side={2} transparent opacity={0.9} />
                {/* Internal Bulb (Light source proxy) */}
                <pointLight intensity={1.5} distance={5} color="#ffdcae" />
            </mesh>
        </group>
    );
};

export default LampModel;
