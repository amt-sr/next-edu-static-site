export default function Explore() {
  return (
    <section className='bg-teal-600 text-white py-16 px-6'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Ready to Explore More?</h2>
        <p className='text-lg md:text-xl mb-8'>
          Discover how our academic programs can shape your child's future. Reach out to us or
          explore admissions today.
        </p>
        <a
          href='/admissions'
          className='inline-block bg-white text-teal-600 font-semibold px-8 py-4 rounded-full shadow hover:bg-gray-100 transition'>
          Explore Admissions
        </a>
      </div>
    </section>
  );
}
