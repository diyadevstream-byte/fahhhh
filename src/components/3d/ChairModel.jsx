import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';

const ChairModel = ({
    fabricColor = "#1a3b5d",
    woodColor = "#8c7b6c",
    goldColor = "#a88e68",
    ...props
}) => {
    const group = useRef();

    // Material props
    const fabricMaterial = { color: fabricColor, roughness: 0.8 };
    const woodMaterial = { color: woodColor, roughness: 0.5, metalness: 0.1 };
    const goldMaterial = { color: goldColor, roughness: 0.2, metalness: 0.8 };

    return (
        <group ref={group} {...props} dispose={null}>
            {/* Seat */}
            <RoundedBox args={[2, 0.4, 2]} radius={0.1} smoothness={4} position={[0, 1, 0]}>
                <meshStandardMaterial {...fabricMaterial} />
            </RoundedBox>

            {/* Backrest */}
            <RoundedBox args={[2, 2.5, 0.4]} radius={0.1} smoothness={4} position={[0, 2.2, -0.8]}>
                <meshStandardMaterial {...fabricMaterial} />
            </RoundedBox>

            {/* Armrests */}
            <RoundedBox args={[0.3, 1, 1.8]} radius={0.05} smoothness={4} position={[0.85, 1.5, 0]}>
                <meshStandardMaterial {...fabricMaterial} />
            </RoundedBox>
            <RoundedBox args={[0.3, 1, 1.8]} radius={0.05} smoothness={4} position={[-0.85, 1.5, 0]}>
                <meshStandardMaterial {...fabricMaterial} />
            </RoundedBox>

            {/* Legs */}
            <mesh position={[0.8, 0, 0.8]} castShadow>
                <cylinderGeometry args={[0.1, 0.05, 1, 16]} />
                <meshStandardMaterial {...woodMaterial} />
                <mesh position={[0, 0.5, 0]}>
                    <cylinderGeometry args={[0.12, 0.12, 0.1, 16]} />
                    <meshStandardMaterial {...goldMaterial} />
                </mesh>
            </mesh>
            <mesh position={[-0.8, 0, 0.8]} castShadow>
                <cylinderGeometry args={[0.1, 0.05, 1, 16]} />
                <meshStandardMaterial {...woodMaterial} />
                <mesh position={[0, 0.5, 0]}>
                    <cylinderGeometry args={[0.12, 0.12, 0.1, 16]} />
                    <meshStandardMaterial {...goldMaterial} />
                </mesh>
            </mesh>
            <mesh position={[0.8, 0, -0.8]} castShadow>
                <cylinderGeometry args={[0.1, 0.05, 1, 16]} />
                <meshStandardMaterial {...woodMaterial} />
                <mesh position={[0, 0.5, 0]}>
                    <cylinderGeometry args={[0.12, 0.12, 0.1, 16]} />
                    <meshStandardMaterial {...goldMaterial} />
                </mesh>
            </mesh>
            <mesh position={[-0.8, 0, -0.8]} castShadow>
                <cylinderGeometry args={[0.1, 0.05, 1, 16]} />
                <meshStandardMaterial {...woodMaterial} />
                <mesh position={[0, 0.5, 0]}>
                    <cylinderGeometry args={[0.12, 0.12, 0.1, 16]} />
                    <meshStandardMaterial {...goldMaterial} />
                </mesh>
            </mesh>
        </group>
    );
};

export default ChairModel;
