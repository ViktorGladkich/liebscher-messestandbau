// src/components/ContactSectionContent.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'; // Иконки

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" }}
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2 + 0.3, // Задержка для каждого элемента + начальная задержка
      duration: 0.6,
      ease: "circOut"
    }
  })
};

const formVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "anticipate", delay: 0.5 }}
};

const ContactSectionContent = () => {
  const contactDetails = [
    {
      icon: <FiMail className="text-accent mr-3" size={24} />,
      text: "info@liebscher-messestandbau.de",
      href: "mailto:info@liebscher-messestandbau.de"
    },
    {
      icon: <FiPhone className="text-accent mr-3" size={24} />,
      text: "+49 123 4567890", // Замени на реальный номер
      href: "tel:+491234567890"
    },
    {
      icon: <FiMapPin className="text-accent mr-3" size={24} />,
      text: "Musterstraße 1, 12345 Musterstadt, Deutschland", // Замени на реальный адрес
      href: "https://maps.google.com/?q=Musterstraße+1,+12345+Musterstadt" // Ссылка на Google Maps
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Здесь была бы логика отправки формы
    // Например, с использованием fetch к API-эндпоинту
    alert("Vielen Dank für Ihre Nachricht! (Formular-Demo)");
    // Очистка формы (если нужно)
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container mx-auto">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-accent text-center mb-12 sm:mb-16"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Nehmen Sie Kontakt auf
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Левая колонка: Контактные данные */}
        <motion.div 
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3 
            className="text-2xl lg:text-3xl font-semibold text-lightText mb-6"
            variants={itemVariants} custom={0} // custom для задержки
          >
            Wir freuen uns auf Ihre Anfrage!
          </motion.h3>
          <motion.p 
            className="text-mediumText leading-relaxed mb-8"
            variants={itemVariants} custom={1}
          >
            Haben Sie Fragen zu unseren Leistungen oder möchten Sie ein konkretes Projekt besprechen? 
            Nutzen Sie die untenstehenden Kontaktmöglichkeiten oder das Formular. 
            Unser Team meldet sich zeitnah bei Ihnen.
          </motion.p>
          
          {contactDetails.map((detail, index) => (
            <motion.a
              key={index}
              href={detail.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-lightText hover:text-accent transition-colors group"
              variants={itemVariants}
              custom={index + 2} // Продолжаем нумерацию для задержки
              whileHover={{ x: 5 }}
            >
              {detail.icon}
              <span className="text-base lg:text-lg group-hover:underline">{detail.text}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Правая колонка: Форма */}
        <motion.div
          className="bg-secondary p-6 sm:p-8 rounded-xl shadow-2xl"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-lightText mb-1">Name</label>
              <input type="text" name="name" id="name" required 
                     className="w-full px-4 py-2.5 bg-primary border border-gray-700 rounded-md text-lightText focus:ring-accent focus:border-accent placeholder-gray-500" 
                     placeholder="Ihr Name"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-lightText mb-1">E-Mail</label>
              <input type="email" name="email" id="email" required 
                     className="w-full px-4 py-2.5 bg-primary border border-gray-700 rounded-md text-lightText focus:ring-accent focus:border-accent placeholder-gray-500" 
                     placeholder="Ihre E-Mail-Adresse"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-lightText mb-1">Nachricht</label>
              <textarea name="message" id="message" rows={4} required 
                        className="w-full px-4 py-2.5 bg-primary border border-gray-700 rounded-md text-lightText focus:ring-accent focus:border-accent placeholder-gray-500" 
                        placeholder="Ihre Nachricht an uns..."></textarea>
            </div>
            <div>
              <motion.button 
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-6 rounded-md shadow-md transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiSend className="mr-2" /> Nachricht senden
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSectionContent;