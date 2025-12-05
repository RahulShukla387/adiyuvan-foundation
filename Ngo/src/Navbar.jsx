import React, { useState } from 'react';
import { 
  Utensils, 
  Sun, 
  Users, 
  Leaf, 
  Menu, 
  X,
  BookOpen,
  ArrowRight
} from 'lucide-react';

// Menu items structure (Updated href for consistency)
const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/about" },
  { label: "Events", href: "#volunteers" },
  { label: "Spiritual Centers", href: "#spiritual" },
  { label: "Donate Us", href: "/donate" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const Logo = () => (
    <div className="flex items-center space-x-2">
      <div className="h-7 w-7 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white shadow-md">
         <img src="/dashboard/logo.png" alt="AdiYuvan" />
      </div>
      <span className="text-lg font-bold tracking-tight text-slate-900">Adi<span className="text-orange-600">Yuvan</span></span>
    </div>
  );

  return (
    // Main Navbar Container: Always sticky and visible
    <div className="sticky top-0 z-50 bg-white shadow-lg border-b border-orange-100">
      
      {/* ------------------------------------------------------------------ */}
      {/* 1. DESKTOP / LARGE SCREEN VIEW (md:flex) */}
      {/* ------------------------------------------------------------------ */}
      <div className="max-w-7xl mx-auto hidden md:flex items-center justify-between h-20 px-6">
        
        {/* Logo */}
        <Logo />

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          {MENU_ITEMS.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-slate-700 font-medium hover:text-orange-600 transition-colors text-base"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 2. MOBILE / SMALL SCREEN VIEW (md:hidden) */}
      {/* ------------------------------------------------------------------ */}
      <div className="md:hidden flex items-center justify-between h-16 px-5">

        {/* Logo (Mobile) */}
        <Logo />
        
        {/* Menu Toggle Button (Hamburger) */}
        <button 
          onClick={toggleMenu} 
          className="p-2 rounded-full text-slate-600 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 3. MOBILE MENU OVERLAY (Always hidden above md) */}
      {/* ------------------------------------------------------------------ */}
      <div
        // z-50 ensures the menu is on top of the dimmer (z-40) and header
        className={`fixed top-16 left-0 w-full h-full bg-white transition-transform duration-300 ease-in-out shadow-2xl overflow-y-auto z-50 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="p-4 space-y-2">
          {MENU_ITEMS.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={toggleMenu} // Close menu on link click
              className="flex items-center space-x-4 p-4 rounded-xl text-slate-700 hover:bg-orange-50 hover:text-orange-700 transition-all text-base font-semibold border border-slate-100"
            >
              <ArrowRight size={20} className="text-orange-500" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        
    
      </div>
      
      {/* Background Dimmer (Only visible when menu is open) */}
      {isOpen && (
        <div 
          className="fixed inset-0 top-16 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden" 
          onClick={toggleMenu}
        />
      )}
    </div>
  );
}