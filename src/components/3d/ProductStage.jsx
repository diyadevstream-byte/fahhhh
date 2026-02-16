import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, Environment } from '@react-three/drei';

const StageElements = () => {
    const groupRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        groupRef.current.rotation.y = time * 0.05;
    });

    return (
        <group ref={groupRef}>
            {/* Abstract geometric pedestals/accents */}
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh position={[-3, 0, -2]} rotation={[0, 0.5, 0]}>
                    <boxGeometry args={[1, 4, 1]} />
                    <meshStandardMaterial color="#f0f0f0" roughness={0.1} metalness={0.1} transparent opacity={0.6} />
                </mesh>
            </Float>

            <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
                <mesh position={[3.5, -1, -3]} rotation={[0.2, 0, 0.2]}>
                    <boxGeometry args={[1.5, 1.5, 1.5]} />
                    <meshStandardMaterial color="#a88e68" roughness={0.2} metalness={0.8} transparent opacity={0.2} />
                </mesh>
            </Float>

            <Float speed={1} rotationIntensity={0.2} floatIntensity={0.4}>
                <mesh position={[0, -2, -4]} rotation={[Math.PI / 4, 0, 0]}>
                    <cylinderGeometry args={[2, 2, 0.2, 32]} />
                    <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.1} />
                </mesh>
            </Float>
        </group>
    );
};

const ProductStage = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.7} />
                <spotLight position={[10, 10, 5]} angle={0.3} penumbra={1} intensity={1} castShadow />
                <StageElements />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default ProductStage;
