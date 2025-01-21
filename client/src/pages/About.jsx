import { HeroSection } from '../components/About/HeroSection';
import { EventsSection } from '../components/About/EventsSection';
import { TimelineSection } from '../components/About/TimelineSection';
import { HookMediaSection } from '../components/About/HookMedia';


const About = () => {
    return (  
        <main className='bg-dark-light'>
            <HeroSection />
            <EventsSection />
            <TimelineSection />
            <HookMediaSection />
        </main>
    );
}
 
export default About;