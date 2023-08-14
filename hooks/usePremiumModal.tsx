import { create } from 'zustand';

interface usePremiumModalStoreProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const usePremiumModal = create<usePremiumModalStoreProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
