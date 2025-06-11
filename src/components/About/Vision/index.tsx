export default function Vision() {
  return (
    <section className='py-20 px-6 bg-white'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
        {/* Left Image */}
        <div>
          <img
            src='/assets/img/bg-2.jpg' // ✅ Make sure this exists in public/assets/img
            alt='Students engaged in learning'
            className='w-full h-auto rounded-xl shadow-md object-cover'
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-600 mb-6'>Vision & Mission</h2>

          <div className='mb-6'>
            <h3 className='text-xl font-semibold text-green-700 mb-2'>🎯 Vision</h3>
            <p className='text-gray-600 leading-relaxed'>
              To nurture a generation of thinkers, leaders, and compassionate citizens ready to
              shape a better world.
            </p>
          </div>

          <div>
            <h3 className='text-xl font-semibold text-green-700 mb-2'>🚀 Mission</h3>
            <p className='text-gray-600 leading-relaxed'>
              Our mission is to deliver holistic education through a balanced curriculum, fostering
              creativity, discipline, and curiosity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
