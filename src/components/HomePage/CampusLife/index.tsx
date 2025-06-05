import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const campusLifeImgs = [
  { img: '/assets/img/cmps-1.jpg', txt: 'Igniting Curiosity in Every Mind' },
  { img: '/assets/img/cmps-2.jpg', txt: 'Dive into Confidence and Fun' },
  { img: '/assets/img/cmps-3.jpg', txt: 'Strong Bodies, Stronger Spirits' },
  { img: '/assets/img/cmps-4.jpg', txt: 'Rhythms of Joy and Creativity' }
];

export default function CampusLife() {
  return (
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
  );
}
