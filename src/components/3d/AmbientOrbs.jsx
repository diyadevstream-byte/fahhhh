import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Orbs = ({ theme = 'light' }) => {
    const colorPrimary = theme === 'dark' ? '#1a2538' : '#e0e0e0';
    const colorSecondary = theme === 'dark' ? '#0f172a' : '#f5f5f5';

    return (
        <group>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <Sphere args={[1.5, 32, 32]} position={[-2, 1, -2]}>
                    <MeshDistortMaterial
                        color={colorPrimary}
                        attach="material"
                        distort={0.4}
                        speed={1.5}
                        roughness={0.4}
                        transparent
                        opacity={0.8}
                    />
                </Sphere>
            </Float>

            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.8} position={[2, -1.5, -3]}>
                <Sphere args={[1, 32, 32]}>
                    <MeshDistortMaterial
                        color={colorSecondary}
                        attach="material"
                        distort={0.3}
                        speed={2}
                        roughness={0.2}
                    />
                </Sphere>
            </Float>
        </group>
    );
};

const AmbientOrbs = ({ theme = 'light' }) => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Orbs theme={theme} />
            </Canvas>
        </div>
    );
};

export default AmbientOrbs;
