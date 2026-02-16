import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, Float } from '@react-three/drei';

const Flow = () => {
    const flowRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Gentle wave motion
        flowRef.current.position.y = Math.sin(time * 0.5) * 0.5;
        flowRef.current.rotation.z = Math.sin(time * 0.2) * 0.1;
    });

    return (
        <group ref={flowRef} rotation={[0, 0, Math.PI / 4]}>
            <Sparkles
                count={200}
                scale={[10, 10, 10]}
                size={6}
                speed={0.5}
                opacity={0.8}
                color="#a88e68" // Gold
            />
            <Sparkles
                count={100}
                scale={[8, 8, 8]}
                size={4}
                speed={0.2}
                opacity={0.5}
                color="#ffffff"
            />
        </group>
    );
};

const ParticleFlow = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
                    <Flow />
                </Float>
            </Canvas>
        </div>
    );
};

export default ParticleFlow;
