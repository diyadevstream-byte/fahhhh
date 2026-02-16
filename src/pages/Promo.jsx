import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PromotionalBanner from '../components/PromotionalBanner';
import CollectionShowcase from '../components/CollectionShowcase';
import Featured from '../components/Featured';

const Promo = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(pageRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: 'power2.out' }
        );
    }, []);

    return (
        <div ref={pageRef} className="pt-24 min-h-screen bg-[#fcfcfc]" data-scroll-section>
            <div className="px-8 md:px-16 py-12">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-furnworld-dark mb-4" data-scroll data-scroll-speed="1">
                    Special Offers
                </h1>
                <p className="text-gray-500 text-lg max-w-2xl mb-12" data-scroll data-scroll-speed="0.5">
                    Discover our latest promotions and exclusive discounts on premium furniture collections. Limited time offers designed for your dream home.
                </p>
            </div>

            <PromotionalBanner />

            <div className="py-20">
                <div className="px-8 md:px-16 mb-16">
                    <h2 className="text-4xl font-serif font-bold text-furnworld-dark">Flash Deals</h2>
                    <p className="text-gray-400 mt-2">Highly curated pieces with exceptional value.</p>
                </div>
                <Featured />
            </div>

            <CollectionShowcase />
        </div>
    );
};

export default Promo;
