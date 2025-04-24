"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Default placeholder and fallback image
const PLACEHOLDER_IMAGE = "/logo.png"; // Using an existing image as placeholder
const FALLBACK_IMAGE = "/photos_batch_2/ranway1.webp"; // Using an existing image as fallback

// Define the gallery images with sequential alt numbering
const galleryImages = [
  // Original images from batch 1 first with alt 1-13
  {
    src: "/ranw.webp",
    alt: "Ranway Gallery Image 1",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/ranw1.webp",
    alt: "Ranway Gallery Image 2",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/ranw2.webp",
    alt: "Ranway Gallery Image 3",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/ranw3.webp",
    alt: "Ranway Gallery Image 4",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/ranw4.webp",
    alt: "Ranway Gallery Image 5",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/ranw5.webp",
    alt: "Ranway Gallery Image 6",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/ranw6.webp",
    alt: "Ranway Gallery Image 7",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/ranw7.webp",
    alt: "Ranway Gallery Image 8",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/ranw8.webp",
    alt: "Ranway Gallery Image 9",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/ranw9.webp",
    alt: "Ranway Gallery Image 10",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/ranw10.webp",
    alt: "Ranway Gallery Image 11",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/ranw11.webp",
    alt: "Ranway Gallery Image 12",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/ranw12.webp",
    alt: "Ranway Gallery Image 13",
    fallbackSrc: FALLBACK_IMAGE,
  },
  // Then batch 2 images with sequential alts starting from 14
  {
    src: "/photos_batch_2/ranway1.webp",
    alt: "Ranway Gallery Image 14",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway2.webp",
    alt: "Ranway Gallery Image 15",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway3.webp",
    alt: "Ranway Gallery Image 16",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway4.webp",
    alt: "Ranway Gallery Image 17",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway5.webp",
    alt: "Ranway Gallery Image 18",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway6.webp",
    alt: "Ranway Gallery Image 19",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway7.webp",
    alt: "Ranway Gallery Image 20",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway8.webp",
    alt: "Ranway Gallery Image 21",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway9.webp",
    alt: "Ranway Gallery Image 22",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway10.webp",
    alt: "Ranway Gallery Image 23",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway11.webp",
    alt: "Ranway Gallery Image 24",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway12.webp",
    alt: "Ranway Gallery Image 25",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway13.webp",
    alt: "Ranway Gallery Image 26",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway14.webp",
    alt: "Ranway Gallery Image 27",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway15.webp",
    alt: "Ranway Gallery Image 28",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway16.webp",
    alt: "Ranway Gallery Image 29",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway17.webp",
    alt: "Ranway Gallery Image 30",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway18.webp",
    alt: "Ranway Gallery Image 31",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway19.webp",
    alt: "Ranway Gallery Image 32",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway20.webp",
    alt: "Ranway Gallery Image 33",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway21.webp",
    alt: "Ranway Gallery Image 34",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway22.webp",
    alt: "Ranway Gallery Image 35",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway23.webp",
    alt: "Ranway Gallery Image 36",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway24.webp",
    alt: "Ranway Gallery Image 37",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway25.webp",
    alt: "Ranway Gallery Image 38",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway26.webp",
    alt: "Ranway Gallery Image 39",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway27.webp",
    alt: "Ranway Gallery Image 40",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway28.webp",
    alt: "Ranway Gallery Image 41",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway29.webp",
    alt: "Ranway Gallery Image 42",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway30.webp",
    alt: "Ranway Gallery Image 43",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway31.webp",
    alt: "Ranway Gallery Image 44",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway32.webp",
    alt: "Ranway Gallery Image 45",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway33.webp",
    alt: "Ranway Gallery Image 46",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway34.webp",
    alt: "Ranway Gallery Image 47",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway35.webp",
    alt: "Ranway Gallery Image 48",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway36.webp",
    alt: "Ranway Gallery Image 49",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway37.webp",
    alt: "Ranway Gallery Image 50",
    fallbackSrc: FALLBACK_IMAGE,
  },
  {
    src: "/photos_batch_2/ranway38.webp",
    alt: "Ranway Gallery Image 51",
    fallbackSrc: FALLBACK_IMAGE,
  },
];

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
      <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4'>
        {galleryImages.map((image, index) => (
          <NextImageWithFallback
            key={image.src}
            src={image.src}
            fallbackSrc={image.fallbackSrc}
            alt={image.alt}
            index={index}
            onClick={() => setSelectedImage(image.src)}
            isPriority={index < 8} // Prioritize first 8 images above the fold
          />
        ))}
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
  ...rest
}: {
  src: string;
  fallbackSrc: string;
  alt: string;
  index?: number;
  onClick?: () => void;
  isPriority?: boolean;
  showLoadingSpinner?: boolean;
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
