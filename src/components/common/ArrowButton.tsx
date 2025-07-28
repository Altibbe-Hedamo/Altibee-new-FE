import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ArrowButtonProps {
  href?: string;
  children: React.ReactNode;
  classname?: string;
}

export default function ArrowButton({
  href = '#',
  children,
  classname = '',
}: ArrowButtonProps) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      whileHover={{ scale: 1.05 }}
      href={href}
      className={`btn-mono inline-flex items-center ${classname}`}
    >
      <motion.span
        className="relative flex items-center"
        initial={false}
        animate={{ flexDirection: 'row-reverse' }}
        whileHover={{ flexDirection: 'row' }}
        transition={{ type: 'spring', stiffness: 100, damping: 40 }}
      >
        <ArrowRightIcon className="h-5 w-5" />
        <span className="mx-2">{children}</span>
      </motion.span>
    </motion.a>
  );
}