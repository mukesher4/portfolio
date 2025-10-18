// CircularLoader.tsx
import { motion } from 'framer-motion';

export default function CircularLoader({ duration }: { duration: number }) {
  const radius = 12;
  const circumference = 2 * Math.PI * radius;

  return (
    <motion.svg
      width="20"
      height="20"
      viewBox="0 0 32 32"
      className="transform -rotate-90" // Rotates to start drawing from the top
    >
      {/* Background track circle */}
      <circle
        cx="16"
        cy="16"
        r={radius}
        stroke="#aaaaaa"
        strokeOpacity="0.2"
        strokeWidth="3"
        fill="transparent"
      />
      {/* Foreground drawing circle */}
      <motion.circle
        cx="16"
        cy="16"
        r={radius}
        stroke="#aaaaaa"
        strokeWidth="5"
        fill="transparent"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: duration / 1000, ease: 'linear' }}
      />
    </motion.svg>
  );
}