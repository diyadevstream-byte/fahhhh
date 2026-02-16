import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PromotionalBanner = () => {
    const bannerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(contentRef.current,
            { scale: 0.9, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: bannerRef.current,
                    start: "top 85%"
                }
            }
        );
    }, []);

    return (
        <section ref={bannerRef} className="py-12 px-4 md:px-16" data-scroll-section>
            <div className="relative h-[400px] w-full rounded-[3rem] overflow-hidden bg-[#0a101e] shadow-2xl flex items-center justify-center text-center px-6">

                {/* Visual Interest Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-furnworld-gold rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-furnworld-brown rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>
                </div>

                <div ref={contentRef} className="relative z-10 max-w-3xl">
                    <span className="text-furnworld-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                        Limited Time Offer
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                        Transform Your Space <br className="hidden md:block" /> With <span className="italic text-gray-400">25% Discount</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed font-light">
                        Experience the perfect blend of modern design and timeless comfort. Our seasonal collection is now available with exclusive member benefits.
                    </p>
                    <button className="px-10 py-4 bg-white text-[#0a101e] rounded-full font-bold hover:bg-furnworld-gold hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                        Claim Your Discount
                    </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 hidden lg:block opacity-10">
                    <div className="text-[12rem] font-serif select-none pointer-events-none">2026</div>
                </div>
            </div>
        </section>
    );
};

export default PromotionalBanner;
