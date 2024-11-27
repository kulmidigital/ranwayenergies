"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Fuel, Truck, CreditCard, Store, Wrench, Recycle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[60vh] bg-blue-900">
        <div className="absolute inset-0">
          <Image
            src="/services-hero.webp"
            alt="Our Services"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                What We <span className="text-amber-500">Do</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200">
                Comprehensive energy solutions tailored to meet your needs with excellence and reliability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-8 md:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="flex-1 space-y-3 md:space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1E3A8A]">{service.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 md:space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 md:gap-3">
                          <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-amber-500 flex-shrink-0 mt-1" />
                          <span className="text-sm md:text-base text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4 md:mb-6">
              Ready to Experience Our Services?
            </h2>
            <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8">
              Visit our station today and discover the difference quality service makes.
            </p>
            <Button 
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base"
            >
              Find Station
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    icon: <Fuel className="h-6 w-6 text-amber-500" />,
    title: "Fuel Distribution",
    description: "Premium quality fuel products for all your vehicle needs, ensuring optimal performance and efficiency.",
    features: [
      "High-quality petrol and diesel",
      "Clean fuel technology",
      "Regular quality checks",
      "Competitive pricing"
    ]
  },
  {
    icon: <Store className="h-6 w-6 text-amber-500" />,
    title: "Convenience Store",
    description: "A one-stop shop for all your convenience needs while fueling up your vehicle.",
    features: [
      "Essential automotive supplies",
      "Refreshments and snacks",
      "Basic vehicle accessories",
      "24/7 availability"
    ]
  },
  {
    icon: <Wrench className="h-6 w-6 text-amber-500" />,
    title: "Vehicle Services",
    description: "Basic maintenance services to keep your vehicle running smoothly.",
    features: [
      "Tire pressure checks",
      "Oil level checks",
      "Windscreen cleaning",
      "Basic maintenance advice"
    ]
  },
  {
    icon: <CreditCard className="h-6 w-6 text-amber-500" />,
    title: "Payment Solutions",
    description: "Flexible and convenient payment options for all our services.",
    features: [
      "Multiple payment methods",
      "Digital payments accepted",
      "Secure transactions",
      "Quick processing"
    ]
  }
]; 