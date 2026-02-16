import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BsArrowRight } from 'react-icons/bs';

const Interior = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(textRef.current,
            { x: 50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%"
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="py-20 px-4 md:px-16 grid grid-cols-1 md:grid-cols-2" data-scroll-section>

            {/* Left Image */}
            <div className="relative h-[600px] w-full">
                <img
                    src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1000&auto=format&fit=crop"
                    alt="Modern Interior"
                    className="w-full h-full object-cover rounded-l-3xl"
                />
            </div>

            {/* Right Content */}
            <div ref={textRef} className="bg-[#a88e68] text-white p-16 md:p-24 flex flex-col justify-center rounded-r-3xl -ml-4 z-10 relative">
                <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
                    Experienced in making your home more modern and comfortable
                </h2>
                <p className="text-white/80 mb-10 leading-relaxed max-w-md">
                    We have helped thousands of customers by making their homes more modern and comfortable. Don't feel you are alone; we are here to help you.
                </p>

                <div className="flex items-center gap-4 cursor-pointer group w-fit">
                    <span className="font-medium text-lg">Learn More</span>
                    <span className="w-8 h-8 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#a88e68] transition-colors">
                        <BsArrowRight />
                    </span>
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-10 right-10 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 max-w-[200px] hidden md:block group cursor-pointer hover:bg-white/20 transition-colors" data-scroll data-scroll-speed="3">
                    <div className="text-sm font-bold mb-1">Gray Sofa 12</div>
                    <div className="text-xs text-white/70 flex items-center gap-1">Add to Card <BsArrowRight size={12} /></div>
                </div>
            </div>

        </section>
    );
};

export default Interior;
