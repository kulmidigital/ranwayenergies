import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, ArrowDown } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className='relative h-screen overflow-hidden'>
      <motion.div
        className='absolute inset-0'
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}>
        <Image
          src='/station-front.webp'
          alt='Modern Petrol Station'
          fill
          className='object-cover brightness-[0.25]'
          priority
        />
      </motion.div>

      <div className='absolute inset-0 bg-gradient-to-r from-black/70 to-blue-900/50' />

      <div className='relative h-full flex flex-col justify-center px-4 md:px-9'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-4xl'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}>
              <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6'>
                <span className='text-amber-500'>Fueling</span> Your Journey
                Forward
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-2xl'>
              Premium quality fuel, exceptional service, and a commitment to
              sustainability that drives us forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='flex flex-col sm:flex-row gap-4 md:gap-6'>
              <Button
                size='lg'
                className='group relative overflow-hidden bg-amber-500 hover:bg-amber-500 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base transition-all duration-300'>
                <span className='relative z-10 flex items-center gap-2'>
                  Find Station{" "}
                  <MapPin className='ml-2 h-4 w-4 transition-transform group-hover:rotate-12' />
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0' />
              </Button>

              <Link href='/services' className="w-full sm:w-auto">
                <Button
                  size='lg'
                  variant='outline'
                  className='group relative overflow-hidden border-2 border-white/80 hover:border-white bg-transparent hover:bg-transparent px-6 md:px-8 py-3 md:py-4 text-sm md:text-base w-full sm:w-auto'>
                  <span className='relative z-10 flex items-center gap-2 text-white group-hover:text-amber-500'>
                    What We Do{" "}
                    <ChevronRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </span>
                  <div className='absolute inset-0 bg-white transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0' />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className='mt-12 md:mt-16 max-w-2xl grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'>
              <StatItem number='24/7' label='Support' />
              <StatItem number='5k+' label='Happy Customers' />
              <StatItem number='98%' label='Satisfaction Rate' />
            </motion.div>
          </div>
        </div>

        <motion.div
          className='absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2'
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown className='h-5 w-5 md:h-6 md:w-6 text-white/80' />
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className='text-left'>
      <div className='text-2xl md:text-3xl font-bold text-amber-500 mb-1'>{number}</div>
      <div className='text-xs md:text-sm text-gray-300 uppercase tracking-wider'>
        {label}
      </div>
    </div>
  );
}
