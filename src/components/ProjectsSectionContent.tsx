// src/components/ProjectsSectionContent.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectsData } from '@/data/projects'; // Импортируем данные проектов

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" }}
};

const introTextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.2 }}
};

const ProjectsSectionContent = () => {
  return (
    <div className="container mx-auto">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-accent text-center mb-6"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Projekte, die begeistern
      </motion.h2>
      <motion.p 
        className="text-lg md:text-xl text-mediumText max-w-2xl text-center mx-auto mb-12 sm:mb-16"
        variants={introTextVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Entdecken Sie eine Auswahl unserer erfolgreich umgesetzten Messestände und lassen Sie sich von unserer Arbeit inspirieren.
      </motion.p>

      {projectsData.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-mediumText text-lg">
          Momentan sind keine Projekte verfügbar. Schauen Sie bald wieder vorbei!
        </p>
      )}

      {/* Опциональная кнопка "Больше проектов", если у тебя их много */}
      {/* <motion.div 
        className="text-center mt-12 sm:mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.5 }} // Задержка, чтобы появилась после карточек
      >
        <button className="bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300 transform hover:scale-105">
          Alle Projekte anzeigen
        </button>
      </motion.div> */}

    </div>
  );
};

export default ProjectsSectionContent;