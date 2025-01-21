import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'

const events = [
  { name: "New York Fashion Week", date: "September 2023", image: img1 },
  { name: "Paris Photo", date: "November 2023", image: img2 },
  { name: "National Geographic Photo Contest", date: "December 2023", image: img3 }
]

export function EventsSection() {
  return (
    <section className="py-16 px-4 bg-dark-light">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-gold text-center"
        >
          Events I've Captured
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-dark rounded-lg overflow-hidden shadow-lg hover:shadow-gold/10 transition-all duration-300"
            >
              <div className="relative h-48">
                <img src={event.image} alt={event.name} height={400} width={600} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gold">{event.name}</h3>
                <p className="mb-4 text-gray-300">{event.date}</p>
                <Link href="/portfolio" className="inline-block px-4 py-2 bg-gradient-to-r from-gold to-gold/80 text-dark font-semibold rounded-md hover:from-gold/80 hover:to-gold transition-all duration-300 shadow-md hover:shadow-gold/20">
                  View in Portfolio
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

