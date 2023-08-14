'use client';

import { useEffect, useState } from 'react';

import { ProModal } from '@/components/ProModal';

export const ModalProvider = () => {
  // NOTE: Avoid hydration error
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return <ProModal />;
};
