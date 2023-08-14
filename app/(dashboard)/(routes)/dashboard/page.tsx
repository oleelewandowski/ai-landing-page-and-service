'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { tools } from './constants';

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className='mb-8 space-y-4'>
        <h2 className='text-2xl font-bold text-center md:text-4xl'>
          Explore the power of an AI
        </h2>
        <p className='text-sm font-light text-center text-muted-foreground md:text-lg'>
          Use the smartest AI tools...
        </p>
      </div>
      <div className='px-4 space-y-4 md:px-20 lg:px-32'>
        {tools.map((tool) => (
          <Card
            key={tool.href}
            onClick={() => router.push(tool.href)}
            className='flex items-center justify-between p-6 transition cursor-pointer border-black/5 hover:shadow-md'
          >
            <div className='flex items-center gap-x-4'>
              <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                <tool.icon className={cn('w-8 h-8', tool.color)} />
              </div>
              <p className='font-semibold'>{tool.label}</p>
            </div>
            <ArrowRight />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
