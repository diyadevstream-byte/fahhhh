import React from 'react';
import { RoundedBox } from '@react-three/drei';

const SofaModel = ({
    fabricColor = "#2c3e50",
    woodColor = "#3e2723",
    ...props
}) => {
    const material = { color: fabricColor, roughness: 0.7 };
    const woodMaterial = { color: woodColor, roughness: 0.5 };

    return (
        <group {...props} dispose={null}>
            {/* Main Base */}
            <RoundedBox args={[4, 0.6, 2]} radius={0.1} smoothness={4} position={[0, 0.3, 0]}>
                <meshStandardMaterial {...material} />
            </RoundedBox>

            {/* Cushions */}
            <RoundedBox args={[1.9, 0.5, 1.8]} radius={0.15} smoothness={4} position={[1, 0.8, 0]}>
                <meshStandardMaterial {...material} />
            </RoundedBox>
            <RoundedBox args={[1.9, 0.5, 1.8]} radius={0.15} smoothness={4} position={[-1, 0.8, 0]}>
                <meshStandardMaterial {...material} />
            </RoundedBox>

            {/* Backrest */}
            <RoundedBox args={[4, 1.2, 0.4]} radius={0.15} smoothness={4} position={[0, 1.2, -0.8]}>
                <meshStandardMaterial {...material} />
            </RoundedBox>

            {/* Armrests */}
            <RoundedBox args={[0.4, 0.8, 1.8]} radius={0.1} smoothness={4} position={[2.1, 0.7, 0]}>
                <meshStandardMaterial {...material} />
            </RoundedBox>
            <RoundedBox args={[0.4, 0.8, 1.8]} radius={0.1} smoothness={4} position={[-2.1, 0.7, 0]}>
                <meshStandardMaterial {...material} />
            </RoundedBox>

            {/* Legs */}
            {[[-1.8, 0, 0.8], [1.8, 0, 0.8], [-1.8, 0, -0.8], [1.8, 0, -0.8]].map((pos, i) => (
                <mesh key={i} position={pos}>
                    <cylinderGeometry args={[0.08, 0.05, 0.4]} />
                    <meshStandardMaterial {...woodMaterial} />
                </mesh>
            ))}
        </group>
    );
};

export default SofaModel;
