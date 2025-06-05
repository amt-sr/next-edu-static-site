import React from 'react';

export default function AcademicProgrammes() {
  return (
    <section className='py-12 bg-white'>
      <div className='max-w-6xl mx-auto px-4 text-center'>
        <h2 className='text-3xl font-bold mb-4'>Academic Programs</h2>
        <p className='text-gray-600 mb-10'>
          Designed to support every stage of learning, our academic structure nurtures intellectual
          growth, creativity, and confidence.
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
  );
}
