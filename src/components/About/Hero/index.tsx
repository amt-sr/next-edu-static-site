export default function Hero() {
  return (
    <section className='relative text-center text-white'>
      {/* Background Image */}
      <div className='absolute inset-0 -z-10'>
        <img
          src='/assets/img/about-1.jpg'
          alt='School Campus'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/40' />
      </div>

      {/* Foreground Content */}
      <div className='max-w-4xl mx-auto px-6 py-24'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>About Us</h1>
        <p className='text-lg md:text-xl'>
          Our commitment is to shape responsible global citizens by offering world-class education
          in a secure, compassionate, and engaging atmosphere.
        </p>
      </div>
    </section>
  );
}
