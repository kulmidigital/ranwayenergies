"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Define the gallery images
const galleryImages = [
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
  { src: "/fuel-diesel.webp", alt: "Ranway Gallery Image 14" },
  { src: "/fuel-petrol.webp", alt: "Ranway Gallery Image 15" },
  { src: "/fuel-kerosene.webp", alt: "Ranway Gallery Image 16" },
  { src: "/about-hero.webp", alt: "Ranway Gallery Image 17" },
  { src: "/contact-hero.webp", alt: "Ranway Gallery Image 18" },
  { src: "/lubricants.webp", alt: "Ranway Gallery Image 19" },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4'>
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className='break-inside-avoid'>
            <div
              className='relative group cursor-pointer overflow-hidden rounded-lg'
              onClick={() => setSelectedImage(image.src)}>
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className='w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300' />
            </div>
          </motion.div>
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
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
