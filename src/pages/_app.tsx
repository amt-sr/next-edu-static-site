import { AppProps } from 'next/app';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import { useRouter } from 'next/router';
import { NavKey } from '@/types';

const routeToNavKey: Record<string, NavKey> = {
  '/': 'Home',
  '/about': 'About',
  '/academics': 'Academics',
  '/admissions': 'Admissions',
  '/gallery': 'Gallery',
  '/contact': 'Contact'
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const current = routeToNavKey[router.pathname];
  return (
    <>
      <Header current={current} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
