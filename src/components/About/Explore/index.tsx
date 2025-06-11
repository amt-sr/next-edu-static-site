import { Button } from '@/components/ui/button';

export default function Explore() {
  return (
    <section className='bg-gray-100 py-16 px-6 text-center'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-600'>
          Ready to Explore Our Academic Programs?
        </h2>
        <p className='mt-4 text-lg text-gray-600'>
          Discover how our curriculum empowers students at every stage of their learning journey.
        </p>

        <a href='/academics'>
          <Button
            variant='ghost'
            className='mt-8 rounded-full px-8 py-4 text-teal-600 font-semibold cursor-pointer hover:bg-teal-50 transition-colors shadow-md'>
            Explore Academic Programs
          </Button>
        </a>
      </div>
    </section>
  );
}
