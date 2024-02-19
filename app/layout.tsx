// npm imports
import { Metadata } from 'next';
import { ReactNode } from 'react';

// local imports
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// metadata
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('nextjs14dashboard.vercel.app'),
};

// root layout
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
