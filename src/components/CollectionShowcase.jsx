import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CollectionShowcase = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(sectionRef.current.children,
            { y: 60, opacity: 0 },
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
        <section ref={sectionRef} className="py-16 px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white" data-scroll-section>

            {/* Office Collection */}
            <div className="relative group overflow-hidden rounded-[2.5rem] h-[600px] bg-[#f8f7f2] border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/src/assets/products/office/desk.jpg"
                        alt="Workspace Collection"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a101e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="relative z-10 p-12 h-full flex flex-col justify-end">
                    <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="inline-block px-4 py-1 rounded-full bg-furnworld-gold/10 text-furnworld-gold text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md border border-furnworld-gold/20">
                            Executive Series
                        </span>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-lg">
                            Elevate Your <br /> Professional Life
                        </h3>
                        <Link
                            to="/categories/Office"
                            className="flex items-center gap-3 w-fit px-8 py-3 bg-white text-furnworld-dark rounded-full font-bold hover:bg-furnworld-gold hover:text-white transition-all shadow-xl opacity-0 group-hover:opacity-100 "
                        >
                            Shop Collection <BsArrowRight />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Living Collection */}
            <div className="relative group overflow-hidden rounded-[2.5rem] h-[600px] bg-[#f8f7f2] border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/src/assets/products/house/sofa.jpg"
                        alt="Living Room Collection"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#a88e68]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="relative z-10 p-12 h-full flex flex-col justify-end">
                    <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md border border-white/20">
                            Premium Living
                        </span>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-lg">
                            Artisan Comfort <br /> For Your Home
                        </h3>
                        <Link
                            to="/categories/House"
                            className="flex items-center gap-3 w-fit px-8 py-3 bg-furnworld-gold text-white rounded-full font-bold hover:bg-furnworld-brown transition-all shadow-xl opacity-0 group-hover:opacity-100"
                        >
                            Explore House <BsArrowRight />
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CollectionShowcase;
