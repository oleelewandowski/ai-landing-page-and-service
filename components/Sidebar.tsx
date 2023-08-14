'use client';

import { LayoutDashboard, MessageSquare, Settings, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { usePremiumModal } from '@/hooks/usePremiumModal';

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Chat',
    icon: MessageSquare,
    href: '/chat',
    color: 'text-violet-500',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
    color: 'text-green-500',
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const proModal = usePremiumModal();
  const { onOpen } = proModal;

  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
      <div className='flex-1 px-3 py-2'>
        <Link href='/dashboard' className='flex items-center pl-3 mb-14'>
          <div className='relative w-8 h-8 mr-4'>
            <Image src='/logo.png' fill alt='Logo of aI-genT' />
          </div>
          <h1 className={cn('text-2xl font-bold', montserrat.className)}>
            aI-genT
          </h1>
        </Link>
        <nav className='space-y-1'>
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                'flex justify-start w-full p-3 text-sm font-medium transition rounded-lg cursor-pointer group hover:text-white hover:bg-white/10',
                {
                  'bg-white/10 text-white': pathname === route.href,
                  'text-zinc-400': pathname !== route.href,
                }
              )}
            >
              <div className='flex items-center flex-1'>
                <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </nav>
      </div>
      <div className='px-3'>
        <Button className='w-full' variant='premium' onClick={onOpen}>
          Upgrade to Pro
          <Zap className='w-4 h-4 ml-2 fill-white' />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
