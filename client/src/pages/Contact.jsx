import { motion } from 'framer-motion'
import { Phone, Mail, Instagram, Facebook, Calendar } from 'lucide-react'

export default function ContactPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-dark text-white py-20 px-4">
      <motion.div 
        initial="initial"
        animate="animate"
        variants={stagger}
        className="max-w-4xl mx-auto space-y-12"
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-500 mb-8"
        >
          Contact Me
        </motion.h1>

        <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactItem icon={Phone} title="Phone" content="+1 (234) 567-8901" href="tel:+12345678901" />
          <ContactItem icon={Mail} title="Email" content="david@example.com" href="mailto:david@example.com" />
          <ContactItem icon={Instagram} title="Instagram" content="@davidbocaphoto" href="https://instagram.com/davidbocaphoto" />
          <ContactItem icon={Facebook} title="Facebook" content="David Boca Photography" href="https://facebook.com/davidbocaphotography" />
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-dark-light p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold mb-4 text-gold">Upcoming Events</h2>
          <p className="text-gray-300 mb-4">You can find me at these upcoming events:</p>
          <ul className="space-y-4">
            <EventItem 
              date="July 15, 2023" 
              title="Summer Art Festival" 
              location="Central Park, New York"
            />
            <EventItem 
              date="August 5-7, 2023" 
              title="Wedding Expo" 
              location="Grand Hotel, Chicago"
            />
            <EventItem 
              date="September 20, 2023" 
              title="Fashion Week" 
              location="Milan, Italy"
            />
          </ul>
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center">
          <button className="bg-gold text-dark px-8 py-3 rounded-full text-lg font-semibold hover:bg-dark hover:text-gold transition-colors duration-300 border-2 border-gold">
            Book a Session
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

function ContactItem({ icon: Icon, title, content, href }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-4 p-4 bg-dark-light rounded-lg hover:bg-gold hover:text-dark transition-colors duration-300"
    >
      <Icon size={24} />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p>{content}</p>
      </div>
    </a>
  )
}

function EventItem({ date, title, location }) {
  return (
    <li className="flex items-start space-x-4">
      <Calendar size={24} className="text-gold mt-1" />
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-400">{date}</p>
        <p className="text-sm text-gray-400">{location}</p>
      </div>
    </li>
  )
}

