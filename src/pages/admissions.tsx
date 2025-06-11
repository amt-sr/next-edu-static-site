import { Button } from '@/components/ui/button';
import Hero from '@/components/Admissions/Hero';
import AdmissionForm from '@/components/Admissions/AdmissionForm';
import Explore from '@/components/Admissions/Explore';

export default function AdmissionsPage() {
  return (
    <main>
      <Hero />
      <AdmissionForm />
      <Explore />
    </main>
  );
}
