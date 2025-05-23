// src/components/ProjectCard.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi'; // Для кнопки "Подробнее"

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string; // Путь к изображению в /public
  description?: string; // Опциональное краткое описание
}

interface ProjectCardProps {
  project: Project;
  index: number; // Для анимационной задержки
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1, // Каскадная анимация
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="bg-secondary rounded-lg shadow-xl overflow-hidden flex flex-col h-full group"
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ 
        y: -8, 
        boxShadow: "0px 12px 24px rgba(74, 144, 226, 0.25)",
        transition: { type: 'spring', stiffness: 280, duration: 0.2 }
      }}
    >
      <div className="relative w-full h-56 sm:h-64 md:h-72">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Настроить под свой грид
          priority
        />
        {/* Оверлей при наведении (опционально) */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <FiArrowRight className="text-white text-4xl transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
      <div className="p-5 sm:p-6 flex-grow flex flex-col">
        <h3 className="text-xl lg:text-2xl font-semibold text-lightText mb-2">{project.title}</h3>
        <p className="text-accent text-sm font-medium mb-3">{project.category}</p>
        {project.description && (
          <p className="text-mediumText text-sm leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>
        )}
        {/* Можно добавить кнопку/ссылку, если нужно */}
        {/* <button 
          className="mt-auto bg-accent/10 hover:bg-accent text-accent hover:text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300 self-start"
          onClick={() => alert(`Mehr Details zu: ${project.title}`)} // Заменить на открытие модального окна
        >
          Details ansehen
        </button> */}
      </div>
    </motion.div>
  );
};

export default ProjectCard;