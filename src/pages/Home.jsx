import React from 'react';
import Hero from '../components/Hero';
import FeaturesBanner from '../components/FeaturesBanner';
import CollectionShowcase from '../components/CollectionShowcase';
import Featured from '../components/Featured';
import VisualGallery from '../components/VisualGallery';
import PromotionalBanner from '../components/PromotionalBanner';
import BrandStats from '../components/BrandStats';
import Interior from '../components/Interior';
import Showroom3D from '../components/Showroom3D';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturesBanner />
            <CollectionShowcase />
            <Featured />
            <VisualGallery />
            <PromotionalBanner />
            <BrandStats />
            <Interior />
            <Showroom3D />
            <Testimonials />
            <Newsletter />
        </>
    );
};

export default Home;
