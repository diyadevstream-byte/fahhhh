import React from 'react';
import ParticleFlow from '../components/3d/ParticleFlow';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

const Promo = () => {
    // Select products for different promo sections
    const deals = products.slice(0, 4).map(p => ({
        ...p,
        oldPrice: (p.price * 1.3).toFixed(2),
        discount: '30% OFF'
    }));

    const categories = [
        { name: 'Office', discount: 'Up to 50% Off', image: '/images/office-cat.jpg' },
        { name: 'Living Room', discount: 'Flat 20% Off', image: '/images/living-cat.jpg' },
        { name: 'Bedroom', discount: 'Members Only', image: '/images/bedroom-cat.jpg' }
    ];

    return (
        <div className="relative min-h-screen pt-32 pb-24 px-4 md:px-16 bg-[#fcfcfc] overflow-hidden" data-scroll-section>
            <div className="absolute inset-0 z-0">
                <ParticleFlow />
            </div>

            {/* Hero Section */}
            <div className="relative z-10 flex flex-col items-center mb-24" data-scroll data-scroll-speed="1">
                <span className="text-furnworld-gold font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Seasonal Offers</span>
                <h1 className="text-5xl md:text-8xl font-bold font-serif mb-8 text-furnworld-dark text-center leading-tight">
                    Premium Quality <br /> <span className="italic text-gray-400">Exceptional Prices</span>
                </h1>

                <div className="w-full max-w-5xl bg-[#0a101e] p-12 md:p-20 rounded-[3rem] border border-white/10 text-center shadow-2xl relative overflow-hidden group">
                    {/* Decorative Blur */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-furnworld-gold/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-furnworld-gold/30 transition-colors duration-500"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Summer Warehouse Sale</h2>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
                            Unlock up to <span className="font-bold text-furnworld-gold">60% savings</span> on our signature office collection. Valid until the end of August.
                        </p>
                        <Link to="/shop" className="inline-block px-12 py-5 bg-furnworld-gold text-white rounded-full font-bold text-lg hover:bg-white hover:text-furnworld-dark transition-all duration-300 shadow-xl hover:shadow-furnworld-gold/40 transform hover:-translate-y-1">
                            Explore All Deals
                        </Link>
                    </div>
                </div>
            </div>

            {/* Featured Deals Grid */}
            <div className="relative z-10 max-w-7xl mx-auto mb-24">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h3 className="text-3xl font-bold text-furnworld-dark mb-2">Featured Deals</h3>
                        <p className="text-gray-500 text-lg">Hand-picked luxury items at limited-time prices.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {deals.map((item, idx) => (
                        <Link to={`/product/${item.id}`} key={item.id} className="group bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500">
                            <div className="aspect-square rounded-2xl bg-gray-50 overflow-hidden mb-6 relative">
                                <img src={item.image} alt={item.name} className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 bg-furnworld-dark text-white text-[10px] font-bold px-3 py-1 rounded-full">
                                    {item.discount}
                                </div>
                            </div>
                            <h4 className="text-lg font-bold text-furnworld-dark mb-1">{item.name}</h4>
                            <div className="flex items-center gap-3">
                                <span className="text-xl font-bold text-furnworld-gold">${item.price}</span>
                                <span className="text-gray-400 line-through text-sm">${item.oldPrice}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Category Promo Boxes */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {categories.map((cat, idx) => (
                    <div key={idx} className="relative h-64 rounded-[2rem] overflow-hidden bg-gray-900 group cursor-pointer shadow-lg hover:shadow-2xl transition-all">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                            <span className="text-furnworld-gold font-bold text-sm tracking-widest uppercase mb-1">{cat.discount}</span>
                            <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">{cat.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Promo;
