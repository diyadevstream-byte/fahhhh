import React from 'react';

const Newsletter = () => {
    return (
        <section className="py-24 px-4 md:px-16 flex justify-center bg-furnworld-beige" data-scroll-section>
            <div className="w-full max-w-4xl bg-gradient-to-br from-[#f5f0e9] to-[#e6dfd5] rounded-[2.5rem] p-12 md:p-16 text-center shadow-2xl shadow-furnworld-gold/10 border border-white/50">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-furnworld-dark mb-2">
                    Subscribe to our newsletter and
                </h2>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-furnworld-dark mb-10">
                    grab <span className="text-furnworld-gold opacity-100">30% Off</span>
                </h2>

                <form className="max-w-md mx-auto relative flex items-center">
                    <input
                        type="email"
                        placeholder="Your Email..."
                        className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-furnworld-gold text-sm text-furnworld-brown shadow-inner bg-white/80 backdrop-blur-sm"
                    />
                    <button
                        type="button"
                        className="absolute right-2 top-2 bottom-2 px-8 bg-furnworld-gold text-white rounded-full font-medium text-sm hover:bg-furnworld-brown transition-colors shadow-md"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
