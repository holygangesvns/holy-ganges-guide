/*
 * Photo Gallery - Holy Ganges Dorms
 * Showcasing dorms, common areas, and river views
 * Design: Sacred Minimalism with elegant image presentation
 */

import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'dorms' | 'common' | 'river' | 'views';
  title: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/assets/gallery/dorm_1.jpg',
    alt: 'Dorm Room with Bunk Beds',
    category: 'dorms',
    title: 'Comfortable Dorm Rooms',
    description: 'Well-maintained dorm rooms with comfortable bunk beds and clean facilities'
  },
  {
    id: '2',
    src: '/assets/gallery/dorm_2.jpg',
    alt: 'Spacious Dorm Interior',
    category: 'dorms',
    title: 'Spacious Accommodations',
    description: 'Bright and airy dorm spaces designed for comfort and relaxation'
  },
  {
    id: '3',
    src: '/assets/gallery/common_1.jpg',
    alt: 'Common Area Lounge',
    category: 'common',
    title: 'Social Common Areas',
    description: 'Welcoming common areas perfect for meeting fellow travelers'
  },
  {
    id: '4',
    src: '/assets/gallery/common_2.jpg',
    alt: 'Dining and Recreation Space',
    category: 'common',
    title: 'Dining & Recreation',
    description: 'Comfortable spaces for dining, socializing, and relaxation'
  },
  {
    id: '5',
    src: '/assets/gallery/river_1.jpg',
    alt: 'Varanasi Ghats at Sunrise',
    category: 'river',
    title: 'Sacred Ghats View',
    description: 'Beautiful views of the sacred Varanasi ghats from the dorms'
  },
  {
    id: '6',
    src: '/assets/gallery/river_2.jpg',
    alt: 'River Ganges Panorama',
    category: 'river',
    title: 'River Ganges Panorama',
    description: 'Stunning panoramic views of the holy River Ganges'
  },
  {
  id: '7',
  src: '/assets/gallery/Dorm 3.jpg',
  alt: 'Dorm Beds with Curtains and Lockers',
  category: 'dorms',
  title: 'Private & Secure Sleeping Pods',
  description: 'Each bed features privacy curtains and personal lockers for a comfortable and secure stay'
},
{
  id: '8',
  src: '/assets/gallery/Sunrise.jpg',
  alt: 'Sunrise over Varanasi',
  category: 'views',
  title: 'Golden Sunrise',
  description: 'Experience the serene beauty of sunrise over the sacred ghats'
},
{
  id: '9',
  src: '/assets/gallery/Sunset.jpg',
  alt: 'Sunset over Ganges',
  category: 'views',
  title: 'Peaceful Sunset',
  description: 'Unwind with breathtaking sunset views along the holy Ganges'
},
{
  id: '10',
  src: '/assets/gallery/Wallart.jpg',
  alt: 'Lord Shiva Wall Art',
  category: 'common',
  title: 'Sacred Wall Art',
  description: 'A beautifully painted depiction of Lord Shiva enhancing the spiritual ambiance of the space'
}
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'dorms' | 'common' | 'river' | 'views'>('all');

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const categoryLabels = {
    dorms: '🛏️ Dorm Rooms',
    common: '🏠 Common Areas',
    river: '🌊 River Views',
    views: '🌄 Views'
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/3feaBiwoKqCAZU3tsnFXWU/1_a6b69119.jpg" alt="Holy Ganges Dorms" className="w-10 h-10 rounded-full object-cover" />
            <h1 className="text-lg font-semibold text-primary">Holy Ganges Dorms</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="/" className="text-sm hover:text-primary transition-colors">Home</a>
            <a href="/#map" className="text-sm hover:text-primary transition-colors">Walking Map</a>
            <a href="/#food" className="text-sm hover:text-primary transition-colors">Street Food</a>
            <a href="/#shopping" className="text-sm hover:text-primary transition-colors">Treasures</a>
            <a href="/#aarti" className="text-sm hover:text-primary transition-colors">Aarti</a>
            <a href="/#packing" className="text-sm hover:text-primary transition-colors">Backpack</a>
            <a href="/gallery" className="text-sm font-semibold text-primary">Gallery</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-background">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Photo Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the beauty of Holy Ganges Dorms through our curated collection of images showcasing our comfortable accommodations, welcoming common areas, and breathtaking river views.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Photos
            </button>
            {(Object.entries(categoryLabels) as [keyof typeof categoryLabels, string][]).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key as 'dorms' | 'common' | 'river')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === key
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end">
                    <div className="w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors z-10"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 bg-white rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-primary mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600 mb-4">{selectedImage.description}</p>
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                {categoryLabels[selectedImage.category]}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-background to-amber-50">
        <div className="container text-center">
          <h3 className="text-3xl font-serif font-bold text-primary mb-6">Ready to Experience Holy Ganges Dorms?</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.booking.com/hotel/in/holy-ganges-dorms-varanasi.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              📖 Book on Booking.com
            </a>
            <a
              href="https://www.agoda.com/en-in/holy-ganges-dorms/hotel/varanasi-in.html?cid=1844104&ds=mdj5Iwhl6Tfi%2FCIB"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              🏨 Book on Agoda
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-border py-8">
        <div className="container text-center text-gray-600 text-sm">
          <p>Made with <span className="text-red-500">❤️</span> by Manus</p>
        </div>
      </footer>
    </div>
  );
}
