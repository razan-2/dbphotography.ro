import React, { useEffect, useState } from 'react'
import Event from './Event';
import axios from 'axios';

const EventsSection = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/events')
            .then(response => setEvents(response.data))
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    console.log(events);

    return (  
        <main className='flex flex-col justify-center items-center'>
            {events.map((event, index) => (
                <Event name={event?.name} photos={event?.pictures} key={index} />
            ))}
        </main>
    );
}
 
export default EventsSection;