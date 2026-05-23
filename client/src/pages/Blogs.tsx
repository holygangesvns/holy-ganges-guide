import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Star, ArrowRight } from "lucide-react";
import { useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  slug: string;
  featured: boolean;
}

interface BlogDetail extends BlogPost {
  content: string;
  location: string;
  locationUrl: string;
  images: string[];
  rating: number;
  reviews: number;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Gopi Chaat Bhandar: A Taste of Authentic Varanasi Street Food",
    excerpt: "Discover the legendary chaat vendor that has been serving authentic Varanasi street food for generations. From crispy aloo tikki to tangy tomato chaat, experience the flavors that define the city.",
    category: "Food & Travel",
    date: "May 2026",
    readTime: "8 min read",
    author: "Holy Ganges Team",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/ngashiaHxdJH26MV4j7g68/varanasi_street_food_chaat-4d4a4KC8inBZpyQScYLdJ2.webp",
    slug: "gopi-chaat-bhandar",
    featured: true,
  },
  {
    id: "2",
    title: "Jaikara Silk House: Where Tradition Meets Elegance",
    excerpt: "Explore the finest Banarasi silk sarees at Jaikara Silk House. Learn about the craftsmanship, heritage, and exquisite designs that make Varanasi silk the most sought-after in India.",
    category: "Shopping & Culture",
    date: "May 2026",
    readTime: "7 min read",
    author: "Holy Ganges Team",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/ngashiaHxdJH26MV4j7g68/varanasi_silk_saree_shop-mngRBE5gENapPaX8fSGgUP.webp",
    slug: "jaikara-silk-house",
    featured: true,
  },
];

const blogDetails: Record<string, BlogDetail> = {
  "gopi-chaat-bhandar": {
    id: "1",
    title: "Gopi Chaat Bhandar: A Taste of Authentic Varanasi Street Food",
    excerpt: "Discover the legendary chaat vendor that has been serving authentic Varanasi street food for generations.",
    category: "Food & Travel",
    date: "May 2026",
    readTime: "8 min read",
    author: "Holy Ganges Team",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/ngashiaHxdJH26MV4j7g68/varanasi_street_food_chaat-4d4a4KC8inBZpyQScYLdJ2.webp",
    slug: "gopi-chaat-bhandar",
    featured: true,
    location: "Gopi Chaat Bhandar",
    locationUrl: "https://maps.app.goo.gl/HmFELDom295jCXFT8",
    images: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/ngashiaHxdJH26MV4j7g68/varanasi_street_food_chaat-4d4a4KC8inBZpyQScYLdJ2.webp"],
    rating: 4.2,
    reviews: 525,
    tags: ["street food", "chaat", "Varanasi", "authentic", "budget-friendly", "backpacker", "food travel"],
    content: `## The Heart of Varanasi's Street Food Culture

Nestled in the bustling lanes of Khojwan, Bhelupur, Gopi Chaat Bhandar stands as an iconic institution in Varanasi's culinary landscape. This humble yet legendary street food vendor has become a pilgrimage site for food enthusiasts, backpackers, and locals who seek authentic flavors of the holy city.

### A Legacy of Flavor

Walking up to Gopi Chaat Bhandar feels like stepping into the soul of Varanasi. The energetic stall is perpetually crowded with hungry customers — tourists and locals sharing the same wooden benches, the same stories, the same unforgettable experience.

### The Must-Try Specialties

**Tomato Chaat** - The undisputed star of the menu. Crispy papdi topped with boiled potatoes, chickpeas, and tangy tomato curry. At just Rs. 20-30, it's an absolute steal.

**Aloo Tikki** - Golden, crispy potato patties served with tamarind chutney and mint yogurt.

**Dahi Golgappa** - Hollow, crispy spheres filled with spiced potatoes and chickpeas, dunked into creamy yogurt.

**Pani Puri** - The classic street food that defines Indian snacking. The vendor's pani is legendary.

### Practical Information

**Location:** Peace Point Rd, near Union Bank of India, Khojwan, Bhelupur, Varanasi 221005

**Price Range:** Rs. 20-50 per item

**Operating Hours:** Open daily until 10 PM

**Best Time to Visit:** Early evening (5-8 PM) for the freshest preparations.

### The Verdict

Gopi Chaat Bhandar is a cultural institution. If you visit Varanasi and skip it, you've missed an essential piece of the city's soul.

**Rating:** 4.2/5 (525+ reviews)

**Perfect For:** Budget travelers, food enthusiasts, backpackers, families`,
  },
  "jaikara-silk-house": {
    id: "2",
    title: "Jaikara Silk House: Where Tradition Meets Elegance",
    excerpt: "Explore the finest Banarasi silk sarees at Jaikara Silk House.",
    category: "Shopping & Culture",
    date: "May 2026",
    readTime: "7 min read",
    author: "Holy Ganges Team",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/ngashiaHxdJH26MV4j7g68/varanasi_silk_saree_shop-mngRBE5gENapPaX8fSGgUP.webp",
    slug: "jaikara-silk-house",
    featured: true,
    location: "Jaikara Silk House",
    locationUrl: "https://maps.app.goo.gl/iGEdcKrGVmgraUVj7",
    images: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/ngashiaHxdJH26MV4j7g68/varanasi_silk_saree_shop-mngRBE5gENapPaX8fSGgUP.webp"],
    rating: 5.0,
    reviews: 6,
    tags: ["Banarasi silk", "sarees", "shopping", "Varanasi", "traditional", "craftsmanship", "silk weaving"],
    content: `## The Legacy of Banarasi Silk: Jaikara Silk House

In the heart of Varanasi's historic silk district lies Jaikara Silk House — a sanctuary for those seeking authentic Banarasi silk sarees that represent centuries of weaving mastery. This is not just a shop; it is a living museum of Indian textile heritage.

### The Soul of Banarasi Silk

Banarasi silk sarees are more than garments; they are investments in heritage. Each saree is a masterpiece created by skilled weavers who have inherited their craft through generations.

### Collections That Inspire

**Pure Katan Silk Sarees** - Made from 100% pure silk with intricate zari work, perfect for weddings and festive occasions.

**Gold Zari Embroidered Sarees** - The hallmark of Banarasi craftsmanship with intricate floral motifs hand-woven using real gold thread.

**Contemporary Designs** - Modern interpretations of classic Banarasi designs that appeal to younger buyers.

### Practical Information

**Location:** C 26, 36 A-4, Ramkatora Rd, Varanasi 221001

**Contact:** +91 86040 83953

**Operating Hours:** Open daily until 9 PM

**Payment:** Cash, card, and online transfers accepted

**Delivery:** Pan-India delivery available

### Supporting Artisans

By choosing Jaikara Silk House, you are making a conscious choice to support traditional artisans and weavers. You are investing in a craft that has been perfected over centuries and ensuring that this beautiful tradition continues for generations to come.

Every saree is a masterpiece. Every purchase is a vote for heritage, craftsmanship, and authenticity.

**Rating:** 5.0/5 (6 reviews)

**Perfect For:** Brides, collectors, gift-givers, anyone seeking authentic Banarasi silk sarees`,
  },
};

