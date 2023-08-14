import Image from 'next/image';

interface EmptyProps {
  label?: string;
}

export const Empty: React.FC<EmptyProps> = ({ label = 'No history...' }) => (
  <div className='flex flex-col items-center justify-center h-full p-20'>
    <div className='relative w-72 h-72'>
      <Image alt='Nothing here, empty list' src='/empty.svg' fill />
    </div>
    <p className='p-2 text-sm text-muted-foreground'> {label} </p>
  </div>
);
