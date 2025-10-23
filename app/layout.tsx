import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import LiquidEther from '@/components/LiquidEther';

export const metadata: Metadata = {
  title: 'ALXC',
  description: 'ALXC site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-black text-white antialiased">
        <LiquidEther className="fixed inset-0 -z-10" />
        <Nav />
        {children}
      </body>
    </html>
  );
}
