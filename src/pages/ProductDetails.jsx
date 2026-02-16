import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Stage, PresentationControls, Environment } from '@react-three/drei';
import { BsArrowLeft, BsCart2, BsStarFill, BsStarHalf } from 'react-icons/bs';
import DynamicModel from '../components/3d/DynamicModel';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [added, setAdded] = React.useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    // Fetch product by ID
    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen pt-24 flex items-center justify-center bg-furnworld-beige">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-furnworld-dark mb-4">Product Not Found</h1>
                    <button onClick={() => navigate('/shop')} className="text-furnworld-gold font-bold hover:underline">
                        Return to Shop
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-16 bg-furnworld-beige flex flex-col md:flex-row gap-12" data-scroll-section>

            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="absolute top-28 left-4 md:left-16 z-20 flex items-center gap-2 text-furnworld-brown hover:text-furnworld-dark transition-colors"
            >
                <BsArrowLeft size={20} /> Back
            </button>

            {/* Left: Product Media (3D or 2D Image) */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] bg-white rounded-[2.5rem] shadow-xl relative overflow-hidden ring-1 ring-black/5" data-scroll data-scroll-speed="0.5">
                <div className="absolute top-6 left-6 z-10 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-furnworld-green tracking-wide shadow-sm">
                    IN STOCK
                </div>

                {product.modelConfig ? (
                    <>
                        <div className="absolute bottom-6 right-6 z-10 text-xs text-gray-400 font-medium pointer-events-none uppercase tracking-widest">
                            DRAG TO ROTATE • SCROLL TO ZOOM
                        </div>

                        <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} className="w-full h-full cursor-grab active:cursor-grabbing">
                            <PresentationControls
                                speed={1.5}
                                global
                                polar={[-0.1, Math.PI / 4]}
                                rotation={[Math.PI / 8, Math.PI / 4, 0]}
                            >
                                <Stage environment="city" intensity={0.6} shadowBias={-0.001}>
                                    <DynamicModel config={product.modelConfig} scale={1.5} />
                                </Stage>
                            </PresentationControls>
                        </Canvas>
                    </>
                ) : (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover p-12"
                    />
                )}
            </div>

            {/* Right: Product Info */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8" data-scroll data-scroll-speed="1">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex text-amber-400 text-sm">
                            <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf />
                        </div>
                        <span className="text-sm text-gray-400">({product.reviews} Reviews)</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-furnworld-dark mb-4 leading-tight">
                        {product.name}
                    </h1>

                    <div className="text-3xl font-medium text-furnworld-gold">
                        ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
                    </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg max-w-xl">
                    {product.description}
                </p>

                <div className="space-y-3">
                    <h3 className="font-bold text-furnworld-dark">Features</h3>
                    <ul className="text-gray-600 space-y-2">
                        {product.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-furnworld-green" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex gap-4 pt-4">
                    <button
                        onClick={handleAddToCart}
                        disabled={added}
                        className={`flex-1 py-4 ${added ? 'bg-furnworld-green' : 'bg-furnworld-gold'} text-white rounded-full font-bold text-lg hover:bg-furnworld-brown transition-all duration-300 shadow-lg hover:shadow-furnworld-gold/30 flex items-center justify-center gap-2 group`}
                    >
                        <BsCart2 className="group-hover:scale-110 transition-transform" />
                        {added ? 'Added to Cart!' : 'Add to Cart'}
                    </button>
                    <button className="px-6 py-4 border border-gray-300 rounded-full hover:bg-white hover:border-furnworld-dark transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
