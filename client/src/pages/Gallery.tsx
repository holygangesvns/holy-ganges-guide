/*
 * Photo Gallery - Holy Ganges Dorms
 */

import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'dorms' | 'common' | 'river' | 'views' | 'lobby' | 'washrooms';
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
    description: 'Well-maintained dorm rooms with comfortable bunk beds'
  },
  {
    id: '2',
    src: '/assets/gallery/dorm_2.jpg',
    alt: 'Spacious Dorm Interior',
    category: 'dorms',
    title: 'Spacious Accommodations',
    description: 'Bright and airy dorm spaces'
  },
  {
    id: '3',
    src: '/assets/gallery/common_1.jpg',
    alt: 'Common Area Lounge',
    category: 'common',
    title: 'Social Common Areas',
    description: 'Perfect for meeting fellow travelers'
  },
  {
    id: '4',
    src: '/assets/gallery/common_2.jpg',
    alt: 'Dining Space',
    category: 'common',
    title: 'Common Balcony',
    description: 'Views, relaxation, yoga'
  },
  {
    id: '5',
    src: '/assets/gallery/river_1.jpg',
    alt: 'Ghats',
    category: 'river',
    title: 'Sacred Ghats View',
    description: 'Beautiful Varanasi ghats'
  },
  {
    id: '6',
    src: '/assets/gallery/river_2.jpg',
    alt: 'River Ganges',
    category: 'river',
    title: 'River Ganges Panorama',
    description: 'Stunning panoramic views'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'dorms' | 'common' | 'river' | 'views' | 'lobby' | 'washrooms'>('all');

  const filteredImages =
    activeFilter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const categoryLabels = {
    dorms: '🛏️ Dorm Rooms',
    common: '🏠 Common Areas',
    river: '🌊 River Views',
    views: '🌄 Views',
    lobby: '🏨 Lobby',
    washrooms: '🚿 Washrooms'
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

     {/* Gallery Grid */}
<section className="py-16">
  <div className="container">
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
      {filteredImages.map((image) => (
        <div
          key={image.id}
          onClick={() => setSelectedImage(image)}
          className="group cursor-pointer mb-6 break-inside-avoid overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="relative overflow-hidden bg-gray-100">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
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

      {/* Lightbox */}
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
              className="absolute top-4 right-4 text-white"
            >
              <X size={28} />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full rounded-lg"
            />

            <div className="mt-4 bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
