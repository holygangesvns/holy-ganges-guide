/**
 * 24 Hours in Varanasi - Holy Ganges Dorms Guest Guide
 * Design Philosophy: Sacred Minimalism
 * - Warm saffron and terracotta tones reflecting Hindu spirituality
 * - Generous whitespace and meditative pacing
 * - Elegant typography (Playfair Display for headings, Lato for body)
 * - Subtle animations that enhance without overwhelming
 */

import { MapPin, Clock, Utensils, Navigation } from 'lucide-react';
import { MapView } from '@/components/Map';

export default function Home() {
  const handleMapReady = (map: google.maps.Map) => {
    // Holy Ganges Dorms coordinates (Assi Ghat area)
    const holyGangesDorms = { lat: 25.29666039994198, lng: 82.99789490933955 };
    
    // Key destinations
    const assiGhat = { lat: 25.28876188346205, lng: 83.00683457105292 };
    const dashashwamedh = { lat: 25.30624577674882, lng: 83.01023012819441 };
    const pahalwanLassi = { lat: 25.289820633466604, lng: 83.0047329131514 };
    const bharatSilkHouse = { lat: 25.296459282055686, lng: 82.99785655692435 };
    const jaikaraSilkHouse = { lat: 25.324138644934663, lng: 83.00345620358699 };
    const shreeJi = { lat: 25.315965756271098, lng: 83.01631345331059 };
    
    // Set map center to Holy Ganges Dorms
    map.setCenter(holyGangesDorms);
    map.setZoom(15);
    
    // Add markers
    const holyGangesMarker = new google.maps.Marker({
      position: holyGangesDorms,
      map: map,
      title: 'Holy Ganges Dorms',
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    });
    
    const assiMarker = new google.maps.Marker({
      position: assiGhat,
      map: map,
      title: 'Assi Ghat',
      icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    });
    
    const dashashwamedMarker = new google.maps.Marker({
      position: dashashwamedh,
      map: map,
      title: 'Dashashwamedh Ghat (Ganga Aarti)',
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
    });
    
    const pahalwanMarker = new google.maps.Marker({
      position: pahalwanLassi,
      map: map,
      title: 'Pahalwan Lassi Bhandar',
      icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
    });
    
    const bharatMarker = new google.maps.Marker({
      position: bharatSilkHouse,
      map: map,
      title: 'Bharat Silk House',
      icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
    });
    
    const jaikaraMarker = new google.maps.Marker({
      position: jaikaraSilkHouse,
      map: map,
      title: 'Jaikara Silk House',
      icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
    });
    
    const shreeJiMarker = new google.maps.Marker({
      position: shreeJi,
      map: map,
      title: 'Shree Ji',
      icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
    });
    
    // Draw route from Holy Ganges Dorms to Assi Ghat
    new google.maps.Polyline({
      path: [holyGangesDorms, assiGhat],
      geodesic: true,
      strokeColor: '#D4A574',
      strokeOpacity: 0.7,
      strokeWeight: 3,
      map: map,
    });
    
    // Draw route to Dashashwamedh Ghat
    new google.maps.Polyline({
      path: [assiGhat, dashashwamedh],
      geodesic: true,
      strokeColor: '#B85C3C',
      strokeOpacity: 0.5,
      strokeWeight: 2,
      map: map,
    });
    
    // Add info windows
    holyGangesMarker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: '<div style="color: #2C2C2C; font-family: Lato, sans-serif;"><strong>Holy Ganges Dorms</strong><br/>Your starting point</div>',
      });
      infoWindow.open(map, holyGangesMarker);
    });
    
    dashashwamedMarker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: '<div style="color: #2C2C2C; font-family: Lato, sans-serif;"><strong>Dashashwamedh Ghat</strong><br/>Ganga Aarti at 6-7 PM</div>',
      });
      infoWindow.open(map, dashashwamedMarker);
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/3feaBiwoKqCAZU3tsnFXWU/1_a6b69119.jpg" alt="Holy Ganges Dorms" className="w-10 h-10 rounded-full object-cover" />
            <h1 className="text-lg font-semibold text-primary">Holy Ganges Dorms</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#map" className="text-sm hover:text-primary transition-colors">Walking Map</a>
            <a href="#food" className="text-sm hover:text-primary transition-colors">Street Food</a>
            <a href="#shopping" className="text-sm hover:text-primary transition-colors">Treasures</a>
            <a href="#aarti" className="text-sm hover:text-primary transition-colors">Aarti</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/3feaBiwoKqCAZU3tsnFXWU/varanasi-hero-ganges-MfaFdsg4CvjcKKXqUvdhnr.webp"
          alt="Ganges River at sunrise"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container text-center text-white">
          <h2 className="hero-text mb-4 drop-shadow-lg">24 Hours in Varanasi</h2>
          <p className="text-xl md:text-2xl font-light drop-shadow-md mb-8">
            A sacred journey through the City of Light
          </p>
          <a
            href="#map"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium"
          >
            <Navigation className="w-5 h-5" />
            Begin Your Journey
          </a>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="section-divider container py-16 md:py-24">
        <div className="mb-12">
          <h2 className="section-heading">Walking Map & Routes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            From Holy Ganges Dorms, explore the sacred ghats of Varanasi. The journey begins at your doorstep and leads you through the heart of this ancient city.
          </p>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-border">
          <MapView onMapReady={handleMapReady} />
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="fade-in">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Assi Ghat</h3>
                <p className="text-muted-foreground">15-19 min walk • 1.2 km</p>
                <p className="text-sm mt-2">The peaceful southern ghat, perfect for morning walks and observing local rituals.</p>
              </div>
            </div>
          </div>

          <div className="fade-in">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Dashashwamedh Ghat</h3>
                <p className="text-muted-foreground">25-30 min walk • 2.1 km</p>
                <p className="text-sm mt-2">The main ghat where the spectacular Ganga Aarti ceremony takes place each evening.</p>
              </div>
            </div>
          </div>

          <div className="fade-in">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Hanuman Ghat</h3>
                <p className="text-muted-foreground">14 min walk</p>
                <p className="text-sm mt-2">A quieter ghat dedicated to Lord Hanuman, ideal for contemplative moments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section id="food" className="section-divider bg-secondary/20 py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="section-heading">Hidden Street Food Gems</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover authentic Varanasi flavors at these beloved local spots. Each offers a unique taste of the city's culinary heritage.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/3feaBiwoKqCAZU3tsnFXWU/varanasi-food-street-SaeuPKDwF8bjRJjLrwSU2u.webp"
              alt="Street food in Varanasi"
              className="w-full h-96 object-cover rounded-lg mb-12 shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Food Spot 1 */}
            <div className="timing-card fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="food-badge">1</div>
                <h3 className="text-2xl font-semibold text-primary">Pahalwan Lassi</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                <strong>Location:</strong> Lanka Road, near Ravidass Gate
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Specialty:</strong> Famous "Pehelwan Lassi" - creamy, delicious yogurt-based drink
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                This tiny 8x12 foot shop has become legendary among locals and tourists. The lassi is freshly made with pure milk and natural ingredients. A must-try for an authentic taste of Varanasi.
              </p>
              <p className="text-sm font-semibold text-primary">
                Best time: Morning or afternoon
              </p>
            </div>

            {/* Food Spot 2 */}
            <div className="timing-card fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="food-badge">2</div>
                <h3 className="text-2xl font-semibold text-primary">Shree Ji</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                <strong>Location:</strong> Near Dashashwamedh Ghat
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Specialty:</strong> Traditional Varanasi street food and sweets
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                A beloved local favorite known for authentic Banarasi cuisine and traditional sweets. Shree Ji offers an intimate glimpse into Varanasi's culinary heritage with generous portions and honest prices. Perfect for experiencing genuine local flavors in a welcoming atmosphere.
              </p>
              <p className="text-sm font-semibold text-primary">
                Best time: Morning to evening
              </p>
            </div>

            {/* Food Spot 3 */}
            <div className="timing-card fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="food-badge">3</div>
                <h3 className="text-2xl font-semibold text-primary">Pappu Chai</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                <strong>Location:</strong> Assi Ghat
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Specialty:</strong> Traditional chai prepared the old-fashioned way
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                A simple yet iconic tea stall where locals gather. Pappu Chai is known for its authentic preparation using traditional methods. The perfect companion to your ghat explorations, offering warmth and local connection.
              </p>
              <p className="text-sm font-semibold text-primary">
                Best time: Early morning or evening
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping Section - Treasures */}
      <section id="shopping" className="section-divider bg-secondary/20 py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="section-heading">Treasures of Varanasi</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover authentic Varanasi craftsmanship. These trusted shops offer premium handwoven textiles and traditional Benarasi sarees at fair prices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Shop 1 */}
            <div className="timing-card fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="food-badge">1</div>
                <h3 className="text-2xl font-semibold text-primary">Bharat Silk House</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                <strong>Location:</strong> Bhelupura, near Brahmakumari Vishwavidyalaya
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Specialty:</strong> Premium Benarasi silk sarees and traditional handwoven textiles
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Established in 1980, Bharat Silk House is renowned as one of Varanasi's finest Benarasi saree wholesalers. With a perfect 5.0 rating on Google and over 576 customer reviews, they offer authentic handwoven sarees at wholesale prices. The polite staff and fair pricing (no travel agents allowed) make it a trusted destination for genuine Benarasi silk.
              </p>
              <p className="text-sm font-semibold text-primary">
                Best time: Morning to afternoon
              </p>
            </div>

            {/* Shop 2 */}
            <div className="timing-card fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="food-badge">2</div>
                <h3 className="text-2xl font-semibold text-primary">Jaikara Silk House</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                <strong>Location:</strong> Central Varanasi
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Specialty:</strong> Authentic Benarasi sarees and silk textiles
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                A trusted name in Varanasi's textile industry, Jaikara Silk House offers a wide selection of traditional Benarasi sarees with intricate zari work and authentic patterns. Known for quality craftsmanship and competitive pricing, it's an excellent destination for both retail and wholesale purchases of genuine handwoven silk.
              </p>
              <p className="text-sm font-semibold text-primary">
                Best time: Morning to afternoon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ganga Aarti Section */}
      <section id="aarti" className="section-divider container py-16 md:py-24">
        <div className="mb-12">
          <h2 className="section-heading">Ganga Aarti Ceremony</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Experience the most sacred ritual of Varanasi. The Ganga Aarti is a breathtaking ceremony of devotion, fire, and spirituality that has been performed for centuries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/3feaBiwoKqCAZU3tsnFXWU/varanasi-aarti-evening-o2QkEGJE9N2pmpHoQCYXAX.webp"
              alt="Ganga Aarti ceremony"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div>
            <div className="timing-card mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Evening Aarti</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Summer (March - September)</p>
                  <p className="text-2xl font-semibold text-primary">7:00 PM</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Winter (October - February)</p>
                  <p className="text-2xl font-semibold text-primary">6:00 - 6:30 PM</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-1">Duration</p>
                  <p className="text-lg font-semibold">Approximately 45 minutes</p>
                </div>
              </div>
            </div>

            <div className="timing-card">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Morning Aarti</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Assi Ghat</p>
                  <p className="text-2xl font-semibold text-primary">4:30 - 5:00 AM</p>
                </div>
                <p className="text-sm text-muted-foreground pt-4 border-t border-border">
                  A peaceful, intimate experience with fewer crowds. Perfect for a meditative start to your day.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 border border-border">
            <h4 className="font-semibold text-lg mb-4 text-primary">What to Expect</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Priests in traditional attire performing sacred rituals</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Hundreds of oil lamps (diyas) creating a golden glow</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Sacred fire reflecting off the Ganges River</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Chanting and bells creating a spiritual atmosphere</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Crowds of devotees and visitors from around the world</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 border border-border">
            <h4 className="font-semibold text-lg mb-4 text-primary">Visitor Tips</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Arrive 30-45 minutes early to secure a good spot</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Wear comfortable shoes—you'll be standing for 45 minutes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Bring a light shawl or jacket, especially in winter</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Keep your phone secure in crowded areas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Respect the sacred nature of the ceremony</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="section-divider bg-secondary/20 py-16 md:py-24">
        <div className="container">
          <h2 className="section-heading">Sample 24-Hour Itinerary</h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  1
                </div>
                <div className="w-1 h-24 bg-border mt-2"></div>
              </div>
              <div className="pb-8">
                <h4 className="text-xl font-semibold mb-2">Early Morning (4:30 AM)</h4>
                <p className="text-muted-foreground">
                  Wake early and head to Assi Ghat for the peaceful morning Aarti. Experience the spiritual awakening of the city as pilgrims gather for this sacred ceremony.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  2
                </div>
                <div className="w-1 h-24 bg-border mt-2"></div>
              </div>
              <div className="pb-8">
                <h4 className="text-xl font-semibold mb-2">Morning (7:00 AM - 10:00 AM)</h4>
                <p className="text-muted-foreground">
                  Enjoy breakfast and explore the narrow lanes of Varanasi. Visit local temples and experience the authentic morning energy of the city. Stop at Pappu Chai for traditional chai.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  3
                </div>
                <div className="w-1 h-24 bg-border mt-2"></div>
              </div>
              <div className="pb-8">
                <h4 className="text-xl font-semibold mb-2">Late Morning (10:00 AM - 1:00 PM)</h4>
                <p className="text-muted-foreground">
                  Explore Assi Ghat and surrounding areas. Visit local shops and get a taste of Varanasi's vibrant street culture. Try Bhokal Chaat for authentic street snacks.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  4
                </div>
                <div className="w-1 h-24 bg-border mt-2"></div>
              </div>
              <div className="pb-8">
                <h4 className="text-xl font-semibold mb-2">Afternoon (1:00 PM - 4:00 PM)</h4>
                <p className="text-muted-foreground">
                  Rest at your accommodation or explore nearby areas. Visit Pahalwan Lassi Bhandar for a refreshing lassi. Take time to reflect and prepare for the evening ceremony.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  5
                </div>
                <div className="w-1 h-24 bg-border mt-2"></div>
              </div>
              <div className="pb-8">
                <h4 className="text-xl font-semibold mb-2">Evening (4:00 PM - 8:00 PM)</h4>
                <p className="text-muted-foreground">
                  Head to Dashashwamedh Ghat for the magnificent evening Ganga Aarti. Arrive early to secure a good spot. Experience the spiritual climax of your Varanasi journey.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  6
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Night (8:00 PM onwards)</h4>
                <p className="text-muted-foreground">
                  Enjoy dinner at a local restaurant or café. Reflect on your spiritual journey through Varanasi. Rest and prepare for more exploration the next day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Holy Ganges Dorms</h4>
              <p className="text-sm text-muted-foreground">
                Your gateway to authentic Varanasi experiences
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#map" className="hover:text-primary transition-colors">Walking Map</a></li>
                <li><a href="#food" className="hover:text-primary transition-colors">Street Food</a></li>
                <li><a href="#shopping" className="hover:text-primary transition-colors">Treasures</a></li>
                <li><a href="#aarti" className="hover:text-primary transition-colors">Aarti</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground">
                Assi Ghat Road<br />
                Varanasi, India
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <p className="text-sm text-muted-foreground">
                24/7 Availability<br />
                Front Desk Support
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2026 Holy Ganges Dorms. Created with reverence for Varanasi's sacred heritage.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
