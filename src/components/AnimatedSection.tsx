// src/components/AnimatedSection.tsx
"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id: string;
  className?: string; // Для дополнительных классов Tailwind
  backgroundColor?: string; // Для установки фона секции
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = '',
  backgroundColor = 'bg-primary' // Фон по умолчанию
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // Анимация происходит, когда секция входит и выходит из viewport
    // offset: ["start center", "end center"] // Альтернатива: анимация, когда центр секции проходит центр viewport
  });

  // Эффект "погружения": секция увеличивается и становится полностью видимой, когда она в центре
  // и уменьшается и становится прозрачнее по краям viewport
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  // const y = useTransform(scrollYProgress, [0, 1], ['10vh', '-10vh']); // Легкий параллакс по Y

  // Вариант для более выраженного "въезда":
  // const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);
  // const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  // const z = useTransform(scrollYProgress, [0, 0.5, 1], [-300, 0, -300]); // Если хотим эффект 3D

  return (
    <section id={id} ref={ref} className={`relative min-h-screen w-full overflow-hidden ${backgroundColor} ${className}`}>
      <motion.div
        style={{
          scale,
          opacity,
          // y, // Раскомментировать для параллакса по Y
          // perspective: '1000px', // Нужно для z-transform, если используется
          // transform: `translateZ(${z}px)` // Если используем z
        }}
        className="h-full w-full flex flex-col items-center justify-center p-8 sm:p-16 lg:p-24"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default AnimatedSection;