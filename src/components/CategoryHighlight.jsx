import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CategoryHighlight = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(sectionRef.current.children,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.3,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%"
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="py-10 px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8" data-scroll-section>

            {/* Office Highlight */}
            <div className="relative group overflow-hidden rounded-3xl h-[500px] bg-[#f0eee6]">
                <img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop"
                    alt="Office Comfort"
                    className="absolute right-0 bottom-0 w-3/4 h-3/4 object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
                    data-scroll data-scroll-speed="1"
                />
                <div className="absolute top-12 left-10 max-w-[200px]" data-scroll data-scroll-speed="0.5">
                    <span className="text-gray-500 font-medium mb-2 block">#Office</span>
                    <h3 className="text-3xl font-bold text-primary leading-tight">
                        Make Your Office More Comfortable
                    </h3>
                </div>
            </div>

            {/* House Highlight */}
            <div className="relative group overflow-hidden rounded-3xl h-[500px] bg-white border border-gray-100 shadow-sm">
                <img
                    src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop"
                    alt="House Chair"
                    className="absolute right-0 bottom-0 w-3/4 h-3/4 object-contain object-center transition-transform duration-700 group-hover:scale-105"
                    data-scroll data-scroll-speed="1"
                />
                <div className="absolute bottom-12 left-10 max-w-[200px]" data-scroll data-scroll-speed="0.5">
                    <span className="text-gray-500 font-medium mb-2 block">#House</span>
                    <h3 className="text-3xl font-bold text-primary leading-tight">
                        Express Your Life Through Furniture
                    </h3>
                </div>
            </div>

        </section>
    );
};

export default CategoryHighlight;
