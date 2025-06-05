import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function WhyChooseUs() {
  return (
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
  );
}
