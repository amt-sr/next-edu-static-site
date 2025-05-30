import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <main>
      <section className='bg-white py-16 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h3 className='text-2xl font-bold mb-4'>About Us</h3>
          <p className='text-lg mb-6'>
            Greenfield International School is committed to nurturing responsible global citizens by
            providing top-quality education in a safe and caring environment.
          </p>
          <Button className='bg-teal-600 text-white'>Read More</Button>
        </div>
      </section>
    </main>
  );
}
