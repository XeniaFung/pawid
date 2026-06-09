import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PawID',
  description: 'NFC pet identity card and health record web app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
