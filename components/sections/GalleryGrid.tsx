"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Define the gallery images
const galleryImages = [
  { src: "/photos_batch_2/ranway1.webp", alt: "Ranway Gallery Image 20" },
  { src: "/photos_batch_2/ranway2.webp", alt: "Ranway Gallery Image 21" },
  { src: "/photos_batch_2/ranway3.webp", alt: "Ranway Gallery Image 22" },
  { src: "/photos_batch_2/ranway4.webp", alt: "Ranway Gallery Image 23" },
  { src: "/photos_batch_2/ranway5.webp", alt: "Ranway Gallery Image 24" },
  { src: "/photos_batch_2/ranway6.webp", alt: "Ranway Gallery Image 25" },
  { src: "/photos_batch_2/ranway7.webp", alt: "Ranway Gallery Image 26" },
  { src: "/photos_batch_2/ranway8.webp", alt: "Ranway Gallery Image 27" },
  { src: "/photos_batch_2/ranway9.webp", alt: "Ranway Gallery Image 28" },
  { src: "/photos_batch_2/ranway10.webp", alt: "Ranway Gallery Image 29" },
  { src: "/photos_batch_2/ranway11.webp", alt: "Ranway Gallery Image 30" },
  { src: "/photos_batch_2/ranway12.webp", alt: "Ranway Gallery Image 31" },
  { src: "/photos_batch_2/ranway13.webp", alt: "Ranway Gallery Image 32" },
  { src: "/photos_batch_2/ranway14.webp", alt: "Ranway Gallery Image 33" },
  { src: "/photos_batch_2/ranway15.webp", alt: "Ranway Gallery Image 34" },
  { src: "/photos_batch_2/ranway16.webp", alt: "Ranway Gallery Image 35" },
  { src: "/photos_batch_2/ranway17.webp", alt: "Ranway Gallery Image 36" },
  { src: "/photos_batch_2/ranway18.webp", alt: "Ranway Gallery Image 37" },
  { src: "/photos_batch_2/ranway19.webp", alt: "Ranway Gallery Image 38" },
  { src: "/photos_batch_2/ranway20.webp", alt: "Ranway Gallery Image 39" },
  { src: "/photos_batch_2/ranway21.webp", alt: "Ranway Gallery Image 40" },
  { src: "/photos_batch_2/ranway22.webp", alt: "Ranway Gallery Image 41" },
  { src: "/photos_batch_2/ranway23.webp", alt: "Ranway Gallery Image 42" },
  { src: "/photos_batch_2/ranway24.webp", alt: "Ranway Gallery Image 43" },
  { src: "/photos_batch_2/ranway25.webp", alt: "Ranway Gallery Image 44" },
  { src: "/photos_batch_2/ranway26.webp", alt: "Ranway Gallery Image 45" },
  { src: "/photos_batch_2/ranway27.webp", alt: "Ranway Gallery Image 46" },
  { src: "/photos_batch_2/ranway28.webp", alt: "Ranway Gallery Image 47" },
  { src: "/photos_batch_2/ranway29.webp", alt: "Ranway Gallery Image 48" },
  { src: "/photos_batch_2/ranway30.webp", alt: "Ranway Gallery Image 49" },
  { src: "/photos_batch_2/ranway31.webp", alt: "Ranway Gallery Image 50" },
  { src: "/photos_batch_2/ranway32.webp", alt: "Ranway Gallery Image 51" },
  { src: "/photos_batch_2/ranway33.webp", alt: "Ranway Gallery Image 52" },
  { src: "/photos_batch_2/ranway34.webp", alt: "Ranway Gallery Image 53" },
  { src: "/photos_batch_2/ranway35.webp", alt: "Ranway Gallery Image 54" },
  { src: "/photos_batch_2/ranway36.webp", alt: "Ranway Gallery Image 55" },
  { src: "/photos_batch_2/ranway37.webp", alt: "Ranway Gallery Image 56" },
  { src: "/photos_batch_2/ranway38.webp", alt: "Ranway Gallery Image 57" },
  { src: "/ranw.webp", alt: "Ranway Gallery Image 1" },
  { src: "/ranw1.webp", alt: "Ranway Gallery Image 2" },
  { src: "/ranw2.webp", alt: "Ranway Gallery Image 3" },
  { src: "/ranw3.webp", alt: "Ranway Gallery Image 4" },
  { src: "/ranw4.webp", alt: "Ranway Gallery Image 5" },
  { src: "/ranw5.webp", alt: "Ranway Gallery Image 6" },
  { src: "/ranw6.webp", alt: "Ranway Gallery Image 7" },
  { src: "/ranw7.webp", alt: "Ranway Gallery Image 8" },
  { src: "/ranw8.webp", alt: "Ranway Gallery Image 9" },
  { src: "/ranw9.webp", alt: "Ranway Gallery Image 10" },
  { src: "/ranw10.webp", alt: "Ranway Gallery Image 11" },
  { src: "/ranw11.webp", alt: "Ranway Gallery Image 12" },
  { src: "/ranw12.webp", alt: "Ranway Gallery Image 13" },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  // Track when a batch of images is loaded
  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => {
      const newSet = new Set(prev);
      newSet.add(src);
      return newSet;
    });
  };

  // Track image loading failures
  const handleImageError = (src: string) => {
    setFailedImages((prev) => {
      const newSet = new Set(prev);
      newSet.add(src);
      return newSet;
    });
  };

  // Reset loaded state when changing images
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);


  return (
    <>
      <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4'>
        {galleryImages.map((image, index) => (
          <LazyImage
            key={image.src}
            image={image}
            index={index}
            onLoad={() => handleImageLoad(image.src)}
            onError={() => handleImageError(image.src)}
            onClick={() => setSelectedImage(image.src)}
            isPriority={index < 4} // Set priority loading for the first 4 images
          />
        ))}
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className='max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none'>
          {selectedImage && (
            <div className='relative w-full h-full flex items-center justify-center'>
              <Image
                src={selectedImage}
                alt='Selected gallery image'
                width={1200}
                height={800}
                className='max-w-full max-h-[90vh] object-contain'
                priority
                onLoadingComplete={() => handleImageLoad(selectedImage)}
                onError={() => handleImageError(selectedImage)}
              />
              {!loadedImages.has(selectedImage) &&
                !failedImages.has(selectedImage) && (
                  <div className='absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-30'>
                    <div className='w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin'></div>
                  </div>
                )}
              {failedImages.has(selectedImage) && (
                <div className='absolute inset-0 flex items-center justify-center bg-red-50 bg-opacity-30'>
                  <p className='text-red-500'>Failed to load image</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

// LazyImage component for better image loading
function LazyImage({
  image,
  index,
  onLoad,
  onError,
  onClick,
  isPriority,
}: {
  image: { src: string; alt: string };
  index: number;
  onLoad: () => void;
  onError: () => void;
  onClick: () => void;
  isPriority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "300px 0px" });
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad();
  };

  const handleError = () => {
    setHasError(true);
    onError();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: Math.min(index * 0.05, 2) }} // Cap the maximum delay to 2 seconds
      className='break-inside-avoid mb-4'>
      <div
        className='relative group cursor-pointer overflow-hidden rounded-lg'
        onClick={onClick}>
        {(isInView || isPriority) && (
          <>
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              priority={isPriority}
              className={`w-full h-auto object-cover transform transition-all duration-300 group-hover:scale-105 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoadingComplete={handleLoad}
              onError={handleError}
            />
            <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300' />
          </>
        )}

        {/* Loading placeholder */}
        {(isInView || isPriority) && !isLoaded && !hasError && (
          <div className='absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center'>
            <div className='w-8 h-8 rounded-full border-2 border-gray-400 border-t-transparent animate-spin'></div>
          </div>
        )}

        {/* Error placeholder */}
        {hasError && (
          <div className='h-64 bg-gray-100 rounded-lg flex items-center justify-center'>
            <span className='text-gray-400'>Image unavailable</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Helper function to chunk array for progressive loading
function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
