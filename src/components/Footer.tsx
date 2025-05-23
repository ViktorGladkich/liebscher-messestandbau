// src/components/Footer.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaXing, FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    // { name: 'LinkedIn', icon: <FaLinkedinIn />, href: 'https://linkedin.com/company/liebscher-messestandbau' },
    // { name: 'Xing', icon: <FaXing />, href: 'https://xing.com/pages/liebscher-messestandbau' },
    // { name: 'Instagram', icon: <FaInstagram />, href: 'https://instagram.com/liebscher_messestandbau' },
    // Добавь или удали нужные ссылки
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const linkItemVariants = {
    hidden: { opacity:0, y:10 },
    visible: (i:number) => ({
        opacity:1, y:0, transition: { delay: i * 0.1 + 0.2, ease:"easeOut"}
    })
  };

  return (
    <motion.footer
      className="bg-secondary text-mediumText py-12 sm:py-16"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} 
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          
          <motion.div 
            className="md:col-span-1"
            custom={0} variants={linkItemVariants}
          >
            <p className="text-sm">
              © {currentYear} Liebscher Messestandbau.
            </p>
            <p className="text-sm">Alle Rechte vorbehalten.</p>
          </motion.div>

          {/* Колонка 2: Навигация (Impressum, Datenschutz) */}
          <motion.nav 
            className="md:col-span-1 md:text-center"
            custom={1} variants={linkItemVariants}
          >
            <ul className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6">
              <li>
                
                <a href="/impressum" className="hover:text-accent transition-colors text-sm">Impressum</a>
              </li>
              <li>
                <a href="/datenschutz" className="hover:text-accent transition-colors text-sm">Datenschutz</a>
              </li>
            </ul>
          </motion.nav>

          {/* Колонка 3: Социальные сети (если есть) */}
          {socialLinks.length > 0 && (
            <motion.div 
                className="md:col-span-1 flex justify-center md:justify-end space-x-4"
                custom={2} variants={linkItemVariants}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-mediumText hover:text-accent transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {React.cloneElement(link.icon, { size: 22 })}
                </motion.a>
              ))}
            </motion.div>
          )}
           
           {socialLinks.length === 0 && <div className="md:col-span-1"></div>}
        </div>
        
       
      </div>
    </motion.footer>
  );
};

export default Footer;