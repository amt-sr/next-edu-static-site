import React from 'react';

export default function AdmissionBanner() {
  return (
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
  );
}
