// ScrollAnimatedText Component - Wrapper for text with scroll animations
import React from 'react';
import { useScrollAnimation, useScrollAnimationRight, useScrollAnimationUp } from '../../hooks/useScrollAnimation';

interface ScrollAnimatedTextProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up';
  delay?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

export default function ScrollAnimatedText({ 
  children, 
  direction = 'left', 
  delay = 0, 
  className = '', 
  as = 'div' 
}: ScrollAnimatedTextProps) {
  const leftRef = useScrollAnimation({ delay });
  const rightRef = useScrollAnimationRight({ delay });
  const upRef = useScrollAnimationUp({ delay });
  
  const ref = direction === 'left' ? leftRef : direction === 'right' ? rightRef : upRef;
  
  const Tag = as;
  
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}