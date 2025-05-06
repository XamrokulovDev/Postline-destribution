'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

const MagneticButton = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);

  const x = useSpring(motionX, { stiffness: 80, damping: 12 });
  const y = useSpring(motionY, { stiffness: 80, damping: 12 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const bounds = btnRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const offsetX = e.clientX - bounds.left - bounds.width / 2;
    const offsetY = e.clientY - bounds.top - bounds.height / 2;

    motionX.set(Math.max(Math.min(offsetX, 10), -10));
    motionY.set(Math.max(Math.min(offsetY, 10), -10));
  };

  const handleMouseLeave = () => {
    motionX.set(0);
    motionY.set(0);
  };

  return (
    <motion.button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x,
        y,
      }}
      className="btn-header relative group overflow-hidden rounded-xl uppercase border-2 border-[#054f2be3] py-7 px-9 bg-transparent "
    >
      <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-[#056839] transition-transform duration-200 ease-in-out z-0"></div>
      <p className="relative z-10 text-[#056839] group-hover:text-white text-[15px] transition-colors duration-300">
        Получить прайс-лист
      </p>
    </motion.button>
  );
};

export default MagneticButton;