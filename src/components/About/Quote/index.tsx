export default function Quote() {
  return (
    <section className='py-20 px-6 bg-white'>
      <div className='max-w-3xl mx-auto text-center'>
        <div className='bg-gray-100 rounded-xl shadow-lg p-8 md:p-12 relative'>
          {/* Quote Text */}
          <p className='text-xl md:text-2xl text-gray-600 italic leading-relaxed'>
            <span className='text-5xl text-green-600 mb-4'>&ldquo;</span> Education is not the
            learning of facts, but the training of the mind to think.{' '}
            <span className='text-5xl text-green-600 mb-4'>&rdquo;</span>
          </p>

          {/* Attribution */}
          <p className='mt-6 text-lg font-semibold text-gray-600'>
            — Principal, Greenfield International School
          </p>
        </div>
      </div>
    </section>
  );
}
