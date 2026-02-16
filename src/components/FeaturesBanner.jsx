import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BsTruck, BsShieldCheck, BsCurrencyDollar } from 'react-icons/bs';

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: <BsTruck size={32} />,
        title: "Free Worldwide Shipping",
        desc: "Free shipping to all over the world with many specials only for our dear customers"
    },
    {
        icon: <BsShieldCheck size={32} />,
        title: "Best Quality Product",
        desc: "Many customers entrust various furniture needs to us, and customer satisfaction is our pride."
    },
    {
        icon: <BsCurrencyDollar size={32} />,
        title: "Super Affordable Price",
        desc: "You can get various furniture with the highest quality at an affordable price"
    }
];

const FeaturesBanner = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(sectionRef.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%"
                }
            }
        );
    }, []);

    return (
        <section className="py-20 px-4 md:px-16" data-scroll-section>
            <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex gap-6 items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 rounded-full border border-gray-200 flex flex-shrink-0 items-center justify-center text-furnworld-text">
                            {feature.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2 text-primary">{feature.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesBanner;
