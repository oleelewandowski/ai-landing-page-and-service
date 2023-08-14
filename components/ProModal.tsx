'use client';

import { Check, Zap } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { tools } from '@/app/(dashboard)/(routes)/dashboard/constants';
import { usePremiumModal } from '@/hooks/usePremiumModal';

export const ProModal = () => {
  const proModal = usePremiumModal();
  const { isOpen, onClose } = proModal;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='flex flex-col items-center justify-center pb-2 gap-y-4'>
            <div className='flex flex-col items-center justify-center pb-2 gap-y-4'>
              Upgrade to the
              <Badge variant='premium' className='py-1 text-sm uppercase'>
                pro version
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className='pt-2 space-y-2 font-medium text-center text-zinc-900'>
            {tools.map((tool) => (
              <Card
                key={tool.href}
                className='flex items-center justify-between p-3 border-black/5'
              >
                <div className='flex items-center gap-x-4'>
                  <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                    <tool.icon className={cn('w-6 h-6', tool.color)} />
                  </div>
                  <div>{tool.label}</div>
                </div>
                <Check className='w-5 h-5 text-primary' />
              </Card>
            ))}
          </DialogDescription>
          <DialogFooter>
            <Button size='lg' variant='premium' className='w-full mt-4'>
              Upgrade <Zap className='w-4 h-4 ml-2 fill-white' />
            </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
