import { ToastProvider } from '@/shared/providers/ToastProvider';
import type { Metadata } from 'next';
import { Nanum_Gothic } from 'next/font/google';
import '../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import ReactQueryProvider from '@/shared/providers/QueryClientProvider';
import { IMAGES } from '@/shared/constants';

const nanumGothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: '위버 상품 페이지',
  description: '프론트엔드 코딩 사전 과제',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${nanumGothic.className} min-h-screen`}>
        <ToastProvider />
        <ReactQueryProvider>
          <header className="w-full px-6 py-4 h-16">
            <Link href="/products">
              <Image src={IMAGES.LOGO_URL} alt="Wiber Logo" width={100} height={100} />
            </Link>
          </header>
          <main className="h-[calc(100vh-64px)]">{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
