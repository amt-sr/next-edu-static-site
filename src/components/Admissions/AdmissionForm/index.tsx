import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FormData {
  [key: string]: string;
}

interface LearningPaths {
  [key: string]: string[];
}

type LearningPathKey = keyof typeof learningPaths;

const learningPaths = {
  'Early Years Program': [
    ['Child Name'],
    ['Parent Name'],
    ['Age', 'number'],
    ['Parent Contact'],
    ['Preferred Start Date', 'date']
  ],
  'Primary School': [['Student Name'], ['Parent Contact'], ['Current Grade'], ['Previous School']],
  'Middle School': [
    ['Student Name'],
    ['Phone Number'],
    ['Email', 'email'],
    ['Grade Applying For'],
    ['Achievements']
  ],
  'Senior School': [
    ['Student Name'],
    ['Phone Number'],
    ['Email', 'email'],
    ['Stream Interested In'],
    ['Career Goals']
  ]
} as const;

export default function AdmissionForm() {
  const [selectedPath, setSelectedPath] = useState<LearningPathKey>('Early Years Program');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  interface SubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = (e: SubmitEvent): void => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({});
  };
  return (
    <section className='py-16 px-4 bg-gray-50 min-h-screen'>
      <div className='max-w-3xl mx-auto'>
        <div className='mb-6'>
          <Label htmlFor='path'>Select Learning Path</Label>
          <select
            id='path'
            className='w-full mt-2 p-3 rounded border border-gray-300'
            value={selectedPath}
            onChange={(e) => {
              setSelectedPath(e.target.value as LearningPathKey);
              setFormData({});
              setSubmitted(false);
            }}>
            {Object.keys(learningPaths).map((path) => (
              <option key={path} value={path}>
                {path}
              </option>
            ))}
          </select>
        </div>

        {!submitted ? (
          <div className='bg-white shadow-md rounded-lg p-8'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              {learningPaths[selectedPath].map((field) => (
                <div key={field[0]}>
                  <Label>{field[0]}</Label>
                  <Input
                    name={field[0]}
                    type={field[1] || 'text'}
                    value={formData[field[0]] || ''}
                    onChange={handleInputChange}
                    placeholder={`Enter ${field[0]}`}
                    className='mt-1'
                  />
                </div>
              ))}

              <div>
                <Label>Additional Message (Optional)</Label>
                <Textarea
                  name='message'
                  value={formData.message || ''}
                  onChange={handleInputChange}
                  placeholder='Share any specific details or questions'
                  className='mt-1'
                />
              </div>

              <Button type='submit' className='bg-teal-600 hover:bg-teal-700 text-white w-full'>
                Submit Application
              </Button>
            </form>
          </div>
        ) : (
          <div className='bg-white shadow-md rounded-lg p-8 text-center'>
            <CheckCircle2 className='text-green-600 mx-auto mb-4' size={48} />
            <h2 className='text-xl font-semibold text-gray-700'>
              Your application for <span className='text-teal-600'>{selectedPath}</span> has been
              submitted!
            </h2>
            <p className='mt-2 text-gray-500'>We will get in touch with you shortly.</p>
            <button
              onClick={handleReset}
              className='mt-4 text-sm text-teal-600 underline hover:text-teal-800'>
              Click here to fill another form
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
