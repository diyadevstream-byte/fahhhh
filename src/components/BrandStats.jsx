import React from 'react';

const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Happy Customers", value: "50k+" },
    { label: "Store Locations", value: "24" },
    { label: "Award Wins", value: "12" }
];

const BrandStats = () => {
    return (
        <section className="py-20 px-4 md:px-16 bg-furnworld-dark text-white" data-scroll-section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col gap-2">
                        <span className="text-5xl md:text-7xl font-serif text-furnworld-gold">{stat.value}</span>
                        <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BrandStats;
