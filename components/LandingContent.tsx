'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { User } from 'lucide-react';

const testimonials = [
  {
    name: 'Oliver',
    avatar: User,
    title: 'Software Developer',
    description: "This is the best AI App I've ever used",
  },
  {
    name: 'Joanna',
    avatar: User,
    title: 'Data Scientist',
    description: 'An incredible tool that has revolutionized my work!',
  },
  {
    name: 'Elena',
    avatar: User,
    title: 'Graphic Designer',
    description:
      'As a designer, this AI App has taken my creativity to new heights!',
  },
  {
    name: 'Mark',
    avatar: User,
    title: 'Marketing Manager',
    description:
      "I'm amazed by the insights this AI App provides. A game-changer for marketers!",
  },
];

const LandingContent = () => (
  <div className='px-10 pb-20'>
    <h2 className='mb-10 text-4xl font-extrabold text-center text-white'>
      Testimonials
    </h2>
    <div className='grid gap-4 grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {testimonials.map((item) => (
        <Card
          key={item.description}
          className='bg-[#192339] border-none text-white'
        >
          <CardHeader>
            <div>
              <CardTitle className='flex items-center gap-x-2'>
                <div>
                  <p className='text-lg'>{item.name}</p>
                  <p className='text-sm text-zinc-400'>{item.title}</p>
                </div>
              </CardTitle>
            </div>
            <CardContent className='px-0 pt-4'>{item.description}</CardContent>
          </CardHeader>
        </Card>
      ))}
    </div>
  </div>
);

export default LandingContent;
