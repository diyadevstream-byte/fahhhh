import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { BsArrowLeft, BsFilter, BsCartPlus } from 'react-icons/bs';
import GeometricBackground from '../components/3d/GeometricBackground';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

gsap.registerPlugin(Flip);

const categoryMeta = {
    'Office': {
        image: '/categories/office.jpg',
        description: 'Design a workspace that inspires productivity and focus.'
    },
    'House': {
        image: '/categories/house.jpg',
        description: 'Complete furniture solutions for every room in your home.'
    },
    'Kitchen': {
        image: '/categories/kitchen.jpg',
        description: 'Modern and functional kitchen setups for the heart of your home.'
    },
    'Bedroom': {
        image: '/categories/bedroom.jpg',
        description: 'Create your personal sanctuary with our premium bedroom collection.'
    }
};

const CategoryDetail = () => {
    const { categoryName } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const heroRef = useRef(null);
    const contentRef = useRef(null);

    const filteredProducts = products.filter(p => p.category === categoryName);

    // Fallback if no products found for this category yet
    const displayProducts = filteredProducts.length > 0 ? filteredProducts : [
        { id: 1, name: 'Sample Product', price: 99.00, image: '/products/office/desk.jpg' }
    ];

    const meta = categoryMeta[categoryName] || {
        image: '/categories/house.jpg',
        description: 'Premium furniture collections.'
    };

    useEffect(() => {
        // FLIP animation if state exists
        if (window.flipState && heroRef.current) {
            Flip.from(window.flipState, {
                targets: heroRef.current,
                duration: 0.8,
                ease: "power4.inOut",
                scale: true,
                onComplete: () => {
                    window.flipState = null;
                }
            });
        }

        // Simple entrance animation for content
        gsap.fromTo(contentRef.current.children,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.5 }
        );
    }, [categoryName]);

    return (
        <div className="relative min-h-screen bg-[#0a101e] text-white overflow-hidden" data-scroll-section>
            <GeometricBackground theme="dark" />

            {/* Hero Section - This is the target for the FLIP animation */}
            <div
                ref={heroRef}
                data-flip-id={`category-${categoryName}`}
                className="relative h-[60vh] w-full flex items-center px-4 md:px-16 overflow-hidden"
            >
                <div className="absolute inset-0 z-0">
                    <img
                        src={meta.image}
                        alt={categoryName}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a101e] via-[#0a101e]/60 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-2xl">
                    <button
                        onClick={() => navigate('/categories')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
                    >
                        <BsArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Categories</span>
                    </button>
                    <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6">#{categoryName}</h1>
                    <p className="text-xl text-gray-300 leading-relaxed font-light">
                        {meta.description}
                    </p>
                </div>
            </div>

            {/* Products Grid (Placeholder) */}
            <div ref={contentRef} className="relative z-10 px-4 md:px-16 py-20 bg-[#0a101e]">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold">Featured in {categoryName}</h2>
                    <button className="flex items-center gap-2 px-6 py-2 border border-white/10 rounded-full hover:bg-white/5 transition-colors">
                        <BsFilter /> <span>Filters</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {displayProducts.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => navigate(`/product/${product.id}`)}
                            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-furnworld-gold/30 transition-all duration-500 cursor-pointer group shadow-2xl"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        addToCart(product);
                                    }}
                                    className="absolute bottom-4 right-4 w-12 h-12 bg-furnworld-gold text-white rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl hover:bg-furnworld-brown"
                                >
                                    <BsCartPlus size={20} />
                                </button>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-furnworld-gold transition-colors">{product.name}</h3>
                                <div className="flex justify-between items-center">
                                    <div className="text-2xl font-serif text-furnworld-gold">${product.price.toFixed(2)}</div>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(`/product/${product.id}`);
                                        }}
                                        className="px-4 py-2 bg-white/10 hover:bg-furnworld-gold text-white text-xs font-bold rounded-full transition-all border border-white/10"
                                    >
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryDetail;
