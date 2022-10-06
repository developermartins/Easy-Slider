import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import './App.css';
import images from './img';

const App = () => {

  const [width, setWidth] = useState(0);
  const slider = useRef();

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);

  return (
    <div className="app">
       <h1>Slider</h1>
        <motion.div ref={ slider } className='slider' whileTap={{ cursor: "grabbing" }}>
          <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-slider'>
            { images.map((image) => (
              <motion.div className='slider-item' key={ image }>
                <img src={ image } alt="image" />
              </motion.div>
            )) }
          </motion.div>
        </motion.div>
    </div>
  );
};

export default App;
