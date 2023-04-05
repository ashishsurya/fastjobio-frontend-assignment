'use client';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { DM_Sans } from 'next/font/google';

const dm_Sans = DM_Sans({ weight: ['400', '500', '700'], subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Toaster position='top-center' />
        <div className={dm_Sans.className}>{children}</div>
      </body>
    </html>
  );
}
