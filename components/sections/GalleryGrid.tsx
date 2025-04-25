"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Default placeholder and fallback image
const PLACEHOLDER_IMAGE = "/logo.png"; // Using an existing image as placeholder
const FALLBACK_IMAGE = "/photos_batch_2/ranway1.webp"; // Using an existing image as fallback

// Define locations
const LOCATIONS = {
  CHANGAMWE: "Changamwe, Mombasa",
  NGOMBENI: "Ngombeni, Kwale",
};

// Define the gallery images with sequential alt numbering and location info
const galleryImages = [
  // Original images from batch 1 first with alt 1-13 (Changamwe, Mombasa)
  {
    src: "/ranw.webp",
    alt: "Ranway Changamwe Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.CHANGAMWE,
  },
  {
    src: "/ranw1.webp",
    alt: "Ranway Changamwe Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.CHANGAMWE,
  },
  {
    src: "/ranw2.webp",
    alt: "Ranway Changamwe Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.CHANGAMWE,
  },
  {
    src: "/ranw3.webp",
    alt: "Ranway Changamwe Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.CHANGAMWE,
  },
  {
    src: "/ranw4.webp",
    alt: "Ranway Changamwe Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.CHANGAMWE,
  },
  {
    src: "/ranw5.webp",
    alt: "Ranway Changamwe Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.CHANGAMWE,
  },
  {
    src: "/ranw6.webp",
    alt: "Ranway Changamwe Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.CHANGAMWE,
  },
  {
    src: "/ranw7.webp",
    alt: "Ranway Changamwe Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.CHANGAMWE,
  },
  {
    src: "/ranw8.webp",
    alt: "Ranway Changamwe Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.CHANGAMWE,
  },
  {
    src: "/ranw9.webp",
    alt: "Ranway Changamwe Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.CHANGAMWE,
  },
  {
    src: "/ranw10.webp",
    alt: "Ranway Changamwe Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.CHANGAMWE,
  },
  {
    src: "/ranw11.webp",
    alt: "Ranway Changamwe Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.CHANGAMWE,
  },
  {
    src: "/ranw12.webp",
    alt: "Ranway Changamwe Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.CHANGAMWE,
  },
  // Then batch 2 images with sequential alts starting from 14 (Ngombeni, Kwale)
  {
    src: "/photos_batch_2/ranway1.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway2.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway3.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway4.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway5.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway6.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway7.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway8.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway9.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway10.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway11.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway12.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway13.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway14.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway15.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway16.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway17.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway18.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway19.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway20.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway21.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway22.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway23.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway24.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway25.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway26.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway27.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway28.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway29.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway30.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway31.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway32.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway33.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway34.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway35.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway36.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway37.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
  {
    src: "/photos_batch_2/ranway38.webp",
    alt: "Ranway Ngombeni Station",
    fallbackSrc: FALLBACK_IMAGE,
    location: LOCATIONS.NGOMBENI,
  },
];

// Group images by location
const changamweImages = galleryImages.filter(
  (img) => img.location === LOCATIONS.CHANGAMWE
);
const ngombeniImages = galleryImages.filter(
  (img) => img.location === LOCATIONS.NGOMBENI
);

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [fallbackImage, setFallbackImage] = useState<string | null>(null);

  // Handle modal open/close for body scroll locking
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
      {/* Changamwe Section */}
      <div className='mb-12'>
        <h2 className='text-2xl font-bold text-center mb-6 text-blue-900'>
          {LOCATIONS.CHANGAMWE}
        </h2>
        <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4'>
          {changamweImages.map((image, index) => (
            <NextImageWithFallback
              key={image.src}
              src={image.src}
              fallbackSrc={image.fallbackSrc}
              alt={image.alt}
              index={index}
              onClick={() => setSelectedImage(image.src)}
              isPriority={index < 4} // Prioritize first few images
              location={image.location}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className='my-12 relative'>
        <div className='absolute inset-0 flex items-center'>
          <div className='border-t border-gray-300 w-full'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-white px-6 text-gray-500 text-sm'>
            Our Stations
          </span>
        </div>
      </div>

      {/* Ngombeni Section */}
      <div className='mb-12'>
        <h2 className='text-2xl font-bold text-center mb-6 text-blue-900'>
          {LOCATIONS.NGOMBENI}
        </h2>
        <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4'>
          {ngombeniImages.map((image, index) => (
            <NextImageWithFallback
              key={image.src}
              src={image.src}
              fallbackSrc={image.fallbackSrc}
              alt={image.alt}
              index={index}
              onClick={() => setSelectedImage(image.src)}
              isPriority={false}
              location={image.location}
            />
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => {
          setSelectedImage(null);
          setFallbackImage(null);
        }}>
        <DialogContent className='max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none'>
          {selectedImage && (
            <div className='relative w-full h-full flex items-center justify-center'>
              <NextImageWithFallback
                src={selectedImage}
                fallbackSrc={FALLBACK_IMAGE}
                alt='Selected gallery image'
                width={1200}
                height={800}
                className='max-w-full max-h-[90vh] object-contain'
                isPriority={true}
                showLoadingSpinner={true}
                location={
                  galleryImages.find((img) => img.src === selectedImage)
                    ?.location
                }
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

// Enhanced Next.js image component with fallback
function NextImageWithFallback({
  src,
  fallbackSrc,
  alt,
  index,
  onClick,
  isPriority = false,
  showLoadingSpinner = false,
  location,
  ...rest
}: {
  src: string;
  fallbackSrc: string;
  alt: string;
  index?: number;
  onClick?: () => void;
  isPriority?: boolean;
  showLoadingSpinner?: boolean;
  location?: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "400px 0px" });

  // Reset source when src prop changes
  useEffect(() => {
    setImgSrc(src);
    setLoading(true);
    setError(false);
  }, [src]);

  const handleLoadComplete = () => {
    setLoading(false);
  };

  const handleError = () => {
    setError(true);
    setLoading(false);

    // Only switch to fallback if we're not already using it
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  // Apply animation only if index is provided
  const animationProps =
    index !== undefined
      ? {
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { delay: Math.min(index * 0.05, 1.5) },
        }
      : {};

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      className={`${index !== undefined ? "break-inside-avoid mb-4" : ""}`}>
      <div
        className={`relative ${
          onClick ? "cursor-pointer group overflow-hidden rounded-lg" : ""
        }`}
        onClick={onClick}>
        {(isInView || isPriority) && (
          <>
            <Image
              src={imgSrc}
              alt={alt}
              width={rest.width || 800}
              height={rest.height || 600}
              priority={isPriority}
              className={`${rest.className || "w-full h-auto object-cover"} ${
                onClick
                  ? "transform transition-all duration-300 group-hover:scale-105"
                  : ""
              } ${loading ? "opacity-0" : "opacity-100"}`}
              onLoadingComplete={handleLoadComplete}
              onError={handleError}
              placeholder='blur'
              blurDataURL={PLACEHOLDER_IMAGE}
            />
            {onClick && (
              <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300' />
            )}

            {/* Location badge */}
            {location && onClick && !loading && (
              <div className='absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded'>
                {location}
              </div>
            )}
          </>
        )}

        {/* Loading spinner for when images are loading */}
        {(isInView || isPriority) && loading && showLoadingSpinner && (
          <div className='absolute inset-0 bg-gray-100 bg-opacity-60 flex items-center justify-center'>
            <div className='w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin'></div>
          </div>
        )}

        {/* Loading placeholder with pulse animation */}
        {(isInView || isPriority) && loading && !showLoadingSpinner && (
          <div className='absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center h-64'>
            <div className='w-8 h-8 rounded-full border-2 border-gray-400 border-t-transparent animate-spin'></div>
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
