'use client';

import { Settings } from 'lucide-react';

import Heading from '@/components/Heading';
import { Button } from '@/components/ui/Button';
import { usePremiumModal } from '@/hooks/usePremiumModal';

const SettingsPage = () => {
  const { onOpen } = usePremiumModal();
  return (
    <article>
      <Heading
        title='Settings'
        description='You actual subscription status'
        icon={Settings}
        iconColor='text-green-500'
        bgColor='bg-green-500/10'
      />
      <div className='flex items-center px-4 mb-8 lg:px-8 gap-x-3'>
        <Button
          variant='default'
          className='flex items-center px-4 mb-8 bg-green-500 lg:px-8 gap-x-3'
          onClick={onOpen}
        >
          Manage Subscription
        </Button>
      </div>
    </article>
  );
};

export default SettingsPage;
