"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-gray-900">
            <Image src="/icon-meino.svg" alt="Meenu" width={24} height={24} />
            <span className="font-semibold">Meenu</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="/"
              className={
                isActive("/")
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-600"
              }
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className={
                isActive("/pricing")
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-600"
              }
            >
              Pricing
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-3 border-t border-gray-100">
            <div className="px-2 pt-2 space-y-1">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={
                  isActive("/")
                    ? "block px-3 py-2 rounded-md text-base font-medium text-orange-600 bg-orange-50"
                    : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                }
              >
                Home
              </Link>
              <Link
                href="/pricing"
                onClick={() => setIsOpen(false)}
                className={
                  isActive("/pricing")
                    ? "block px-3 py-2 rounded-md text-base font-medium text-orange-600 bg-orange-50"
                    : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                }
              >
                Pricing
              </Link>
              <Link
                href="/chat"
                onClick={() => setIsOpen(false)}
                className="block mx-3 my-2 px-4 py-2 rounded-full text-center text-base font-medium bg-orange-500 text-white hover:bg-orange-600"
              >
                Start Order
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