function renderContent(content: string) {
  return content.split("\n").map((line, i) => {
    if (line.startsWith("## ")) {
      return <h2 key={i} className="text-2xl font-serif font-bold mt-8 mb-4 text-gray-900">{line.slice(3)}</h2>;
    }
    if (line.startsWith("### ")) {
      return <h3 key={i} className="text-xl font-semibold mt-6 mb-3 text-gray-800">{line.slice(4)}</h3>;
    }
    if (line.trim() === "") {
      return <br key={i} />;
    }
    const parts = line.split(/(\*\*[^*]+\*\*)/);
    return (
      <p key={i} className="text-gray-700 leading-relaxed mb-2">
        {parts.map((part, j) =>
          part.startsWith("**") && part.endsWith("**")
            ? <strong key={j}>{part.slice(2, -2)}</strong>
            : part
        )}
      </p>
    );
  });
}

export default function Blogs() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const selectedPost = selectedSlug ? blogDetails[selectedSlug] : null;

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">

          <button onClick={() => setSelectedSlug(null)} className="mb-6 text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
            ← Back to Blogs
          </button>

          <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-64 object-cover rounded-2xl mb-6" />

          <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            {selectedPost.category}
          </span>

          <h1 className="text-3xl font-serif font-bold mt-4 mb-2 text-gray-900">{selectedPost.title}</h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1"><Clock size={14} /> {selectedPost.readTime}</span>
            <span className="flex items-center gap-1"><Star size={14} className="text-yellow-500" /> {selectedPost.rating} ({selectedPost.reviews} reviews)</span>
          </div>

          <button onClick={() => window.open(selectedPost.locationUrl, "_blank")} className="flex items-center gap-1 text-sm text-blue-600 hover:underline mb-8">
            <MapPin size={14} /> {selectedPost.location}
          </button>

          <div className="text-gray-700">{renderContent(selectedPost.content)}</div>

          <hr className="my-8 border-gray-200" />

          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">Tags</p>
            <div className="flex flex-wrap gap-2">
              {selectedPost.tags.map((tag) => (
                <span key={tag} className="text-xs bg-yellow-50 text-yellow-800 border border-yellow-200 px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl overflow-hidden relative" style={{ backgroundImage: `url(${selectedPost.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Explore?</h3>
              <p className="text-white/90 mb-6">Visit {selectedPost.location} and experience the magic of Varanasi firsthand.</p>
              <Button onClick={() => window.open(selectedPost.locationUrl, "_blank")} variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 gap-2">
                Get Directions Now <ArrowRight size={16} />
              </Button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">From the Ghats</h1>
        <p className="text-gray-500 mb-10">Hidden spots, local stories, and honest guides from Holy Ganges Dorms.</p>
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border border-gray-200 rounded-2xl hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedSlug(post.slug)}>
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">{post.category}</span>
                <h2 className="text-lg font-semibold text-gray-900 mt-3 mb-2 leading-snug">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  <Button variant="ghost" size="sm" className="text-primary text-xs p-0 h-auto hover:bg-transparent" onClick={(e) => { e.stopPropagation(); setSelectedSlug(post.slug); }}>
                    Read more <ArrowRight size={12} className="ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
