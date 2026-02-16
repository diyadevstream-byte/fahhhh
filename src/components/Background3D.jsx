import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, Environment, Float, OrbitControls, Image } from '@react-three/drei';

const Particles = () => {
    const particlesRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Subtle rotation
        particlesRef.current.rotation.y = time * 0.05;
        // Float effect based on mouse (optional/subtle)
        const { mouse } = state;
        particlesRef.current.rotation.x = mouse.y * 0.02;
        particlesRef.current.rotation.z = mouse.x * 0.02;
    });

    return (
        <group ref={particlesRef}>
            {/* Main ambient particles */}
            <Sparkles
                count={150}
                scale={12}
                size={4}
                speed={0.4}
                opacity={0.6}
                color="#a88e68" // Gold accent
            />
            {/* Secondary depth particles */}
            <Sparkles
                count={100}
                scale={20}
                size={2}
                speed={0.2}
                opacity={0.4}
                color="#ffffff"
            />
        </group>
    );
};

const Background3D = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-auto cursor-grab active:cursor-grabbing overflow-hidden">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <Float
                    speed={2}
                    rotationIntensity={0.2}
                    floatIntensity={0.5}
                >
                    <Particles />
                </Float>

                {/* Floating Sofa Images */}
                <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5} floatingRange={[-0.2, 0.2]}>
                    <Image
                        url="/sofa_beige.png"
                        position={[3, 1.5, -2]}
                        scale={[3, 2]}
                        transparent
                        opacity={0.8}
                    />
                </Float>

                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.6} floatingRange={[-0.3, 0.3]}>
                    <Image
                        url="/sofa_green.png"
                        position={[-3, -1.5, -3]}
                        scale={[3.5, 2.5]}
                        transparent
                        opacity={0.6}
                        grayscale={0.2}
                    />
                </Float>

                <Environment preset="city" />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    rotateSpeed={0.5}
                />
            </Canvas>
        </div>
    );
};

export default Background3D;
