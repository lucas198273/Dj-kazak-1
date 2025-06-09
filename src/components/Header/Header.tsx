import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed inset-x-0 top-0 h-20 bg-white text-black z-50 shadow-lg">
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

        {/* Logo Centralizada */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none md:pointer-events-auto">
          <Link to="/">
            <img
              src="/assets/logo3.png"
              alt="Logo"
              className="h-25 w-auto object-contain"
              loading="lazy"
            />
          </Link>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 font-medium text-black">
          <Link to="/" className="hover:text-blue-700 transition">Início</Link>
          <Link to="/about" className="hover:text-blue-700 transition">Sobre</Link>
        </nav>
      </div>

      {/* Menu Mobile */}
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
