// src/components/ServicesSectionContent.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard'; 
import { servicesData } from '@/data/services';


const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" }}
};

const introTextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.2 }}
};

const ServicesSectionContent = () => {
  return (
    <div className="container mx-auto">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-accent text-center mb-6"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Unsere Leistungen
      </motion.h2>
      <motion.p 
        className="text-lg md:text-xl text-mediumText max-w-2xl text-center mx-auto mb-12 sm:mb-16"
        variants={introTextVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Von der ersten Idee bis zur finalen Umsetzung – wir bieten ein umfassendes Leistungsspektrum für Ihren perfekten Messeauftritt.
      </motion.p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {servicesData.map((service, index) => ( 
          <ServiceCard
            key={service.title}
            icon={service.icon} 
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSectionContent;