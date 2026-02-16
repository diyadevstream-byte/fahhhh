import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BsEnvelope, BsLock, BsArrowRight } from 'react-icons/bs';
import GeometricBackground from '../components/3d/GeometricBackground';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.password) newErrors.password = 'Password is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        // Simulate successful login
        console.log('Logging in:', formData);
        navigate('/');
    };

    return (
        <div className="relative min-h-screen pt-32 px-4 md:px-16 bg-[#0a101e] flex items-center justify-center overflow-hidden" data-scroll-section>
            <GeometricBackground theme="dark" />

            <div className="relative z-10 w-full max-w-md" data-scroll data-scroll-speed="1">
                <div className="bg-white/5 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/10 relative overflow-hidden group">
                    {/* Subtle Gradient Glow */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-furnworld-gold/10 blur-[100px] rounded-full group-hover:bg-furnworld-gold/20 transition-all duration-700"></div>

                    <div className="relative z-10">
                        <h1 className="text-4xl font-bold font-serif mb-2 text-white text-center">Welcome Back</h1>
                        <p className="text-gray-400 text-center mb-10 text-sm">Please enter your details</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-furnworld-gold tracking-widest uppercase ml-1">Email Address</label>
                                <div className="relative group">
                                    <BsEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-furnworld-gold transition-colors" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full pl-12 pr-4 py-4 rounded-2xl border ${errors.email ? 'border-red-500/50' : 'border-white/10'} bg-white/5 text-white focus:ring-2 focus:ring-furnworld-gold focus:border-transparent outline-none transition-all placeholder:text-gray-600`}
                                        placeholder="Enter your email"
                                    />
                                </div>
                                {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-furnworld-gold tracking-widest uppercase ml-1">Password</label>
                                <div className="relative group">
                                    <BsLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-furnworld-gold transition-colors" />
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={`w-full pl-12 pr-4 py-4 rounded-2xl border ${errors.password ? 'border-red-500/50' : 'border-white/10'} bg-white/5 text-white focus:ring-2 focus:ring-furnworld-gold focus:border-transparent outline-none transition-all placeholder:text-gray-600`}
                                        placeholder="Enter your password"
                                    />
                                </div>
                                {errors.password && <p className="text-red-500 text-xs ml-1">{errors.password}</p>}
                            </div>

                            <div className="pt-4">
                                <button className="w-full py-5 bg-furnworld-gold text-white rounded-2xl font-bold hover:bg-furnworld-brown transition-all transform hover:scale-[1.02] shadow-xl hover:shadow-furnworld-gold/20 flex items-center justify-center gap-2 group">
                                    Continue
                                    <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>

                        <div className="mt-10 pt-8 border-t border-white/5 text-center">
                            <p className="text-gray-400 text-sm">
                                Don't have an account?
                                <Link to="/register" className="ml-2 font-bold text-furnworld-gold hover:text-white transition-colors underline-offset-4 hover:underline">
                                    Create one
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
