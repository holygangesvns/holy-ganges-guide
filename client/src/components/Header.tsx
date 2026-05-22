import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-[#d8c7b0]">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            alt="Holy Ganges Dorms"
            className="h-12 w-12 rounded-full"
          />

          <h1 className="text-3xl font-serif text-[#c68b59]">
            Holy Ganges Dorms
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">

          <Link to="/">Home</Link>

          <Link to="/gallery">Gallery</Link>

          <a href="/#guest-testimonials">
            Reviews
          </a>

          <a
            href="https://wa.me/919151563046"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>

          <Link to="/walking-map">Location</Link>

          <Link to="/street-food">Street Food</Link>

          <Link to="/treasures">Treasures</Link>

          <Link to="/aarti">Aarti</Link>

          <Link to="/backpack">Backpack</Link>

          <Link to="/support">Support</Link>

        </nav>
      </div>
    </header>
  )
}
