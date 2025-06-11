import Affiliations from '@/components/About/Affiliations';
import Explore from '@/components/About/Explore';
import Hero from '@/components/About/Hero';
import Quote from '@/components/About/Quote';
import Story from '@/components/About/Story';
import Vision from '@/components/About/Vision';

export default function About() {
  return (
    <main>
      <Hero />
      <Story />
      <Vision />
      <Quote />
      <Affiliations />
      <Explore />
    </main>
  );
}
