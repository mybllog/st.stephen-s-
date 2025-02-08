import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import image1 from './assets/img/WhatsApp_Image_2024-10-20_at_09.03.19_6578ea68-removebg-preview (1).png'
import { motion, useInView } from 'framer-motion';
// Loader Component
const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#cc7477] fixed top-0 left-0 w-full z-50">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-[#ec3237] rounded-full animate-spin"></div>
      <p className="mt-4 text-lg text-gray-600"></p>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(() => {
    // Simulate a delay for the loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (

 <Router>
  <motion.div
    ref={ref}
    initial={{opacity:0}}
    animate={{opacity:isInView?1:5}}
    transition={{duration:0.5}}
    //whileHover={{scale:1.2}}
    //drag
    //whileTap={{scale:0.2}}
  //dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
    >
  {loading ? (
        <>
        <img src={image1} alt='logo' /><Loader />
        </>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </motion.div>
    
    </Router>
  
   
  );
}

export default App;
