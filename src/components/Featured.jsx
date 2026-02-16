import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BsArrowUpRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products as allProducts } from '../data/products';

const Featured = () => {
    // Select a few items to feature
    const featuredProducts = allProducts.filter(p =>
        ['house-sofa-1', 'office-desk-1', 'house-coffee-1', 'chair-blue'].includes(p.id)
    );
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const { addToCart } = useCart();

    useEffect(() => {
        gsap.fromTo(cardsRef.current,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} id="featured" className="relative py-24 px-4 md:px-16 bg-white overflow-hidden" data-scroll-section>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-xl">
                    <span className="text-furnworld-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Selected Collection</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-furnworld-dark leading-tight">Our Best Quality <br /> Products</h2>
                </div>

                <div className="max-w-xs text-left md:text-right">
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Curated pieces that blend timeless aesthetics with modern functionality, designed to elevate your lifestyle.
                    </p>
                </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                {featuredProducts.map((product, index) => (
                    <div
                        key={product.id}
                        ref={el => cardsRef.current[index] = el}
                        className="group relative flex flex-col"
                    >
                        <Link
                            to={`/product/${product.id}`}
                            className="bg-[#f8f8f8] rounded-[2.5rem] p-8 aspect-square flex items-center justify-center mb-6 overflow-hidden transition-all duration-500 group-hover:bg-[#f0f0f0] group-hover:shadow-2xl group-hover:shadow-furnworld-gold/5"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Category Badge */}
                            <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-[10px] font-bold text-gray-400 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {product.category}
                            </div>
                        </Link>

                        <div className="px-2 flex justify-between items-start">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-bold text-furnworld-dark group-hover:text-furnworld-gold transition-colors duration-300">
                                    {product.name}
                                </h3>
                                <span className="text-xl font-serif text-furnworld-brown">
                                    ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
                                </span>
                            </div>

                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    addToCart(product);
                                }}
                                title="Add to Cart"
                                className="w-10 h-10 rounded-full bg-white border border-gray-100 text-furnworld-dark flex items-center justify-center hover:bg-furnworld-gold hover:text-white hover:border-furnworld-gold transition-all duration-300 shadow-sm group"
                            >
                                <BsCart2 size={18} className="group-hover:scale-110 transition-transform" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Featured;
