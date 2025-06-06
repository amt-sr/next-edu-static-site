import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <main>
      <section className='relative text-center text-white'>
        {/* Background Image */}
        <div className='absolute inset-0 -z-10'>
          <img
            src='/assets/img/about-1.jpg' // ✅ Confirm this path is correct relative to `public/`
            alt='School Campus'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/40' /> {/* Optional overlay */}
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

      <section className='bg-gray-50 py-20 px-6'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-600 mb-6'>Our Story</h2>
          <p className='text-xl text-gray-600'>
            Founded in 2002, Greenfield International School has steadily grown into a beacon of
            educational excellence. What began as a modest initiative with a handful of students has
            flourished into a vibrant institution known for academic rigor, inclusive culture, and
            innovative teaching methods.
            <br />
            Over the years, we have expanded not just in size but in vision — embracing modern
            technology, nurturing creativity, and cultivating values that matter. Our passionate
            educators and supportive staff ensure that every child receives personal attention,
            encouragement, and the tools to succeed.
          </p>
        </div>
      </section>

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
                Our mission is to deliver holistic education through a balanced curriculum,
                fostering creativity, discipline, and curiosity.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      <section className='bg-gray-100 py-16 px-6 text-center'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-600'>
            Ready to Explore Our Academic Programs?
          </h2>
          <p className='mt-4 text-lg text-gray-600'>
            Discover how our curriculum empowers students at every stage of their learning journey.
          </p>

          <a href='/academics'>
            <Button
              variant='ghost'
              className='mt-8 rounded-full px-8 py-4 text-teal-600 font-semibold cursor-pointer hover:bg-teal-50 transition-colors shadow-md'>
              Explore Academic Programs
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}
