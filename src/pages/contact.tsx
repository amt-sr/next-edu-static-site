import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-gray-50 p-6 md:p-10'>
      <h1 className='text-3xl md:text-4xl font-bold text-center text-teal-700 mb-10'>
        📞 Get in Touch With Us
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Branch 1 */}
        <Card className='shadow-xl'>
          <CardContent className='p-6 space-y-4'>
            <h2 className='text-2xl font-semibold text-teal-700'>📍 Greenfield Campus</h2>

            <div className='flex items-start gap-3'>
              <MapPin className='text-teal-500' />
              <p className='text-gray-700'>123 Green Lane, Sector 45, New Delhi, 110045</p>
            </div>

            <div className='flex items-start gap-3'>
              <Phone className='text-teal-500' />
              <p className='text-gray-700'>+91 98765 43210</p>
            </div>

            <div className='flex items-start gap-3'>
              <Mail className='text-teal-500' />
              <p className='text-gray-700'>greenfield@myschool.edu</p>
            </div>

            <div className='flex items-start gap-3'>
              <Facebook className='text-teal-500' />
              <p className='text-gray-700'>@myschoolgreenfield</p>
            </div>

            <p className='text-sm text-gray-500 mt-4'>
              Contact Person: <span className='font-medium text-gray-700'>Ms. Anjali Sharma</span>
            </p>
          </CardContent>
        </Card>

        {/* Branch 2 */}
        <Card className='shadow-xl'>
          <CardContent className='p-6 space-y-4'>
            <h2 className='text-2xl font-semibold text-teal-700'>📍 Lakeside Campus</h2>

            <div className='flex items-start gap-3'>
              <MapPin className='text-teal-500' />
              <p className='text-gray-700'>456 Lake View Road, HSR Layout, Bengaluru, 560102</p>
            </div>

            <div className='flex items-start gap-3'>
              <Phone className='text-teal-500' />
              <p className='text-gray-700'>+91 91234 56789</p>
            </div>

            <div className='flex items-start gap-3'>
              <Mail className='text-teal-500' />
              <p className='text-gray-700'>lakeside@myschool.edu</p>
            </div>

            <div className='flex items-start gap-3'>
              <Facebook className='text-teal-500' />
              <p className='text-gray-700'>@myschoollakeside</p>
            </div>

            <p className='text-sm text-gray-500 mt-4'>
              Contact Person: <span className='font-medium text-gray-700'>Mr. Rajeev Menon</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
