// src/components/HeroSection.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Задержка между анимацией дочерних элементов
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  
  const subItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "circOut" } },
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about'); // Предполагаем, что следующая секция имеет id 'about'
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-4 bg-gradient-to-br from-primary via-secondary to-primary"
      // Добавим фоновую анимацию или статичный фон позже, если нужно
    >
      {/* Эффект частиц или геометрических фигур на фоне (опционально) */}
      {/* <div className="absolute inset-0 z-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-accent rounded-full"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
              scale: [1, 1.2, 1],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div> */}


      <motion.div
        className="z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
        >
          <span className="block">Willkommen bei</span>
          <span className="block text-accent">Liebscher Messestandbau</span>
        </motion.h1>

        <motion.p
          variants={subItemVariants}
          className="text-lg sm:text-xl md:text-2xl text-mediumText max-w-xl lg:max-w-2xl mx-auto mb-10"
        >
          Wir verwandeln Ihre Visionen in beeindruckende Messeauftritte, die Ihre Marke unvergesslich machen.
        </motion.p>

        <motion.div variants={subItemVariants}>
          <motion.a
            href="#contact" // Или к первой секции с контентом, например #about
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-8 sm:py-4 sm:px-10 rounded-lg text-base sm:text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(74, 144, 226, 0.7)" }}
            whileTap={{ scale: 0.95 }}
          >
            Projekt starten
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Анимированная стрелка вниз */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={scrollToNextSection}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        whileHover={{ scale: 1.2, color: '#4A90E2' }}
      >
        <FaArrowDown size={28} className="text-lightText" />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;