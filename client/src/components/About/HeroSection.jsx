import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark bg-opacity-70"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gold bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold/60"
        >
          DB Photography
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl mb-8"
        >
          Capturing moments, creating memories. With over a decade of experience, I specialize in portrait, event, and landscape photography that tells your unique story.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center space-x-4 mb-12"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-gold to-gold/80 text-dark font-semibold rounded-md hover:from-gold/80 hover:to-gold transition-all duration-300 shadow-lg hover:shadow-gold/20"
          >
            Get in Touch
          </a>
          <a
            href="#portfolio"
            className="inline-block px-8 py-3 bg-white/10 text-white font-semibold rounded-md hover:bg-white/20 transition-all duration-300"
          >
            View Portfolio
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-3 gap-4"
        >
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={`/placeholder.svg?height=300&width=300&text=Photo${i}`}
                alt={`Sample Photo ${i}`}
                className="transition-transform duration-300 hover:scale-110 object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

