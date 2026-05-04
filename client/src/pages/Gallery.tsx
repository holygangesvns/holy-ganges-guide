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
  { id: '1', src: '/assets/gallery/dorm_1.jpg', alt: 'Dorm Beds', category: 'dorms', title: 'Dorm Beds', description: 'Comfortable dorm beds for a restful stay' },
  { id: '2', src: '/assets/gallery/dorm_2.jpg', alt: 'Dorm Beds with Lockers', category: 'dorms', title: 'Beds with Lockers', description: 'Secure lockers attached to every bed' },
  { id: '3', src: '/assets/gallery/Dorm 3.jpg', alt: 'Dorm Curtains', category: 'dorms', title: 'Private Curtains', description: 'Privacy curtains for each sleeping pod' },

  { id: '4', src: '/assets/gallery/common_1.jpg', alt: 'Common Area', category: 'common', title: 'Common Chill Area', description: 'Open space to relax and connect with others' },
  { id: '5', src: '/assets/gallery/common_2.jpg', alt: 'Balcony Chill Area', category: 'common', title: 'Balcony Lounge', description: 'Sit back and relax with a peaceful balcony vibe' },
  { id: '6', src: '/assets/gallery/Wallart.jpg', alt: 'Shiva Wall Art', category: 'common', title: 'Sacred Wall Art', description: 'Hand-painted meditative Shiva artwork' },

  { id: '7', src: '/assets/gallery/river_1.jpg', alt: 'Ganges View', category: 'river', title: 'Ganges View', description: 'Sacred river flowing beside the city' },
  { id: '8', src: '/assets/gallery/river_2.jpg', alt: 'Ganges Panorama', category: 'river', title: 'River Panorama', description: 'Wide peaceful views of the Ganges' },

  { id: '9', src: '/assets/gallery/Sunrise.jpg', alt: 'Sunrise', category: 'views', title: 'Golden Sunrise', description: 'Calm sunrise over Varanasi skyline' },
  { id: '10', src: '/assets/gallery/Sunset.jpg', alt: 'Sunset', category: 'views', title: 'Evening Sunset', description: 'Relaxing sunset by the river' },
  { id: '11', src: '/assets/gallery/balcony.jpg', alt: 'Balcony Seating', category: 'views', title: 'Balcony Seating', description: 'Chill with a chair and table setup' },
  { id: '12', src: '/assets/gallery/balconyy.jpg', alt: 'City View', category: 'views', title: 'City View Balcony', description: 'Open view overlooking the city' },
  { id: '13', src: '/assets/gallery/smoking.jpg', alt: 'Smoking Area', category: 'views', title: 'Smoking Zone', description: 'Dedicated open-air smoking area' },

  { id: '14', src: '/assets/gallery/lift.jpg', alt: 'Lift', category: 'lobby', title: 'Lift Access', description: 'Smooth lift connectivity across floors' },
  { id: '15', src: '/assets/gallery/reception.jpg', alt: 'Reception', category: 'lobby', title: 'Reception Desk', description: 'Friendly welcome and assistance' },

  { id: '16', src: '/assets/gallery/washroom.jpg', alt: 'Washroom', category: 'washrooms', title: 'Clean Washrooms', description: 'Hygienic and well-maintained spaces' },
  { id: '17', src: '/assets/gallery/water.jpg', alt: 'Water', category: 'washrooms', title: 'Water Purifier', description: 'Safe and clean drinking water facility' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredImages =
    activeFilter === 'all'
      ? galleryImages
      : galleryImages.filter(img => img.category === activeFilter);

  const categories = ['all', 'dorms', 'common', 'river', 'views', 'lobby', 'washrooms'];

  return (
    <div className="min-h-screen bg-[#f8f5f0]">

      {/* HERO */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-[#c19a6b] mb-4">
          Photo Gallery
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore the beauty of Holy Ganges Dorms through our curated collection of
          dorms, peaceful views, and sacred surroundings.
        </p>
      </section>

      {/* FILTERS */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm transition ${
              activeFilter === cat
                ? 'bg-[#c19a6b] text-white'
                : 'bg-white shadow hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="cursor-pointer group"
            >
              <div className="rounded-2xl overflow-hidden shadow hover:shadow-xl transition">

                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition"
                />

                <div className="p-4 bg-white">
                  <h3 className="font-semibold">{image.title}</h3>
                  <p className="text-sm text-gray-500">{image.description}</p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-3xl w-full p-4">
            <button onClick={() => setSelectedImage(null)}>
              <X className="text-white mb-3" />
            </button>
            <img src={selectedImage.src} className="rounded-lg" />
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-2xl font-semibold mb-6">
          Book Your Stay Now
        </h2>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="https://www.booking.com/" target="_blank" className="px-6 py-3 bg-black text-white rounded-xl">
            Booking.com
          </a>
          <a href="https://www.agoda.com/" target="_blank" className="px-6 py-3 border rounded-xl">
            Agoda
          </a>
          <a href="https://www.makemytrip.com/" target="_blank" className="px-6 py-3 border rounded-xl">
            MakeMyTrip
          </a>
        </div>
      </section>

    </div>
  );
}
