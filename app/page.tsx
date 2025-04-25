"use client";

import { useState, useEffect } from "react";
import { Fuel, Phone, Clock, Leaf, Recycle, Sun, Star, Quote } from "lucide-react";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { ProductCard } from "@/components/cards/ProductCard";
import { motion } from "framer-motion";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <HeroSection />

      {/* Features Section */}
      <section className="py-6 md:py-10 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#1E3A8A]">
              Why Choose <span className="text-amber-500">Ranway</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Experience exceptional service and quality that sets us apart from the rest.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FeatureCard
                icon={<Fuel className="h-6 w-6 md:h-8 md:w-8 text-green-500" />}
                title="Premium Fuel"
                description="Experience superior engine performance with our high-quality fuel that keeps your vehicle running at its best."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FeatureCard
                icon={<Clock className="h-6 w-6 md:h-8 md:w-8 text-green-500" />}
                title="24/7 Service"
                description="Our station never sleeps. We're here to serve you around the clock, ensuring you're never left stranded."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FeatureCard
                icon={<Phone className="h-6 w-6 md:h-8 md:w-8 text-green-500" />}
                title="Customer Support"
                description="Our dedicated support team is always ready to assist you with any questions or concerns you may have."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-6 md:py-10 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#1E3A8A]">
              Our <span className="text-amber-500">Premium</span> Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Experience the difference with our high-quality fuel products, designed to keep your engine running at peak performance.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ProductCard
                image="/photos_batch_2/ranway5.webp"
                title="Premium Diesel"
                description="High-performance diesel fuel engineered for maximum efficiency and engine protection."
                features={["Enhanced Engine Performance", "Lower Emissions", "Better Mileage"]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ProductCard
                image="/photos_batch_2/ranway17.webp"
                title="Unleaded Petrol"
                description="Clean-burning petrol that delivers smooth acceleration and reliable performance."
                features={["High Octane Rating", "Clean Engine", "Smooth Performance"]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ProductCard
                image="/photos_batch_2/ranway38.webp"
                title="Kerosene"
                description="Pure, efficient kerosene fuel perfect for domestic and industrial applications."
                features={["High Purity", "Clean Burning", "Multiple Uses"]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ProductCard
                image="/photos_batch_2/ranway8.webp"
                title="Lubricants"
                description="Premium quality lubricants that provide superior protection for all types of engines."
                features={["Extended Protection", "Thermal Stability", "Wear Reduction"]}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Environmental Commitment Section */}
      <section className="py-6 md:py-10 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#1E3A8A]">
              Our <span className="text-amber-500">Environmental</span> Commitment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Leading the way in sustainable energy practices and environmental responsibility.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {environmentalInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {initiative.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">{initiative.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{initiative.description}</p>
                <ul className="space-y-2 md:space-y-3">
                  {initiative.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="h-6 w-6 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                      </div>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-6 md:py-10 relative overflow-hidden">
        <div className="relative -mx-4 md:mx-0">
          <div className="absolute left-0 top-0 w-12 md:w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-12 md:w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="overflow-hidden px-4 md:px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#1E3A8A]">
                Customer <span className="text-amber-500">Reviews</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                Don't just take our word for it - hear what our customers have to say.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />
              
              <div className="overflow-hidden">
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-50%" }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                  className="flex gap-3 md:gap-6 whitespace-nowrap"
                >
                  {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <div
                      key={index}
                      className="w-[280px] md:w-[300px] flex-shrink-0 bg-white p-4 md:p-6 rounded-2xl shadow-lg"
                    >
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating
                                ? "text-amber-500 fill-amber-500"
                                : "text-gray-300 fill-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <Quote className="h-6 w-6 text-amber-500 mb-3 opacity-50" />
                      <p className="text-gray-600 text-sm line-clamp-4 whitespace-normal">
                        {testimonial.comment}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const environmentalInitiatives = [
  {
    icon: <Leaf className="h-8 w-8 text-green-500" />,
    title: "Fuel Quality Standards",
    description: "Maintaining the highest standards in fuel quality to ensure cleaner emissions and better engine performance.",
    points: [
      "Regular fuel quality testing",
      "Advanced fuel filtration systems",
      "Clean storage tank maintenance",
      "Spill prevention protocols"
    ]
  },
  {
    icon: <Recycle className="h-8 w-8 text-green-500" />,
    title: "Responsible Operations",
    description: "Implementing best practices in our daily operations to minimize environmental impact.",
    points: [
      "Safe waste oil disposal",
      "Underground tank monitoring",
      "Vapor recovery systems",
      "Eco-friendly cleaning products"
    ]
  },
  {
    icon: <Sun className="h-8 w-8 text-green-500" />,
    title: "Modern Infrastructure",
    description: "Investing in modern equipment and facilities to ensure safer and cleaner operations.",
    points: [
      "LED lighting systems",
      "Double-walled storage tanks",
      "Advanced dispensing systems",
      "Leak detection technology"
    ]
  }
];

const testimonials = [
  {
    rating: 5,
    comment: "Outstanding service! The staff was incredibly helpful and the fuel quality is noticeably better. My car runs smoother than ever. The 24/7 availability is a real lifesaver."
  },
  {
    rating: 5,
    comment: "I've been a regular customer for months now. The station is always clean, well-maintained, and the staff is professional. The competitive prices and quality fuel keep me coming back."
  },
  {
    rating: 5,
    comment: "Exceptional customer service! Had an issue with my tire pressure and the staff went above and beyond to help. The quality of their products is unmatched in the area."
  },
  {
    rating: 5,
    comment: "Love the convenience store and the friendly staff. The station is always well-lit and I feel safe fueling up at any hour. Their premium fuel has definitely improved my car's performance."
  },
  {
    rating: 5,
    comment: "Best fuel station in the area! The digital payment system is seamless, and their loyalty program offers great value. The staff is always courteous and professional."
  }
];
