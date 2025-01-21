import React from 'react'
import HeroSection from '../components/Home/HeroSection';
import Testimonials from '../components/Home/Testimonials';
import Timeline from '../components/Home/Timeline';

const Home = () => {
    return (
        <main className='bg-dark'>
            <HeroSection />
            <Testimonials />
            <Timeline />
        </main>
    )
}

export default Home;