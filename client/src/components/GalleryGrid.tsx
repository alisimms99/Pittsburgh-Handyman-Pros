import { useState } from "react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: "kitchen" | "bathroom" | "general";
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "kitchen", label: "Kitchen Remodeling" },
    { id: "bathroom", label: "Bathroom Renovation" },
    { id: "general", label: "General Work" },
  ];

  const filteredImages = selectedCategory === "all" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Gallery Tabs */}
      <div className="flex flex-wrap justify-center mb-12 space-x-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 mb-2 ${
              selectedCategory === category.id
                ? "bg-steelers-gold text-steelers-black"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="gallery-item relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => openLightbox(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <i className="fas fa-expand-arrows-alt text-2xl"></i>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h4 className="text-white font-semibold">{image.title}</h4>
              <p className="text-gray-300 text-sm">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-2xl hover:text-steelers-gold transition-colors duration-300"
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-xl font-semibold mb-2">{lightboxImage.title}</h3>
              <p className="text-gray-300">{lightboxImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
