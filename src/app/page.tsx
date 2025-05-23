"use client";
import React from 'react';
import HeroSection from '@/components/HeroSection';
import AnimatedSection from '@/components/AnimatedSection'; 
import AboutSectionContent from '@/components/AboutSectionContent';
import ServicesSectionContent from '@/components/ServicesSectionContent';
import ProjectsSectionContent from '@/components/ProjectsSectionContent'; 
import ContactSectionContent from '@/components/ContactSectionContent';

export default function HomePage() {
  return (
    <>
      <HeroSection /> 

    <AnimatedSection id="about" backgroundColor="bg-secondary">
        <AboutSectionContent /> 
      </AnimatedSection>

       <AnimatedSection id="services" backgroundColor="bg-primary">
        <ServicesSectionContent /> 
      </AnimatedSection>

       <AnimatedSection id="projects" backgroundColor="bg-secondary">
        <ProjectsSectionContent /> 
      </AnimatedSection>

      <AnimatedSection id="contact" backgroundColor="bg-primary">
        <ContactSectionContent /> 
      </AnimatedSection>
    </>
  );
}