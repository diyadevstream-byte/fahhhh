import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const images = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1615876234582-29a2444f1be8?q=80&w=1000&auto=format&fit=crop"
];

const VisualGallery = () => {
    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} className="py-24 px-4 md:px-16 bg-white" data-scroll-section>
            <div className="flex flex-col md:flex-row gap-8 h-auto md:h-[700px]">

                <div className="w-full md:w-1/2 h-[400px] md:h-full relative overflow-hidden rounded-[3rem] group">
                    <img
                        src={images[0]}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        alt="Gallery 1"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <span className="text-white text-2xl font-serif">Living Space</span>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-8">
                    <div className="h-[330px] relative overflow-hidden rounded-[2.5rem] group">
                        <img
                            src={images[1]}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            alt="Gallery 2"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <span className="text-white text-2xl font-serif">Artisan Details</span>
                        </div>
                    </div>
                    <div className="flex gap-8 h-[330px]">
                        <div className="w-1/2 relative overflow-hidden rounded-[2.5rem] group">
                            <img
                                src={images[2]}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                alt="Gallery 3"
                            />
                        </div>
                        <div className="w-1/2 relative overflow-hidden rounded-[2.5rem] group bg-furnworld-gold flex flex-col items-center justify-center text-white text-center p-6">
                            <h4 className="text-3xl font-serif mb-2">100%</h4>
                            <p className="text-xs uppercase tracking-widest font-bold">Natural Materials</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default VisualGallery;
