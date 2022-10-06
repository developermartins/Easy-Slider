import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import './App.css';
import images from './img';

const App = () => {
  return (
    <div className="app">
       <h1>Slider</h1>
        <motion.div className='slider'>
          <motion.div className='inner-slider'>
            { images.map((image) => (
              <motion.div className='slider-item'>
                <img src={ image } alt="image" />
              </motion.div>
            )) }
          </motion.div>
        </motion.div>
    </div>
  );
};

export default App;
