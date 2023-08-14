'use client';

import TypewriterComponent from 'typewriter-effect';
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';

import { Button } from '@/components/ui/Button';

const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className='py-48 space-y-5 font-bold text-center text-white'>
      <div className='space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl'>
        <h1> The Best AI Tool for </h1>
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'>
          <TypewriterComponent
            options={{
              strings: ['Text Generation.', 'Code Generation.'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className='text-sm font-light md:text-xl text-zinc-400'>
        Create content using AI 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? '/dashboard' : 'sign-up'}>
          <Button
            variant='premium'
            className='p-4 font-semibold rounded-full md:text-lg md:p-6'
          >
            Start Generation For Free
          </Button>
        </Link>
      </div>
      <div className='text-xs font-normal text-zinc-400 md:text-sm'>
        No credit card required.
      </div>
    </div>
  );
};

export default LandingHero;
