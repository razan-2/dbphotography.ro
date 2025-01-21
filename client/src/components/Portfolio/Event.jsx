import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Event({ name, photos }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const containerRef = useRef(null)

  // co

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, photos?.length])

  const handleManualNavigation = (direction) => {
    setIsAutoPlaying(false)
    if (direction === 'prev') {
      setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
    } else {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length)
    }
  }

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, scale }}
      className="my-16 p-8 bg-dark-light rounded-lg shadow-xl w-full md:w-[90vw]"
    >
      <h2 className="text-3xl font-bold text-gold mb-6">{name}</h2>
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <img
          src={`http://localhost:5000${photos[currentPhotoIndex]}`}
          alt={`Photo from ${name}`}
          className="transition-opacity duration-500 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <button
          onClick={() => handleManualNavigation('prev')}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
          aria-label="Previous photo"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => handleManualNavigation('next')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
          aria-label="Next photo"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="mt-4 flex justify-center">
        {photos.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === currentPhotoIndex ? 'bg-gold' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </motion.div>
  )
}

