import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { Flip } from 'gsap/flip';
import GeometricBackground from '../components/3d/GeometricBackground';

gsap.registerPlugin(Flip);

const categories = [
    {
        name: 'Office',
        image: '/src/assets/categories/office.jpg',
        speed: "1"
    },
    {
        name: 'House',
        image: '/src/assets/categories/house.jpg',
        speed: "2"
    },
    {
        name: 'Kitchen',
        image: '/src/assets/categories/kitchen.jpg',
        speed: "1"
    },
    {
        name: 'Bedroom',
        image: '/src/assets/categories/bedroom.jpg',
        speed: "2"
    }
];

const CategoriesPage = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);

    const handleCategoryClick = (categoryName) => {
        const card = document.querySelector(`.category-card-${categoryName}`);
        const state = Flip.getState(card);

        // Store state globally for the next page to pick up
        window.flipState = state;

        // Add a class for visual feedback during transition
        card.classList.add('transitioning');

        // Small delay to allow the state to be captured and for user to see the "start" of the click
        setTimeout(() => {
            navigate(`/categories/${categoryName}`);
        }, 100);
    };

    return (
        <div className="relative min-h-screen pt-32 px-4 md:px-16 bg-[#0a101e] text-white" data-scroll-section>
            <GeometricBackground theme="dark" />

            <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold font-serif mb-8 text-white" data-scroll data-scroll-speed="2">Categories</h1>
                <p className="text-gray-400 mb-12" data-scroll data-scroll-speed="1.5">Browse furniture by category.</p>

                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
                    {categories.map((cat) => (
                        <div
                            key={cat.name}
                            onClick={() => handleCategoryClick(cat.name)}
                            data-flip-id={`category-${cat.name}`}
                            className={`category-card-${cat.name} relative bg-white/5 backdrop-blur-md h-96 rounded-3xl overflow-hidden border border-white/10 hover:border-furnworld-gold/50 transition-all duration-500 group cursor-pointer`}
                            data-scroll
                            data-scroll-speed={cat.speed}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:via-black/20 transition-all duration-500"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex items-center justify-center">
                                <span className="text-4xl font-bold text-white tracking-wider drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                                    #{cat.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoriesPage;
