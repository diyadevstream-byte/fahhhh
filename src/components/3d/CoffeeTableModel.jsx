import React from 'react';

const CoffeeTableModel = ({
    topColor = "#f5f5f5",
    baseColor = "#a88e68",
    ...props
}) => {
    return (
        <group {...props} dispose={null}>
            {/* Marble Top */}
            <mesh position={[0, 0.8, 0]} castShadow>
                <boxGeometry args={[2.5, 0.1, 1.5]} />
                <meshStandardMaterial color={topColor} roughness={0.1} metalness={0.2} />
            </mesh>

            {/* Legs (Criss-cross base) */}
            <group position={[0, 0.4, 0]}>
                <mesh rotation={[0, 0, Math.PI / 4]} castShadow>
                    <boxGeometry args={[0.1, 1.2, 1.5]} />
                    <meshStandardMaterial color={baseColor} metalness={0.8} roughness={0.2} />
                </mesh>
                <mesh rotation={[0, 0, -Math.PI / 4]} castShadow>
                    <boxGeometry args={[0.1, 1.2, 1.5]} />
                    <meshStandardMaterial color={baseColor} metalness={0.8} roughness={0.2} />
                </mesh>
            </group>
        </group>
    );
};

export default CoffeeTableModel;
