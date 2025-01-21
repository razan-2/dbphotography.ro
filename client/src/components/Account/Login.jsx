import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from'react-router-dom'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(email, password);
      navigate('/admin');
    } catch (error) {
      console.error(error);
      setError('Failed to login. Please try again.');
    }
  }

  return (
    <div className="min-h-screen bg-dark text-white flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 text-gray-400 hover:text-gold transition-colors"
        >
          <ArrowLeft size={24} />
        </motion.button>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold mb-8"
        >
          Admin
        </motion.h1>
        
        <form onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6 relative"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="w-full bg-transparent border-b-2 border-gray-700 focus:border-gold py-2 outline-none transition-colors peer text-white"
              placeholder=" "
              required
            />
            <label 
              htmlFor="email"
              className="absolute left-0 top-2 text-gray-400 text-base transition-all peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-sm"
            >
              Email
            </label>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-6 relative"
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="w-full bg-transparent border-b-2 border-gray-700 focus:border-gold py-2 outline-none transition-colors peer text-white"
              placeholder=" "
              required
            />
            <label 
              htmlFor="password"
              className="absolute left-0 top-2 text-gray-400 text-base transition-all peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-sm"
            >
              Password
            </label>
          </motion.div>
          
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 mb-4"
            >
              {error}
            </motion.p>
          )}
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            type="submit"
            className="w-full bg-dark-light hover:bg-gold hover:text-dark text-white py-3 rounded-md transition-colors"
          >
            Log in
          </motion.button>
        </form>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-center text-gray-400"
        >
        </motion.p>
      </motion.div>
    </div>
  )
}