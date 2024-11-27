import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  features: string[];
}

export function ProductCard({ image, title, description, features }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full"
    >
      <div className="relative h-72">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-[#1E3A8A]">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-amber-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 