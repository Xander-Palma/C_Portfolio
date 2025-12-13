import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";

// Automatically import all images from the gallery folder
const imageModules = import.meta.glob("../assets/gallery/*", { eager: true });
const galleryImages = Object.entries(imageModules).map(([path, mod], idx) => {
  // Extract filename for alt text
  const filename = path.split("/").pop() || `Image ${idx + 1}`;
  return {
    id: filename,
    src: (mod as { default: string }).default,
    alt: filename,
  };
});

galleryImages.sort((a, b) => a.id.localeCompare(b.id)); // Optional: sort alphabetically

const Photos = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Close lightbox on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="page-title animate-fade-in">Gallery</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {galleryImages.map((image, idx) => (
            <div
              key={image.id}
              className="image-card aspect-square animate-fade-in"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-200 hover:scale-105"
                onClick={() => setActiveImage(image.src)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="mb-4 text-sm px-3 py-1 bg-transparent border-b-2 border-transparent hover:border-black"
              onClick={() => setActiveImage(null)}
            >
              Close
            </button>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={activeImage}
                alt="Enlarged"
                className="w-full h-auto max-h-[80vh] object-contain bg-black"
              />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Photos;
