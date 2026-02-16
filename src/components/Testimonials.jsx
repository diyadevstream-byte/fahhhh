import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BsArrowRight } from 'react-icons/bs';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: "Serhiy Hipskyy",
        role: "Project Manager",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        content: "The most common variation of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
    },
    {
        name: "Luisa Pooda",
        role: "Interior Designer",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
    },
    {
        name: "Mikel Hops",
        role: "Architect",
        image: "https://randomuser.me/api/portraits/men/85.jpg",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    }
];

const Testimonials = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(sectionRef.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%"
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4 md:px-16 bg-[#fcfcfc]" data-scroll-section>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-primary max-w-lg leading-tight">
                    Which is what our Popular Customers are saying
                </h2>
                <div className="hidden md:block max-w-xs text-right">
                    <p className="text-gray-400 text-sm mb-6">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>
                    <div className="flex justify-end gap-2">
                        <button className="w-10 h-10 rounded-full bg-[#a88e68] text-white flex items-center justify-center hover:bg-[#8f7855] transition-colors">
                            <BsArrowRight />
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((item, index) => (
                    <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <h4 className="font-bold text-primary">{item.name}</h4>
                                <div className="flex text-yellow-400 text-xs gap-1">
                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            "{item.content}"
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
