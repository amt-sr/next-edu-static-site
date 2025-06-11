import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const heroImages = ['/assets/img/bg-1.jpg', '/assets/img/bg-2.jpg', '/assets/img/bg-3.jpg'];

export default function Hero() {
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
              <a href='/about'>
                <Button className='bg-teal-600 text-white cursor-pointer'>Learn More</Button>
              </a>
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
  );
}
