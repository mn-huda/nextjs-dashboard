// npm imports
import { ReactNode } from 'react';

// local imports
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// root layout
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
