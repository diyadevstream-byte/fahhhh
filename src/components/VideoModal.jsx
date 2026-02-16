import React, { useEffect } from 'react';
import { BsX } from 'react-icons/bs';
import { gsap } from 'gsap';

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            gsap.fromTo(".video-modal-content",
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }
            );
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4" onClick={onClose}>
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white hover:text-furnworld-gold transition-colors z-50"
            >
                <BsX size={48} />
            </button>

            {/* Modal Content */}
            <div
                className="video-modal-content relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                <video
                    src={videoUrl}
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    loop
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default VideoModal;
