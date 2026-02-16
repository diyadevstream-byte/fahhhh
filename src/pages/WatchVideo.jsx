import React from 'react';
import { BsPlayCircleFill } from 'react-icons/bs';
import AmbientOrbs from '../components/3d/AmbientOrbs';

const WatchVideo = () => {
    return (
        <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden" data-scroll-section>
            <AmbientOrbs theme="dark" />

            <div className="relative z-10 text-center text-white" data-scroll data-scroll-speed="1">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm animate-pulse cursor-pointer hover:bg-white/20 transition-all border border-white/20">
                    <BsPlayCircleFill className="text-6xl text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 tracking-wide">The Making of Chair-225</h1>
                <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
                    Witness the craftsmanship, dedication, and precision that goes into creating every single piece of our collection.
                </p>
            </div>
        </div>
    );
};

export default WatchVideo;
