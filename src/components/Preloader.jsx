import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Initial text reveal
        tl.to(textRef.current, {
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
        })
            .to(textRef.current, {
                opacity: 0,
                duration: 0.5,
                delay: 0.5
            })
            .to(containerRef.current, {
                yPercent: -100,
                duration: 1.2,
                ease: 'power4.inOut'
            });

    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[100] bg-[#0a101e] flex items-center justify-center text-white">
            <div ref={textRef} className="text-4xl md:text-6xl font-bold tracking-tighter opacity-0 font-serif">
                Furnworld.
            </div>
        </div>
    );
};

export default Preloader;
