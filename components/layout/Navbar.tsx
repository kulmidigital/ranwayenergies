"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "What We Do" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}>
      <div className='container mx-auto pl-0 pr-4 md:px-4'>
        <div className='flex items-center justify-between'>
          <Link
            href='/'
            className='relative -mt-2 md:-mt-0 -ml-6 md:ml-0 w-40 md:w-32 h-16 md:h-16'>
            <Image
              src='/logo.png'
              alt='Ranway Energies Limited'
              fill
              className='object-contain'
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-6 md:gap-8'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium hover:text-amber-500 transition-colors ${
                  isScrolled || !isHomePage ? "text-gray-800" : "text-white"
                }`}>
                {link.label}
              </Link>
            ))}
            <Button className='bg-amber-500 hover:bg-amber-600'>
              Find Station
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant='ghost'
                className='md:hidden p-4 hover:bg-transparent scale-125'>
                <Menu
                  className={`h-12 w-12 ${
                    isScrolled || !isHomePage ? "text-gray-800" : "text-white"
                  }`}
                />
              </Button>
            </SheetTrigger>
            <SheetContent className='bg-white'>
              <SheetHeader>
                <SheetTitle className='text-left'>Menu</SheetTitle>
              </SheetHeader>
              <div className='flex flex-col gap-6 mt-6'>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className='text-lg font-medium text-gray-800 hover:text-amber-500 transition-colors'>
                    {link.label}
                  </Link>
                ))}
                <Button className='w-full bg-amber-500 hover:bg-amber-600 mt-4'>
                  Find Station
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
