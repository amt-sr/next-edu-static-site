export default function Classroom() {
  return (
    <section className='py-16 bg-gray-50 px-6'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl font-bold text-gray-600 mb-4'>Inside the Classroom</h2>
        <p className='text-lg text-gray-600 mb-10 max-w-3xl mx-auto'>
          A glimpse into our vibrant learning spaces, where curiosity thrives and students engage
          hands-on with their education.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {/* Image 1 */}
          <div className='relative group overflow-hidden rounded-lg shadow'>
            <img
              src='/assets/img/sci.jpg'
              alt='Science Lab'
              className='w-full h-64 object-cover group-hover:scale-105 transition'
            />
            <div className='absolute bottom-0 bg-black bg-opacity-60 text-white w-full py-2 text-sm'>
              Grade 5 Science Project
            </div>
          </div>

          {/* Image 2 */}
          <div className='relative group overflow-hidden rounded-lg shadow'>
            <img
              src='/assets/img/art.jpg'
              alt='Art Class'
              className='w-full h-64 object-cover group-hover:scale-105 transition'
            />
            <div className='absolute bottom-0 bg-black bg-opacity-60 text-white w-full py-2 text-sm'>
              Art & Creativity Workshop
            </div>
          </div>

          {/* Image 3 — Replaced */}
          <div className='relative group overflow-hidden rounded-lg shadow'>
            <img
              src='/assets/img/int.jpg'
              alt='Class Discussion'
              className='w-full h-64 object-cover group-hover:scale-105 transition'
            />
            <div className='absolute bottom-0 bg-black bg-opacity-60 text-white w-full py-2 text-sm'>
              Interactive Group Learning
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
