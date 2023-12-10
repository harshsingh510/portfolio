import React, { useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom";
import '../styles/App.css';
import { motion } from "framer-motion";
import HomePage from "../pages/HomePage";
import {} from "react-icons/fa";
import {} from "react-icons/bs";

function App() {
  // States
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, []);

  const loadText = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition:{
        duration: 1
      }
    }
  }


  return (
    loading ? 
    <div className="loader">
      <div className="svg-wrapper">
        <svg  xmlns="http://www.w3.org/2000/svg" >
          <rect className="shape"  />
        </svg>        
        <motion.p variants={loadText} initial='hidden' animate='visible' className="text">Harsh Singh</motion.p>
      </div>
    </div>
    :
    <div className="App">
      <Router>
        <HomePage />
      </Router>
    </div>
  );
}

export default App;