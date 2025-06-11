export default function Curriculum() {
  return (
    <section className='py-16 bg-gray-50 px-6'>
      <div className='max-w-5xl mx-auto text-center'>
        <h2 className='text-3xl font-bold text-gray-600 mb-4'>Curriculum Options</h2>
        <p className='text-lg text-gray-600 mb-10 max-w-3xl mx-auto'>
          Greenfield International School offers recognized Indian curricula designed to foster
          excellence and adaptability for future challenges.
        </p>

        <div className='grid md:grid-cols-2 gap-8 text-left'>
          {/* CBSE */}
          <div className='bg-white p-6 rounded-lg shadow border hover:shadow-md transition'>
            <div className='text-3xl mb-3'>📗</div>
            <h3 className='text-xl font-semibold text-teal-700 mb-2'>CBSE</h3>
            <p className='text-sm text-gray-700'>
              The Central Board of Secondary Education (CBSE) provides a nationally recognized
              curriculum emphasizing analytical skills, competitive exam prep, and holistic
              development.
            </p>
          </div>

          {/* ICSE */}
          <div className='bg-white p-6 rounded-lg shadow border hover:shadow-md transition'>
            <div className='text-3xl mb-3'>📙</div>
            <h3 className='text-xl font-semibold text-teal-700 mb-2'>ICSE</h3>
            <p className='text-sm text-gray-700'>
              The Indian Certificate of Secondary Education (ICSE) is known for its comprehensive
              and balanced syllabus, strong focus on English, and emphasis on application-based
              learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
