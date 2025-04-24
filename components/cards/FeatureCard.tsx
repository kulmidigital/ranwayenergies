import { motion } from "framer-motion";
import { FeatureCardProps } from "@/app/types";

export function FeatureCard({ icon, title, description }: Readonly<FeatureCardProps>) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
    >
      <div className="absolute -right-8 -top-8 w-24 h-24 bg-amber-50 rounded-full transition-transform duration-300 group-hover:scale-150" />
      
      <div className="relative">
        <div className="mb-6 text-amber-500 bg-amber-50 w-16 h-16 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-[#1E3A8A]">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
} 