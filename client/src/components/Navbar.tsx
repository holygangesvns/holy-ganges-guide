import { useState } from 'react';
import { X, Menu } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
      
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/3feaBiwoKqCAZU3tsnFXWU/1_a6b69119.jpg"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold text-[#c19a6b]">
            Holy Ganges Dorms
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
          <a href="/" className="hover:text-[#c19a6b]">Home</a>
          <a href="/#map" className="hover:text-[#c19a6b]">Walking Map</a>
          <a href="/#food" className="hover:text-[#c19a6b]">Street Food</a>
          <a href="/#shopping" className="hover:text-[#c19a6b]">Treasures</a>
          <a href="/#aarti" className="hover:text-[#c19a6b]">Aarti</a>
          <a href="/#packing" className="hover:text-[#c19a6b]">Backpack</a>
          <a href="/gallery" className="hover:text-[#c19a6b]">Gallery</a>
        </nav>

        {/* HAMBURGER */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={26} />
        </button>

      </div>

      {/* DRAWER */}
      {menuOpen && (
        <div className="fixed inset-0 z-50">

          {/* OVERLAY */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          {/* SIDE MENU */}
          <div className="absolute right-0 top-0 h-screen w-72 bg-white shadow-2xl p-6 flex flex-col gap-6 overflow-y-auto">

            {/* CLOSE */}
            <button
              className="self-end"
              onClick={() => setMenuOpen(false)}
            >
              <X size={28} />
            </button>

            {/* LINKS */}
            <nav className="flex flex-col gap-5 text-lg text-gray-700">

              <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="/#map" onClick={() => setMenuOpen(false)}>Walking Map</a>
              <a href="/#food" onClick={() => setMenuOpen(false)}>Street Food</a>
              <a href="/#shopping" onClick={() => setMenuOpen(false)}>Treasures</a>
              <a href="/#aarti" onClick={() => setMenuOpen(false)}>Aarti</a>
              <a href="/#packing" onClick={() => setMenuOpen(false)}>Backpack</a>
              <a href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</a>

            </nav>

          </div>
        </div>
      )}
    </header>
  );
}
