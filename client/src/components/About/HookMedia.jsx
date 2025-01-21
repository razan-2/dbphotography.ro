import { motion } from 'framer-motion'
import { Instagram, Facebook, TwitterIcon as TikTok } from 'lucide-react'

export function HookMediaSection() {
  return (
    <section className="py-16 px-4 bg-dark-light">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-gold text-center"
        >
          Hook Media
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-lg">Hook Media is our creative agency specializing in visual storytelling across various platforms. Founded in 2020, we've been helping brands and individuals create compelling content that resonates with their audience.</p>
            <p className="mb-8 text-lg">Follow us on social media for daily inspiration and behind-the-scenes content:</p>
            <div className="flex space-x-6 mb-8">
              <a href="#" className="text-gold hover:text-gold transition-colors hover:scale-110 transform duration-300">
                <Instagram size={32} />
              </a>
              <a href="#" className="text-gold hover:text-gold transition-colors hover:scale-110 transform duration-300">
                <Facebook size={32} />
              </a>
              <a href="#" className="text-gold hover:text-gold transition-colors hover:scale-110 transform duration-300">
                <TikTok size={32} />
              </a>
            </div>
            <p className="text-lg font-semibold text-gold">Founded: January 2020</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {[1, 2].map((i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={`/placeholder.svg?height=400&width=400&text=Hook+Media+${i}`}
                  alt={`Hook Media Work ${i}`}
                  className="transition-transform duration-300 hover:scale-110 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

