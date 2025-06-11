export default function Achievements() {
  return (
    <section className='py-16 bg-white px-6'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl font-bold text-gray-600 mb-4'>Academic Achievements</h2>
        <p className='text-lg text-gray-600 mb-10 max-w-3xl mx-auto'>
          From board exam success to inter-school accolades, our students continue to set benchmarks
          in academic excellence.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center'>
          <div className='bg-gray-100 p-6 rounded shadow'>
            🎓
            <h3 className='text-xl font-semibold text-gray-600 mt-2'>100% Board Pass Rate</h3>
            <p className='text-sm text-gray-600 mt-1'>Consistently for the past 5 years</p>
          </div>
          <div className='bg-gray-100 p-6 rounded shadow'>
            🧠
            <h3 className='text-xl font-semibold text-gray-600 mt-2'>Top 1% Rankers</h3>
            <p className='text-sm text-gray-600 mt-1'>Across national-level olympiads</p>
          </div>
          <div className='bg-gray-100 p-6 rounded shadow'>
            🏅
            <h3 className='text-xl font-semibold text-gray-600 mt-2'>Scholarship Winners</h3>
            <p className='text-sm text-gray-600 mt-1'>Merit-based awards for excellence</p>
          </div>
          <div className='bg-gray-100 p-6 rounded shadow'>
            📊
            <h3 className='text-xl font-semibold text-gray-600 mt-2'>CBSE/ICSE Toppers</h3>
            <p className='text-sm text-gray-600 mt-1'>Among city’s top performers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
