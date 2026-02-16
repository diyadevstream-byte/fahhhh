import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';

const Geometries = ({ theme = 'light' }) => {
    const groupRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        groupRef.current.rotation.y = time * 0.1;
        groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.2;
    });

    const materialProps = theme === 'dark'
        ? { color: "#a88e68", metalness: 0.8, roughness: 0.2 } // Gold/Metallic for dark
        : { color: "#ffffff", metalness: 0.1, roughness: 0.1 }; // White/Ceramic for light

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                {/* Torus */}
                <mesh position={[-2, 1, -2]} rotation={[0.5, 0.5, 0]}>
                    <torusGeometry args={[0.8, 0.2, 16, 32]} />
                    <meshStandardMaterial {...materialProps} />
                </mesh>
            </Float>

            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={0.8}>
                {/* Sphere */}
                <mesh position={[2, -1, -3]}>
                    <sphereGeometry args={[0.8, 32, 32]} />
                    <meshStandardMaterial {...materialProps} />
                </mesh>
            </Float>

            <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
                {/* Octahedron */}
                <mesh position={[0, 0, -5]}>
                    <octahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial {...materialProps} />
                </mesh>
            </Float>
        </group>
    );
};

const GeometricBackground = ({ theme = 'light' }) => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Geometries theme={theme} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default GeometricBackground;
