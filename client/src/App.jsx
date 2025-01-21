import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from "./components/Account/AdminPanel";
import Login from "./components/Account/Login";
import { useAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import { Footer } from "./components/Footer";

function App() {
  const { user } = useAuth();

  return (
    <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/despre-mine" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/admin" element={user ? <AdminPanel /> : <Navigate to='/login' />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
