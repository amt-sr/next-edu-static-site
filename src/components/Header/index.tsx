import type { NavKey } from '@/types';
import { NAV } from '@/constants';

type HeaderProps = {
  current: NavKey;
};
export default function Header({ current }: HeaderProps) {
  const hvUl = 'hover:underline';
  const ul = 'underline';
  return (
    <header className='bg-teal-600 text-white py-6 px-4'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Greenfield International School</h1>
        <nav className='space-x-4'>
          <a href='/' className={current === NAV.Home ? ul : hvUl}>
            Home
          </a>
          <a href='about' className={current === NAV.About ? ul : hvUl}>
            About
          </a>
          <a href='/academics' className={current === NAV.Academics ? ul : hvUl}>
            Academics
          </a>
          <a href='/admissions' className={current === NAV.Admissions ? ul : hvUl}>
            Admissions
          </a>
          <a href='gallery' className={current === NAV.Gallery ? ul : hvUl}>
            Gallery
          </a>
          <a href='/contact' className={current === NAV.Contact ? ul : hvUl}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
