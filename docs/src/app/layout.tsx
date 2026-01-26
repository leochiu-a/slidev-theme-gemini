import { Inter } from 'next/font/google';
import { Provider } from '@/components/provider';
import './global.css';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Slidev Theme Gemini',
  description: 'Slidev Theme Gemini is a theme for Slidev',
  openGraph: {
    images: '/cover.webp',
  },
  metadataBase: new URL('https://leochiu-a.github.io/slidev-theme-gemini/'),
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
