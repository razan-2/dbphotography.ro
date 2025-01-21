import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Instagram, Facebook, Phone, Mail } from 'lucide-react'
import img1 from './assets/img1.jpg';
import img2 from './assets/305853-2768959652.jpg';
import img3 from './assets/Guest-with-camera-gear-on-safari-in-Botswana-Pangolin-Photo-Safaris-scaled-1108625286.webp'
import img4 from './assets/maxresdefault-2648828189.jpg'

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
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
    <div ref={ref} className="relative min-h-screen overflow-hidden bg-dark py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={stagger}
          className="text-white space-y-6"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-500"
          >
            David Boca
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300">
            Photographer • Videographer • Partner in Hook Media
          </motion.p>
          <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl">
            Capturing life's precious moments with an artistic eye. From weddings to corporate events, 
            I bring a unique blend of creativity and professionalism to every shoot.
          </motion.p>
          <motion.button 
            variants={fadeInUp}
            className="bg-gold text-dark px-8 py-3 rounded-full text-lg font-semibold hover:bg-dark hover:text-gold transition-colors duration-300 border-2 border-gold"
          >
            Book Now
          </motion.button>
          <motion.div variants={fadeInUp} className="flex space-x-6">
            {[Instagram, Facebook, Phone, Mail].map((Icon, index) => (
              <a 
                key={index}
                href="#" 
                className="text-white hover:text-gold transition-colors duration-300"
              >
                <Icon size={24} />
              </a>
            ))}
          </motion.div>
        </motion.div>
        
        <div className="relative h-[700px]">
          <motion.div 
            style={{ y: y2 }} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-10"
          >
            <img
              src={img1}
              width={500}
              height={700}
              alt="David Boca Photography 1"
              className="rounded-lg shadow-2xl object-cover overflow-hidden"
            />
          </motion.div>
          <motion.div 
            style={{ y: y3 }} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -bottom-64 -left-12 w-2/3 h-2/3 z-20"
          >
            <img
              src={img2}
              width={300}
              height={400}
              alt="David Boca Photography 2"
              className="rounded-lg shadow-2xl object-cover"
            />
          </motion.div>
          <motion.div 
            style={{ y: y1 }} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -top-4 -right-12 w-1/2 h-1/2 z-30"
          >
            <img
              src={img3}
              width={200}
              height={300}
              alt="David Boca Photography 3"
              className="rounded-lg shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        style={{ y: y1 }} 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 hidden lg:block"
      >
        <div className="space-y-6">
          {['Instagram', 'Facebook', 'Phone', 'Email'].map((item, index) => (
            <div key={index} className="w-px h-20 bg-gradient-to-b from-gold to-yellow-500 mx-auto" />
          ))}
        </div>
      </motion.div>

      <motion.div 
        style={{ y: y2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 right-0 w-1/3 h-1/3 z-0"
      >
        <img
          src={img4}
          width={400}
          height={300}
          alt="Background Texture"
          className='object-cover'
        />
      </motion.div>
    </div>
  )
}

