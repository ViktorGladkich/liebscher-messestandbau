// src/data/services.ts
import { IconType } from 'react-icons';
import {
  FaDraftingCompass,
  FaCubes,
  FaTools,
  FaTruckMoving,
  FaLightbulb,
  FaClipboardList
} from 'react-icons/fa';

export interface ServiceItem {
  icon: IconType; // Используем IconType
  title: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    icon: FaLightbulb, // Передаем сам компонент, а не <FaLightbulb />
    title: "Konzeption & Design",
    description: "Kreative und funktionale Standdesigns, die Ihre Markenbotschaft optimal transportieren und Besucher anziehen."
  },
  {
    icon: FaDraftingCompass,
    title: "3D Visualisierung",
    description: "Realitätsnahe 3D-Renderings Ihres Messestandes, damit Sie schon vorab einen perfekten Eindruck gewinnen."
  },
  {
    icon: FaCubes,
    title: "System- & Individualbau",
    description: "Flexible Systemlösungen oder einzigartige Individualbauten – passgenau für Ihr Budget und Ihre Anforderungen."
  },
  {
    icon: FaTools,
    title: "Produktion & Montage",
    description: "Hochwertige Fertigung in eigener Werkstatt und professioneller Auf- und Abbau durch unser erfahrenes Team."
  },
  {
    icon: FaTruckMoving,
    title: "Logistik & Lagerung",
    description: "Zuverlässiger Transport Ihres Messeguts und sichere Einlagerung zwischen den Veranstaltungen."
  },
  {
    icon: FaClipboardList,
    title: "Projektmanagement",
    description: "Persönliche Betreuung und Koordination aller Gewerke für einen reibungslosen Ablauf Ihres Messeprojekts."
  }
];