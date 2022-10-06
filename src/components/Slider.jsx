import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import './Slider.css';
import images from '../data/img';

const Slider = () => {

    const [width, setWidth] = useState(0);
    const slider = useRef();
  
    useEffect(() => {
      setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    }, []);

  return (
    <motion.div ref={ slider } className='slider' whileTap={{ cursor: "grabbing" }}>
        <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-slider'>
            { images.map((image) => (
              <motion.div className='slider-item' key={ image }>
                <img src={ image } alt="image" />
              </motion.div>
            )) }
        </motion.div>
    </motion.div>
  );
};

export default Slider;
