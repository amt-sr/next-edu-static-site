import type { NavKey } from '@/types';
import { NAV } from '@/constants';
import { useEffect, useRef, useState } from 'react';

type HeaderProps = {
  current: NavKey;
};
export default function Header({ current }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  // Close drawer on outside click
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);
  const hvUl = 'hover:underline';
  const ul = 'underline';
  return (
    <header className='bg-teal-600 text-white py-6 px-4'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Greenfield International School</h1>
        {/* Desktop Nav */}
        <nav className='space-x-4 hidden md:block'>
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
          <a href='/contact' className={current === NAV.Contact ? ul : hvUl}>
            Contact
          </a>
        </nav>
        {/* Hamburger Icon for Mobile */}
        <button
          ref={buttonRef}
          className='md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none cursor-pointer'
          onClick={() => setMenuOpen((open) => !open)}
          aria-label='Toggle navigation menu'>
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-transform ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
        </button>
      </div>
      {/* Mobile Nav Drawer */}
      {menuOpen && (
        <nav
          ref={drawerRef}
          className='md:hidden bg-teal-700 text-white px-4 py-4 rounded-lg mt-2 flex flex-col gap-4 animate-fade-in'>
          <a
            href='/'
            className={current === NAV.Home ? ul : hvUl}
            onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a
            href='/about'
            className={current === NAV.About ? ul : hvUl}
            onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a
            href='/academics'
            className={current === NAV.Academics ? ul : hvUl}
            onClick={() => setMenuOpen(false)}>
            Academics
          </a>
          <a
            href='/admissions'
            className={current === NAV.Admissions ? ul : hvUl}
            onClick={() => setMenuOpen(false)}>
            Admissions
          </a>
          <a
            href='/contact'
            className={current === NAV.Contact ? ul : hvUl}
            onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
