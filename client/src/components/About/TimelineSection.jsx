import { motion } from 'framer-motion'

const timelineEvents = [
  { year: "2010", title: "Started Photography", description: "Began my journey in photography with my first DSLR camera." },
  { year: "2015", title: "First Major Exhibition", description: "Hosted my first solo exhibition in New York City." },
  { year: "2023", title: "International Recognition", description: "Won the prestigious World Photography Organisation award." }
]

export function TimelineSection() {
  return (
    <section className="py-16 px-4 bg-dark">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-gold text-center"
        >
          My Journey
        </motion.h2>
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-8`}
            >
              <div className="w-1/2 px-4">
                <div className={`bg-dark-light p-4 rounded-lg shadow-lg hover:shadow-gold/10 transition-all duration-300 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-semibold mb-2 text-gold">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
              <div className="w-1/2 flex justify-center">
                <div className="relative">
                  <div className="w-4 h-4 bg-gold rounded-full mt-2" style={{ boxShadow: '0 0 0 4px rgba(212, 175, 55, 0.2)' }}></div>
                  <div className="absolute top-0 -ml-2 mt-8 text-gold font-bold">{event.year}</div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gold"></div>
        </div>
      </div>
    </section>
  )
}

