import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import { ModalProvider } from '@/components/ModalProvider';
import ToasterProvider from '@/components/ToasterProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'aI_genT',
  description: 'AI Tools for text and image generation',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <ClerkProvider>
    <html lang='en'>
      <body className={inter.className}>
        <ToasterProvider />
        <ModalProvider />
        {children}
      </body>
    </html>
  </ClerkProvider>
);

export default RootLayout;
