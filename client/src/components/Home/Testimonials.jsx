import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import img1 from './assets/testimonials/2.jpg'
import img2 from './assets/testimonials/1.jpeg'
import img3 from './assets/testimonials/3.jpg'

const testimonials = [
  {
    id: 1,
    name: 'Emma Thompson',
    function: 'Wedding Planner',
    image: img1,
    quote: "David's photography captured the essence of our wedding day perfectly. His attention to detail and artistic vision created memories we'll cherish forever."
  },
  {
    id: 2,
    name: 'Michael Chen',
    function: 'Corporate Event Manager',
    image: img2,
    quote: 'Working with DB Photography for our corporate events has been a game-changer. The quality and professionalism are unmatched.'
  },
  {
    id: 3,
    name: 'Sophia Rodriguez',
    function: 'Fashion Designer',
    image: img3,
    quote: 'David has an incredible eye for fashion photography. He brings my designs to life in ways I never imagined possible.'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextTestimonial, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, nextTestimonial])

  const handleManualNavigation = (direction) => {
    setIsAutoPlaying(false);
    if (direction === 'prev') {
      prevTestimonial();
    } else {
      nextTestimonial();
    }
  };

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-dark py-16"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gold text-center mb-12">What Our Clients Say</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={100}
                height={100}
                className="rounded-full mb-6"
              />
              <p className="text-gray-400 text-lg mb-6 italic">"{testimonials[currentIndex].quote}"</p>
              <p className="text-gold font-semibold">{testimonials[currentIndex].name}</p>
              <p className="text-gray-400">{testimonials[currentIndex].function}</p>
            </motion.div>
          </AnimatePresence>
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => handleManualNavigation('prev')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gold hover:text-gray-400 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => handleManualNavigation('next')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gold hover:text-gray-400 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

