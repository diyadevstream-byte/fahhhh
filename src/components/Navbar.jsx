import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { BsCart2, BsPlusCircleFill } from 'react-icons/bs';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { totalCount } = useCart();
    const navRef = useRef(null);

    useEffect(() => {
        const el = navRef.current;

        // Initial animation
        gsap.fromTo(el,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
        );
    }, []);

    return (
        <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-6 text-white mix-blend-difference">
            <Link to="/" className="flex items-center gap-2">
                <BsPlusCircleFill className="text-white text-xl" />
                <div className="text-xl font-bold tracking-tight">
                    Furnworld
                </div>
            </Link>

            <div className="hidden md:flex space-x-12 text-sm font-medium tracking-wide">
                <Link to="/" className="hover:text-furnworld-gold transition-colors">Home</Link>
                <Link to="/shop" className="hover:text-furnworld-gold transition-colors">Product</Link>
                <Link to="/categories" className="hover:text-furnworld-gold transition-colors">Categories</Link>
                <Link to="/promo" className="hover:text-furnworld-gold transition-colors">Promo</Link>
            </div>

            <div className="flex items-center space-x-6">
                <div className="relative cursor-pointer hover:text-furnworld-gold transition-colors">
                    <BsCart2 size={24} />
                    {totalCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-furnworld-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                            {totalCount}
                        </span>
                    )}
                </div>
                {/* Using a distinct styling for the Register button as per screenshot */}
                <Link to="/register" className="hidden md:block px-6 py-2 bg-furnworld-gold text-white text-sm font-medium rounded-full hover:bg-furnworld-brown transition-colors shadow-lg hover:shadow-furnworld-gold/20">
                    Register
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
