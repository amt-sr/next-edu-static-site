import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Hero from '@/components/HomePage/Hero';
import WhyChooseUs from '@/components/HomePage/WhyChooseUs';
import AcademicProgrammes from '@/components/HomePage/AcademicProgrammes';
import CampusLife from '@/components/HomePage/CampusLife';
import AdmissionsBanner from '@/components/HomePage/AdmissionBanner';

export default function Home() {
  return (
    <main className='min-h-screen bg-white text-gray-800'>
      <Hero />
      <WhyChooseUs />
      <AcademicProgrammes />
      <CampusLife />
      <AdmissionsBanner />
    </main>
  );
}
