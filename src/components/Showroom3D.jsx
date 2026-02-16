import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stage, Float, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import SofaModel from './3d/SofaModel';
import CoffeeTableModel from './3d/CoffeeTableModel';
import LampModel from './3d/LampModel';
import ChairModel from './3d/ChairModel';

const ShowroomScene = () => {
    const group = useRef();

    // Smooth cursor parallax
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        group.current.rotation.y = Math.sin(t / 4) / 8;
        group.current.position.y = (1 + Math.sin(t / 1.5)) / 10;

        // Parallax based on mouse
        const x = (state.mouse.x * Math.PI) / 20;
        const y = (state.mouse.y * Math.PI) / 20;
        group.current.rotation.x = -y;
        group.current.rotation.y += x;
    });

    return (
        <group ref={group}>
            <Stage environment="city" intensity={0.5} contactShadow={false}>
                <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                    <SofaModel position={[-2, 0, 0]} rotation={[0, Math.PI / 8, 0]} scale={0.8} />
                    <CoffeeTableModel position={[1.5, 0, 1]} rotation={[0, -Math.PI / 4, 0]} scale={0.7} />
                    <ChairModel position={[2, 0, -1]} rotation={[0, -Math.PI / 6, 0]} scale={0.6} />
                    <LampModel position={[-3, 0, -2]} scale={0.5} />
                </Float>
            </Stage>
            <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
        </group>
    );
};

const Showroom3D = () => {
    const [activeItem, setActiveItem] = useState(null);

    return (
        <section className="relative h-screen w-full bg-[#0a101e] overflow-hidden" data-scroll-section>
            {/* UI Overlay */}
            <div className="absolute top-20 left-4 md:left-16 z-10 max-w-xl pointer-events-none">
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                    Visit Our Virtual <span className="text-furnworld-gold">Luxury Showroom</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-md">
                    Immerse yourself in a curated selection of our finest pieces, meticulously crafted for the modern home.
                </p>
                <div className="flex gap-4 pointer-events-auto">
                    <button className="px-8 py-3 bg-furnworld-gold text-white rounded-full font-bold hover:bg-furnworld-brown transition-all shadow-lg hover:shadow-furnworld-gold/30">
                        Explore Collection
                    </button>
                    <button className="px-8 py-3 border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all">
                        Book a Tour
                    </button>
                </div>
            </div>

            {/* Product Tag (Dynamic) */}
            <div className="absolute bottom-20 right-4 md:right-16 z-10 text-right">
                <div className="text-sm text-furnworld-gold font-bold tracking-widest uppercase mb-2">Currently Featuring</div>
                <div className="text-3xl font-serif text-white">The Midnight Velvet Suite</div>
                <p className="text-gray-500 text-xs mt-2 italic">Premium Collection 2026</p>
            </div>

            {/* 3D Canvas */}
            <div className="w-full h-full cursor-grab active:cursor-grabbing">
                <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 10], fov: 35 }}>
                    <Suspense fallback={null}>
                        <color attach="background" args={['#0a101e']} />
                        <Environment preset="city" />
                        <PresentationControls
                            global
                            config={{ mass: 2, tension: 500 }}
                            snap={{ mass: 4, tension: 1500 }}
                            rotation={[0, 0.3, 0]}
                            polar={[-Math.PI / 6, Math.PI / 6]}
                            azimuth={[-Math.PI / 4, Math.PI / 4]}
                        >
                            <ShowroomScene />
                        </PresentationControls>
                    </Suspense>
                </Canvas>
            </div>

            {/* Ambient Visuals */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a101e] via-transparent to-[#0a101e] pointer-events-none" />
        </section>
    );
};

export default Showroom3D;
