import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import img1 from './assets/timeline/1.jpg';
import img2 from './assets/timeline/2.jpg';
import img3 from './assets/timeline/3.jpg';

const timelineData = [
  {
    id: 1,
    section: "How I Started?",
    year: "2015",
    content: "Discovered my passion for photography during a trip to the mountains. What started as a hobby quickly became my life's calling. Armed with my first DSLR camera, I began capturing moments that told stories.",
    image: img1
  },
  {
    id: 2,
    section: "How I Developed?",
    year: "2018",
    content: "Invested in professional equipment and formal training. Specialized in portrait and landscape photography. Started working with local clients and building a portfolio that reflected my unique vision and style.",
    image: img2
  },
  {
    id: 3,
    section: "How It's Going?",
    year: "2023",
    content: "Now an established photographer with a signature style. Working with major clients while maintaining my artistic integrity. Each shoot is an opportunity to create something extraordinary.",
    image: img3
  }
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="bg-dark min-h-screen py-16 px-4">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-gold text-center mb-16">My Photographic Journey</h2>
        
        <div className="relative">
          {/* Curved Timeline SVG */}
          <svg className="absolute left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <motion.path
              d="M50,0 L50,100"
              stroke="#D4AF37"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>

          {/* Timeline items */}
          <div className="space-y-48 md:space-y-64">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold rounded-full border-4 border-dark z-10" />
                
                {/* Content */}
                <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:col-start-2 md:pl-16'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    className="bg-dark-light p-6 rounded-lg shadow-lg border border-gold/20 hover:border-gold/50 transition-colors duration-300"
                  >
                    <h3 className="text-gold text-2xl font-semibold mb-2">{item.section}</h3>
                    <div className="text-gray-400 text-sm mb-4">{item.year}</div>
                    <p className="text-gray-400">{item.content}</p>
                  </motion.div>
                </div>

                {/* Image */}
                <motion.div
                  className={`md:col-span-1 ${index % 2 === 0 ? 'md:col-start-2 md:pl-16' : 'md:pr-16'}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                >
                  <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={item.image}
                      alt={`Journey milestone: ${item.section}`}
                      className="transition-transform duration-300 hover:scale-110"
                      // height={300}
                      // width={400}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-0 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

