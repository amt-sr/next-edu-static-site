export default function Philosophy() {
  return (
    <section className='py-16 px-6 bg-white'>
      <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
        {/* Left: Image */}
        <div>
          <img
            src='/assets/img/ac-1.jpg'
            alt='Students learning'
            className='rounded-lg shadow-md'
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className='text-3xl font-bold text-gray-600 mb-4'>Our Learning Philosophy</h2>
          <p className='text-lg text-gray-600 mb-4'>
            At Greenfield International School, we believe education should spark curiosity, inspire
            creativity, and empower students to think critically. Our teachers act as facilitators,
            nurturing a culture of inquiry and exploration.
          </p>
          <p className='text-lg text-gray-600'>
            We emphasize holistic development — combining academics, life skills, and values — to
            prepare students for a dynamic world. Personalized attention and collaborative learning
            are at the core of our philosophy.
          </p>
        </div>
      </div>
    </section>
  );
}
