import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Icon menu & close (pakai lucide atau bebas lainnya)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed w-full z-50 px-6 py-4 transition-all duration-500 ${showNavbar ? 'top-0' : '-top-24'
        } bg-white/10 backdrop-blur-md`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="h-10">
          <img src="/assets/img/Mujo Studio.png" alt="Logo" className="h-12 w-auto " />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">Tentang</Link></li>
          <li><a href="#proyek" className="hover:underline">Project</a></li>
          <li><a href="#kontak" className="hover:underline">Kontak</a></li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur z-40 transform transition-transform duration-300 ${menuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="p-6 flex flex-col gap-6 text-white text-lg mt-20 items-center">
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/about" onClick={() => setMenuOpen(false)}>Tentang</a>
          <a href="#proyek" onClick={() => setMenuOpen(false)}>Project</a>
          <a href="#kontak" onClick={() => setMenuOpen(false)}>Kontak</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
