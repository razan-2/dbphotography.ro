import { useState } from "react";
import { motion } from "framer-motion";
import { LogOut, Key, LucideHome } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminPanel() {
  const [name, setName] = useState("David Boca");
  const [email, setEmail] = useState("david@dbphotography.com");
  const { logout } = useAuth();
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-dark p-8 text-gray-400">
      <motion.div
        className="max-w-2xl mx-auto space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold text-gold"
          variants={itemVariants}
        >
          Admin Panel
        </motion.h1>

        <motion.div className="space-y-4" variants={itemVariants}>
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-dark-light text-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-dark-light text-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
        </motion.div>

        <motion.div className="flex space-x-4" variants={itemVariants}>
          <button className="flex items-center space-x-2 bg-dark-light hover:bg-gold hover:text-dark">
            <Key size={16} />
            <span>Change Password</span>
          </button>
          <button
            className="flex items-center space-x-2 bg-dark-light hover:bg-gold hover:text-dark"
            onClick={logout}
          >
            <LogOut size={16} />
            <span>Log Out</span>
          </button>
          <button
            className="flex items-center space-x-2 bg-dark-light hover:bg-gold hover:text-dark"
            onClick={() => {
              navigate("/");
            }}
          >
            <LucideHome size={16} />
            <span>Home</span>
          </button>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold text-gold mb-4">Admin Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              // onClick={}
              className="bg-dark-light hover:bg-gold hover:text-dark"
            >
              Manage Gallery
            </button>
            <button
              // onClick={}
              className="bg-dark-light hover:bg-gold hover:text-dark"
            >
              Edit Services
            </button>
            <button
              // onClick={}
              className="bg-dark-light hover:bg-gold hover:text-dark"
            >
              View Bookings
            </button>
            <button
              // onClick={}
              className="bg-dark-light hover:bg-gold hover:text-dark"
            >
              Update Profile
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
