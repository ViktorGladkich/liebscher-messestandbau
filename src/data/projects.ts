// src/data/projects.ts
import { Project } from '@/components/ProjectCard'; // Импортируем тип из компонента

export const projectsData: Project[] = [
  {
    id: "proj1",
    title: "Innovativer Messeauftritt für TechSolutions GmbH",
    category: "Individualbau | IT-Messe Berlin",
    imageUrl: "/images/projects/project1.png", // Замени на реальные пути
    description: "Ein futuristisches Designkonzept mit interaktiven Elementen, das die Technologieführerschaft des Kunden unterstreicht."
  },
  {
    id: "proj2",
    title: "Modulares Standsystem für GreenEnergy AG",
    category: "Systembau | Energie-Fachmesse Hamburg",
    imageUrl: "/images/projects/project2.png",
    description: "Flexibler und nachhaltiger Messestand, der mehrfach wiederverwendet und an verschiedene Standgrößen angepasst werden kann."
  },
  {
    id: "proj3",
    title: "Kreativstand für Food Startup 'LeckerBissen'",
    category: "Individualbau | Food & Beverage Messe Köln",
    imageUrl: "/images/projects/project3.png",
    description: "Einladender und markenorientierter Stand, der die Produktvielfalt optimal präsentiert und zum Probieren einlädt."
  },
  {
    id: "proj4",
    title: "Automobilpräsentation für AutoMobil AG",
    category: "Eventbau | IAA München",
    imageUrl: "/images/projects/project4.png",
    description: "Dynamische Inszenierung der neuesten Fahrzeugmodelle mit Fokus auf Lichtdesign und multimedialen Effekten."
  },
  
  {
     id: "proj5",
     title: "Healthcare Kongressstand für PharmaCorp",
     category: "Systembau mit Individualelementen | Medizinmesse Düsseldorf",
     imageUrl: "/images/projects/project5.jpg",
     description: "Seriöser und informativer Auftritt mit klar strukturierten Bereichen für Produktpräsentation und Fachgespräche."
   },
   {
     id: "proj6",
     title: "Lifestyle Marke 'UrbanStyle' Launch Event",
     category: "Individualbau | Pop-Up Berlin",
     imageUrl: "/images/projects/project6.jpg",
     description: "Trendiger und auffälliger Stand, der die junge Zielgruppe anspricht und eine hohe Social-Media-Wirkung erzielt."
   },
];