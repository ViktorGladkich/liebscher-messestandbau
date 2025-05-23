// src/components/AboutSectionContent.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiUsers, FiAward, FiBriefcase } from 'react-icons/fi';

const featureVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const textBlockVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "circOut", delay: 0.2 } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, ease: "circOut", delay: 0.4 } }
};

const AboutSectionContent = () => {
  const features = [
    { icon: <FiAward size={36} className="text-accent mb-3" />, title: "Erfahrung & Expertise", description: "Über 15 Jahre Branchenerfahrung und hunderte erfolgreiche Projekte." },
    { icon: <FiUsers size={36} className="text-accent mb-3" />, title: "Kundenfokus", description: "Ihre Ziele stehen im Mittelpunkt unserer maßgeschneiderten Konzepte." },
    { icon: <FiBriefcase size={36} className="text-accent mb-3" />, title: "Full-Service", description: "Von der ersten Idee bis zum Abbau – alles aus einer Hand." },
  ];

  return (
    <div className="container mx-auto">
      <motion.h2 
        className="text-4xl sm:text-5xl font-bold text-accent text-center mb-12 sm:mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Über Uns: Ihre Vision, Unser Handwerk
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
        <motion.div
          variants={textBlockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl lg:text-3xl font-semibold text-lightText mb-4">Unsere Philosophie</h3>
          <p className="text-mediumText text-base lg:text-lg leading-relaxed mb-4">
            Bei Liebscher Messestandbau glauben wir, dass ein Messestand mehr ist als nur eine Struktur. Er ist eine Bühne für Ihre Marke, ein Ort der Begegnung und ein entscheidender Faktor für Ihren Messeerfolg. Seit über 15 Jahren kombinieren wir handwerkliche Präzision mit kreativem Design, um einzigartige und funktionale Messeauftritte zu realisieren.
          </p>
          <p className="text-mediumText text-base lg:text-lg leading-relaxed">
            Unser Team aus erfahrenen Designern, Projektmanagern und Monteuren arbeitet Hand in Hand, um Ihre individuellen Anforderungen zu übertreffen und einen bleibenden Eindruck bei Ihren Besuchern zu hinterlassen.
          </p>
        </motion.div>
         <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden shadow-xl"
        >
          <Image 
            src="/images/TeamLiebscherMessestandbau.jpg" 
            alt="Team Liebscher Messestandbau" 
            fill 
            className="rounded-lg object-cover" 
            priority 
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-secondary p-6 rounded-xl shadow-xl hover:shadow-accent/30 transition-shadow duration-300"
            custom={index}
            variants={featureVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300 } }}
          >
            {feature.icon}
            <h4 className="text-xl font-semibold text-lightText mb-2">{feature.title}</h4>
            <p className="text-mediumText text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutSectionContent;