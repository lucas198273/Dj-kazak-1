import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <header
      data-aos="fade-down"
      className="fixed inset-x-0 top-0 h-20 bg-gradient-to-r bg-white text-black z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between relative">
        {/* Botão Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-black focus:outline-none"
          aria-label="Abrir menu"
          data-aos="fade-right"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Menu Desktop */}
        <nav
          className="hidden md:flex space-x-8 font-medium text-black"
          data-aos="fade-left"
        >
          <Link to="/" className="hover:text-blue-700 transition">Início</Link>
          <Link to="/about" className="hover:text-blue-700 transition">Sobre</Link>
        </nav>

        {/* Logo Centralizada */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 mt-6"
          data-aos="zoom-in"
        >
          <Link to="/">
            <img
              src="/assets/logo3.png"
              alt="Logo"
              className="h-30 w-auto object-contain"
            />
          </Link>
        </div>
      </div>

      {/* Menu Mobile: aparece só quando menuOpen for true */}
      {menuOpen && (
        <nav
          className="fixed top-20 left-0 w-64 h-[calc(100vh-5rem)] bg-white text-black shadow-lg md:hidden z-40 p-6 flex flex-col space-y-6"
          data-aos="fade-right"
        >
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-700 transition">Início</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-700 transition">Sobre</Link>
        </nav>
      )}
    </header>
  );
}
