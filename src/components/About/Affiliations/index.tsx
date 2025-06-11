export default function Affiliations() {
  return (
    <section className='py-20 px-6 bg-white'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-600 mb-10'>
          Our Accreditations & Affiliations
        </h2>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center'>
          {/* CBSE */}
          <div className='flex flex-col items-center bg-gray-100 rounded-lg shadow p-4 w-full h-32 justify-center'>
            <span className='text-2xl'>✅</span>
            <p className='mt-2 text-sm font-medium text-gray-600'>CBSE</p>
          </div>

          {/* ICSE */}
          <div className='flex flex-col items-center bg-gray-100 rounded-lg shadow p-4 w-full h-32 justify-center'>
            <span className='text-2xl'>✅</span>
            <p className='mt-2 text-sm font-medium text-gray-600'>ICSE</p>
          </div>

          {/* IGCSE */}
          <div className='flex flex-col items-center bg-gray-100 rounded-lg shadow p-4 w-full h-32 justify-center'>
            <span className='text-2xl'>✅</span>
            <p className='mt-2 text-sm font-medium text-gray-600'>IGCSE</p>
          </div>

          {/* ISO Certification */}
          <div className='flex flex-col items-center bg-gray-100 rounded-lg shadow p-4 w-full h-32 justify-center'>
            <span className='text-2xl'>🏅</span>
            <p className='mt-2 text-sm font-medium text-gray-600'>ISO Certified</p>
          </div>

          {/* Award 2023 */}
          <div className='flex flex-col items-center bg-gray-100 rounded-lg shadow p-4 w-full h-32 justify-center col-span-2 md:col-span-1'>
            <span className='text-2xl'>🎖️</span>
            <p className='mt-2 text-sm font-medium text-gray-600 text-center'>
              Award for Excellence 2023
            </p>
          </div>
          <div className='flex flex-col items-center bg-gray-100 rounded-lg shadow p-4 w-full h-32 justify-center'>
            <span className='text-2xl'>🌟</span>
            <p className='mt-2 text-sm font-medium text-gray-600 text-center'>
              Innovation in Education 2022
            </p>
          </div>

          <div className='flex flex-col items-center bg-gray-100 rounded-lg shadow p-4 w-full h-32 justify-center'>
            <span className='text-2xl'>🥇</span>
            <p className='mt-2 text-sm font-medium text-gray-600 text-center'>
              Holistic Development 2021
            </p>
          </div>

          <div className='flex flex-col items-center bg-gray-100 rounded-lg shadow p-4 w-full h-32 justify-center'>
            <span className='text-2xl'>🏆</span>
            <p className='mt-2 text-sm font-medium text-gray-600 text-center'>
              Digital Learning Excellence 2023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
