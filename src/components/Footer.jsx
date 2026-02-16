import React from 'react';
import { BsInstagram, BsFacebook, BsTwitter, BsPlayCircleFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="bg-[#0a101e] text-white py-16 px-4 md:px-16" data-scroll-section>
            <div className="flex flex-col md:flex-row justify-between items-start border-b border-gray-800 pb-12">
                <div className="mb-8 md:mb-0">
                    <div className="flex items-center gap-2 mb-6">
                        <BsPlayCircleFill className="text-white text-xl" />
                        <div className="text-xl font-bold tracking-tight">Furnworld</div>
                    </div>

                    <div className="flex gap-4 text-xs text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">Service</a>
                        <a href="#" className="hover:text-white transition-colors">Legal Notice</a>
                        <a href="#" className="hover:text-white transition-colors">Data Protection</a>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full md:w-auto text-sm text-gray-400">
                    <div>
                        <h4 className="text-white font-bold mb-4">Newsletter</h4>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="hover:text-white transition-colors">Enter Email Address</a>
                            <a href="#" className="hover:text-white transition-colors">Sign Up</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Contact</h4>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="hover:text-white transition-colors">Instagram</a>
                            <a href="#" className="hover:text-white transition-colors">Facebook</a>
                            <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Contact</h4>
                        <div className="flex flex-col gap-2">
                            <span>12 B Street Lorem</span>
                            <span>contact@email.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center md:text-left text-xs text-gray-600 flex justify-between">
                <span>© 2024 Furnworld. All rights reserved.</span>
                <div className="flex gap-4">
                    <BsInstagram />
                    <BsFacebook />
                    <BsTwitter />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
