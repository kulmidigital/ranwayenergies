"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Users, Target, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <main className='pt-20'>
      {/* Hero Section */}
      <section className='relative h-[40vh] md:h-[60vh] bg-blue-900'>
        <div className='absolute inset-0'>
          <Image
            src='/about-hero.webp'
            alt='About Ranway'
            fill
            className='object-cover opacity-30'
          />
        </div>
        <div className='relative h-full flex items-center'>
          <div className='container mx-auto px-4 md:px-6'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='max-w-3xl'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6'>
                About <span className='text-amber-500'>Ranway</span>
              </h1>
              <p className='text-base sm:text-lg md:text-xl text-gray-200'>
                Pioneering the future of energy distribution with innovation and
                commitment to excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className='py-8 md:py-16 lg:py-24 relative overflow-hidden'>
        <div className='absolute inset-0 -z-10'>
          <div className='absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2' />
          <div className='absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2' />
        </div>

        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid md:grid-cols-2 gap-8 md:gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <div className='relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden'>
                <Image
                  src='/station-side.webp'
                  alt='Our Station'
                  fill
                  className='object-cover'
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='space-y-4 md:space-y-6'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E3A8A]'>
                Our Mission & Vision
              </h2>
              <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
                At Ranway Energies Limited, we're committed to providing
                top-tier fuel solutions while maintaining the highest standards
                of service and environmental responsibility. Our vision is to
                become the most trusted name in energy distribution, known for
                quality, reliability, and customer satisfaction.
              </p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'>
                <div className='space-y-2 md:space-y-3'>
                  <Shield className='h-6 w-6 md:h-8 md:w-8 text-amber-500' />
                  <h3 className='text-lg md:text-xl font-semibold text-[#1E3A8A]'>
                    Quality Assured
                  </h3>
                  <p className='text-xs md:text-sm text-gray-600'>
                    Highest standards in fuel quality and service delivery
                  </p>
                </div>
                <div className='space-y-2 md:space-y-3'>
                  <Users className='h-6 w-6 md:h-8 md:w-8 text-amber-500' />
                  <h3 className='text-lg md:text-xl font-semibold text-[#1E3A8A]'>
                    Customer First
                  </h3>
                  <p className='text-xs md:text-sm text-gray-600'>
                    Dedicated to exceeding customer expectations
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-8 md:py-16 lg:py-24 bg-gray-50'>
        <div className='container mx-auto px-4 md:px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-center mb-8 md:mb-16'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-3 md:mb-4'>
              Our Core Values
            </h2>
            <p className='text-sm md:text-base text-gray-600 max-w-2xl mx-auto'>
              These principles guide everything we do at Ranway Energies Limited
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto'>
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300'>
                <div className='w-10 h-10 md:w-12 md:h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4 md:mb-6'>
                  {value.icon}
                </div>
                <h3 className='text-lg md:text-xl font-bold text-[#1E3A8A] mb-2 md:mb-3'>
                  {value.title}
                </h3>
                <p className='text-sm md:text-base text-gray-600'>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const coreValues = [
  {
    icon: <Shield className='h-6 w-6 text-amber-500' />,
    title: "Integrity",
    description:
      "We conduct our business with the highest standards of honesty and transparency.",
  },
  {
    icon: <Target className='h-6 w-6 text-amber-500' />,
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our operations and service delivery.",
  },
  {
    icon: <Award className='h-6 w-6 text-amber-500' />,
    title: "Innovation",
    description:
      "We continuously seek new ways to improve and enhance our services.",
  },
];
