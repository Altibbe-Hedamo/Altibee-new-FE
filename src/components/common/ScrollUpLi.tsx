// ScrollUpLi.tsx
import { motion } from 'framer-motion';

export default function ScrollUpLi({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.li
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}

      // gentle vertical bounce on hover
      whileHover={{
        y: [0, -6, 0],
        transition: { duration: 0.35, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
      }}
      className="list-disc list-inside"
    >
      {children}
    </motion.li>
  );
}