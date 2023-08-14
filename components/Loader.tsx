import Image from 'next/image';

export const Loader = () => (
  <div className='flex flex-col items-center justify-center h-full gap-y-4'>
    <div className='relative w-10 h-10 animate-spin'>
      <Image alt='Logo' fill src='/logo.png' />
    </div>
    <p className='p-2 text-sm text-muted-foreground'>
      aI-genT processing your command...
    </p>
  </div>
);
