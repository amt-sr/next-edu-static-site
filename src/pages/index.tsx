import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const heroImages = ['/assets/img/bg-1.jpg', '/assets/img/bg-2.jpg', '/assets/img/bg-3.jpg'];
const campusLifeImgs = [
  { img: '/assets/img/cmps-1.jpg', txt: 'Igniting Curiosity in Every Mind' },
  { img: '/assets/img/cmps-2.jpg', txt: 'Dive into Confidence and Fun' },
  { img: '/assets/img/cmps-3.jpg', txt: 'Strong Bodies, Stronger Spirits' },
  { img: '/assets/img/cmps-4.jpg', txt: 'Rhythms of Joy and Creativity' }
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);
  return (
    <main className='min-h-screen bg-white text-gray-800'>
      {/* Hero Carousel Section */}
      <section className='relative h-[350px] flex items-center justify-center overflow-hidden'>
        {heroImages.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{
              backgroundImage: `url('${src}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            aria-hidden={idx !== current}>
            <div className='absolute inset-0 bg-gray-900/40' />
            {idx === current && (
              <div className='relative z-20 flex flex-col items-center justify-center h-full text-center'>
                <h2 className='text-2xl lg:text-4xl font-bold mb-4 text-white'>
                  Empowering Students for a Brighter Future
                </h2>
                <p className='mb-6 max-w-2xl mx-auto text-[12px] sm:text-[18px] lg:text-lg text-white'>
                  Welcome to Greenfield International School, where excellence in education meets
                  holistic development.
                </p>
                <Button className='bg-teal-600 text-white cursor-pointer'>Learn More</Button>
              </div>
            )}
          </div>
        ))}
        {/* Hero Carousel Dots */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30'>
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === current ? 'bg-white' : 'bg-white/50'
              } border border-white`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      <section className='py-16 px-4 max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold mb-4 text-center'>Why Choose Us</h2>
        <p className='text-gray-600 mb-10 w-4/5 text-center mx-auto block'>
          Empowering excellence through dedicated faculty, world-class infrastructure, and a
          values-driven learning environment — we prepare students for life, not just exams.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 text-center'>
          <Card className='p-6 bg-gray-100'>
            <CardContent>
              <img src='/assets/img/graduation.png' className='mx-auto w-[60px] h-[60px]' />
              <h4 className='text-xl font-semibold'>Experienced Faculty</h4>
            </CardContent>
          </Card>
          <Card className='p-6 bg-gray-100'>
            <CardContent>
              <img src='/assets/img/agency.png' className='mx-auto w-[60px] h-[60px]' />
              <h4 className='text-xl font-semibold'>Modern Infrastructure</h4>
            </CardContent>
          </Card>
          <Card className='p-6 bg-gray-100'>
            <CardContent>
              <img src='/assets/img/flower.png' className='mx-auto w-[60px] h-[60px]' />
              <h4 className='text-xl font-semibold'>Holistic Approach</h4>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='py-12 bg-white'>
        <div className='max-w-6xl mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-4'>Academic Programs</h2>
          <p className='text-gray-600 mb-10'>
            Designed to support every stage of learning, our academic structure nurtures
            intellectual growth, creativity, and confidence.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                title: 'Early Years Program',
                icon: '🎨',
                desc: 'Play-based learning that sparks curiosity.'
              },
              {
                title: 'Primary School',
                icon: '📘',
                desc: 'Core skills in literacy, numeracy & creativity.'
              },
              {
                title: 'Middle School',
                icon: '📚',
                desc: 'In-depth subjects, critical thinking, STEAM.'
              },
              {
                title: 'High School',
                icon: '🎓',
                desc: 'Career-oriented focus with global exposure.'
              }
            ].map(({ title, icon, desc }) => (
              <div key={title} className='p-6 bg-gray-50 rounded-lg shadow-md'>
                <div className='text-4xl mb-2'>{icon}</div>
                <h3 className='text-xl font-semibold mb-1'>{title}</h3>
                <p className='text-gray-600 text-sm'>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 px-4 max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold mb-4 text-center mx-auto'>Campus Life</h2>
        <p className='text-gray-600 mb-10 w-4/5 text-center mx-auto block'>
          Beyond academics, our vibrant campus life fosters creativity, teamwork, and lifelong
          friendships through sports, arts, and hands-on activities
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {campusLifeImgs.map((mapping, idx) => (
            <Card className='p-0 h-64 w-full overflow-hidden relative' key={mapping.img}>
              <CardContent className='p-0 h-full w-full'>
                <div className='relative h-full w-full'>
                  <img
                    src={mapping.img}
                    className='object-cover h-full w-full rounded-xl'
                    alt={`Campus Life ${idx + 1}`}
                  />
                  <div className='absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center'>
                    <span className='text-white text-lg font-semibold drop-shadow'>
                      {mapping.txt}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className='bg-teal-600 text-white py-10 px-6 text-center'>
        <h2 className='text-3xl font-bold mb-2'>Admissions Open for 2025–26</h2>
        <p className='mb-6 text-lg'>
          Join a learning community that nurtures curiosity, confidence, and character.
        </p>
        <div className='flex justify-center gap-4 flex-wrap'>
          <a
            href='/admissions'
            className='bg-white text-teal-600 font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition'>
            Apply Now
          </a>
          <a
            href='/contact'
            className='border border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition'>
            Schedule a Tour
          </a>
        </div>
      </section>
    </main>
  );
}
