import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className='bg-[#1E3A8A] text-white'>
      {/* Main Footer */}
      <div className='container mx-auto px-4 py-12 md:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12'>
          {/* Company Info */}
          <div className='space-y-4 md:space-y-6'>
            <Link href='/' className='block relative w-40 md:w-48 h-20 md:h-24'>
              <Image
                src='/logo.png'
                alt='Ranway Energies Limited'
                fill
                className='object-contain brightness-0 invert'
              />
            </Link>
            <div className='flex gap-3 md:gap-4'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors'>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-base md:text-lg font-semibold'>Quick Links</h3>
            <ul className='space-y-2 md:space-y-4'>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='text-sm md:text-base text-gray-300 hover:text-amber-500 transition-colors'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className='space-y-4'>
            <h3 className='text-base md:text-lg font-semibold'>Our Services</h3>
            <ul className='space-y-2 md:space-y-4'>
              {services.map((service) => (
                <li key={service}>
                  <span className='text-sm md:text-base text-gray-300'>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h3 className='text-base md:text-lg font-semibold'>Contact Us</h3>
            <ul className='space-y-2 md:space-y-4'>
              {contactInfo.map((info) => (
                <li
                  key={info.label}
                  className='flex items-start gap-2 md:gap-3'>
                  <info.icon className='h-4 w-4 md:h-5 md:w-5 text-amber-500 flex-shrink-0 mt-1' />
                  <span className='text-sm md:text-base text-gray-300'>
                    {info.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-white/10'>
        <div className='container mx-auto px-4 py-4 md:py-6'>
          <div className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4'>
            <p className='text-xs md:text-sm text-gray-300 text-center'>
              © {new Date().getFullYear()} Ranway Energies Limited. All rights
              reserved.
            </p>
            <p className='text-xs md:text-sm text-gray-300 text-center'>
              Designed and Developed by{" "}
              <a
                href='https://kulmi.digital/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-amber-500 hover:text-amber-400 transition-colors'>
                Kulmi Digital
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: <Facebook className='h-4 w-4 md:h-5 md:w-5' />,
  },
  {
    name: "Twitter",
    href: "#",
    icon: <Twitter className='h-4 w-4 md:h-5 md:w-5' />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: <Instagram className='h-4 w-4 md:h-5 md:w-5' />,
  },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "What We Do" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Fuel Distribution",
  "Convenience Store",
  "Vehicle Services",
  "Payment Solutions",
];

const contactInfo = [
  {
    icon: Phone,
    label: "+254 723 105 805",
  },
  {
    icon: Mail,
    label: "info@ranwayenergies.com",
  },
  {
    icon: MapPin,
    label: "Lenana 197 Place Building, 5th Floor, Lenana Road",
  },
];
