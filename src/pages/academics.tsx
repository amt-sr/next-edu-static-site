import Achievements from '@/components/Academics/Achievements';
import Classroom from '@/components/Academics/Classroom';
import Curriculum from '@/components/Academics/Curriculum';
import Explore from '@/components/Academics/Explore';
import Hero from '@/components/Academics/Hero';
import Philosophy from '@/components/Academics/Philosophy';

export default function Academics() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <Curriculum />
      <Classroom />
      <Achievements />
      <Explore />
    </main>
  );
}
