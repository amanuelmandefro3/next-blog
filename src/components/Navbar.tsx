'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Correct hook for Next.js 13+
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for hamburger menu

const Navbar = () => {
  const pathname = usePathname(); // Get the current path
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  // Function to determine active link class
  const getLinkClass = (path: string) => {
    return pathname === path ? 'text-blue-500 border-b-4 font-bold border-blue-500' : '';
  };

  return (
    <div className='flex justify-between items-center h-28 mx-8'>
      <div className='logo'>
        {/* Provide a valid src path for your logo */}
        <Image src="/logo-a2sv.svg" width={200} height={50} alt="logo" />
      </div>
      {/* Hamburger Icon for Small Screens */}
      <div className='lg:hidden flex items-center justify-end flex-1'>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-2xl'>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Menu Items for Large Screens */}
      <div className={`menu lg:flex hidden gap-8 items-center text-xl font-medium xl:font-semibold`}>
        <Link href="/" className={getLinkClass('/')}>Home</Link>
        <Link href="/teams" className={getLinkClass('/teams')}>Teams</Link>
        <Link href="/success-stories" className={getLinkClass('/success-stories')}>Success Stories</Link>
        <Link href="/about" className={getLinkClass('/about')}>About us</Link>
        <Link href="/blogs" className={getLinkClass('/blogs')}>Blogs</Link>
        <Link href="/contact" className={getLinkClass('/contact')}>Contact</Link>
      </div>
      {/* Authentication Buttons for Large Screens */}
      <div className='authentication lg:flex hidden items-center gap-8 font-semibold xl:font-bold text-lg'>
        <Link href="/login" className={`border-2 rounded-lg border-blue-500 px-4 py-1`}>Login</Link>
        <Link href="/donate" className={`border-blue-500 bg-blue-500 text-white rounded-lg px-2 py-1`}>Donate</Link>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='lg:hidden absolute top-16 right-0 w-full bg-white shadow-md flex flex-col items-end pr-4'>
          <Link href="/" className={`${getLinkClass('/')} py-2`} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/teams" className={`${getLinkClass('/teams')} py-2`} onClick={() => setIsMenuOpen(false)}>Teams</Link>
          <Link href="/success-stories" className={`${getLinkClass('/success-stories')} py-2`} onClick={() => setIsMenuOpen(false)}>Success Stories</Link>
          <Link href="/about" className={`${getLinkClass('/about')} py-2`} onClick={() => setIsMenuOpen(false)}>About us</Link>
          <Link href="/blogs" className={`${getLinkClass('/blogs')} py-2`} onClick={() => setIsMenuOpen(false)}>Blogs</Link>
          <Link href="/contact" className={`${getLinkClass('/contact')} py-2`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link href="/login" className={`border-2 rounded-lg border-blue-500 px-4 py-1 my-2`} onClick={() => setIsMenuOpen(false)}>Login</Link>
          <Link href="/donate" className={`border-blue-500 bg-blue-500 text-white rounded-lg px-2 py-1 my-2`} onClick={() => setIsMenuOpen(false)}>Donate</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
