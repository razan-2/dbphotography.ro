import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Camera, Briefcase, Mail } from 'lucide-react'

const menuItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/despre-mine', label: 'Despre mine', icon: User },
  { href: '/portfolio', label: 'Portfolio', icon: Camera },
  { href: '/servicii', label: 'Servicii', icon: Briefcase },
  { href: '/contact', label: 'Contact', icon: Mail },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const sidebar = {
    open: { 
      x: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 30,
        staggerChildren: 0.05,
        delayChildren: 0.2
      } 
    },
    closed: { 
      x: '-100%', 
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1
      } 
    },
  }

  const mobileMenu = {
    open: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 30,
        staggerChildren: 0.05,
        delayChildren: 0.2
      } 
    },
    closed: { 
      opacity: 0, 
      y: '-100%', 
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1
      } 
    },
  }

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 20 },
  }

  return (
    <>
      <motion.button
        onClick={toggleMenu}
        className={`fixed z-50 p-3 m-4 bg-dark text-gold hover:bg-gold hover:text-dark transition-all duration-300 rounded-full shadow-lg ${
          isMobile ? 'top-4 right-4' : 'top-4 left-4'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={isMobile ? mobileMenu : sidebar}
            className={`fixed z-40 bg-dark-light text-white ${
              isMobile
                ? 'top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center'
                : 'top-0 left-0 bottom-0 w-72 p-8'
            }`}
          >
            <motion.div 
              className="mb-12 mt-16 flex justify-center"
              variants={itemVariants}
            >
              <img src="/logo.png" alt="DB Photography Logo" width={180} height={60} className="rounded-lg shadow-md" />
            </motion.div>
            <ul className={`space-y-6 ${isMobile ? 'text-center' : ''}`}>
              {menuItems.map((item) => (
                <motion.li key={item.href} variants={itemVariants}>
                  <Link
                    to={item.href}
                    className={`text-xl hover:text-gold transition-colors flex items-center ${
                      pathname === item.href ? 'text-gold font-bold' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="mr-2" size={20} />
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div 
              className="absolute bottom-8 left-0 right-0 text-center text-sm text-gray-400"
              variants={itemVariants}
            >
              &copy; {new Date().getFullYear()} DB Photography
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

