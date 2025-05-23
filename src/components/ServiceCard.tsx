// src/components/ServiceCard.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  icon: IconType; 
  title: string;
  description: string;
  index: number; 
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15, // Небольшая задержка для каскадного эффекта
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: IconComponent, title, description, index }) => {
  return (
    <motion.div
      className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-accent/40 transition-all duration-300 flex flex-col items-center text-center h-full border border-secondary hover:border-accent"
      variants={cardVariants}
      custom={index} 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} 
      whileHover={{ 
        y: -8, 
        boxShadow: "0px 10px 20px rgba(74, 144, 226, 0.3)",
        transition: { type: 'spring', stiffness: 300, duration: 0.3 }
      }}
    >
      <div className="text-accent mb-4 text-4xl">
        <IconComponent size={48} /> 
      </div>
      <h3 className="text-xl font-semibold text-lightText mb-3">{title}</h3>
      <p className="text-mediumText text-sm leading-relaxed flex-grow">{description}</p>
       <motion.button 
        className="mt-4 bg-accent/20 text-accent px-4 py-2 rounded hover:bg-accent hover:text-white transition-colors text-xs"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Mehr erfahren
      </motion.button> 
    </motion.div>
  );
};

export default ServiceCard;