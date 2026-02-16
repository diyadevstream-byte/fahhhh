import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BsPlayCircle, BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Background3D from './Background3D';
import VideoModal from './VideoModal';

const Hero = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);
    const statsRef = useRef(null);
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: 'hero-chair',
            name: "Chair-225",
            price: "$225",
            image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop"
        });
    };

    useEffect(() => {
        const tl = gsap.timeline();

        // Content Reveal
        tl.fromTo(contentRef.current.children,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
        );

        // Image Reveal
        tl.fromTo(imageRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out' },
            "-=1"
        );

        // Stats Reveal
        tl.fromTo(statsRef.current.children,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
            "-=1"
        );

    }, []);

    return (
        <section ref={heroRef} id="hero" className="relative w-full min-h-screen bg-[#0a101e] text-white flex flex-col justify-center overflow-hidden px-4 md:px-16 pt-24" data-scroll-section>

            <Background3D />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full items-center relative z-10">

                {/* Left Content */}
                <div ref={contentRef} className="md:col-span-6 z-10 flex flex-col justify-center">
                    <h1 className="text-5xl md:text-7xl font-sans font-bold leading-tight mb-6">
                        Choose Our Top <br />
                        Picks Furniture
                    </h1>
                    <p className="text-gray-400 text-base mb-10 max-w-md leading-relaxed">
                        We bring beauty and style to your home with a stunning selection of furniture you'll love.
                    </p>

                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => navigate('/shop')}
                            className="px-8 py-3 bg-white text-furnworld-dark rounded-full font-medium hover:bg-furnworld-beige transition-colors shadow-lg hover:scale-105 transform duration-300"
                        >
                            Shop Now
                        </button>
                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="flex items-center gap-2 group hover:text-furnworld-beige transition-colors border border-gray-600 hover:border-furnworld-beige rounded-full px-6 py-3"
                        >
                            <BsPlayCircle size={20} />
                            <span className="font-medium">Watch Video</span>
                        </button>
                    </div>
                </div>

                {/* Right Image / Background Composition */}
                <div className="md:col-span-6 relative h-[50vh] md:h-[80vh] flex items-center justify-center">
                    {/* Main Blue Chair Image */}
                    <div ref={imageRef} className="relative z-10 w-full h-full" data-scroll data-scroll-speed="0.5">
                        <img
                            src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop"
                            alt="Blue Armchair"
                            className="w-full h-full object-contain object-center drop-shadow-2xl"
                        />

                        {/* Floating 'Add to Cart' Card */}
                        <div
                            onClick={handleAddToCart}
                            className="absolute top-1/2 left-0 md:-left-12 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4 animate-float cursor-pointer hover:bg-white/20 transition-all"
                            data-scroll
                            data-scroll-speed="1.5"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#a88e68] flex items-center justify-center text-white text-xs font-bold">
                                +
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white">Chair-225</div>
                                <div className="text-xs text-gray-300 flex items-center gap-1">
                                    Add to Cart <BsArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Stats */}
            <div ref={statsRef} className="absolute bottom-10 left-4 md:left-16 flex gap-16 text-white z-20">
                <div>
                    <div className="text-2xl font-bold">1464</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">Total Products</div>
                </div>
                <div>
                    <div className="text-2xl font-bold">12573</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">Happy Customers</div>
                </div>
            </div>

            {/* Video Modal */}
            <VideoModal
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                videoUrl="https://v1.pinimg.com/videos/iht/720p/84/fc/10/84fc102c9dd82eee86ba946e3f3f9d16.mp4"
            />

        </section>
    );
};

export default Hero;
