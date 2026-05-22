import { Link } from "wouter";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-[#d8c7b0]">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
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

          <Link href="/">Home</Link>

          <Link href="/gallery">Gallery</Link>

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

          <Link href="/walking-map">Location</Link>

          <Link href="/street-food">Street Food</Link>

          <Link href="/treasures">Treasures</Link>

          <Link href="/aarti">Aarti</Link>

          <Link href="/backpack">Backpack</Link>

          <Link href="/support">Support</Link>

        </nav>
      </div>
    </header>
  )
}
