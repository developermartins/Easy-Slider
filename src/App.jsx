import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import './App.css';

const App = () => {
  return (
    <div className="app">
       <h1>Slider</h1>
        <motion.div className='slider'>
          <motion.div className='inner-slider'></motion.div>
        </motion.div>
    </div>
  );
};

export default App;
