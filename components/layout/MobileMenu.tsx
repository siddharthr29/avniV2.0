/**
 * Mobile Menu Component
 * Responsive navigation for mobile and tablet devices
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/useMediaQuery';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Close menu on desktop
  const isMobile = useIsMobile();
  useEffect(() => {
    if (!isMobile && isOpen) {
      onToggle();
    }
  }, [isMobile, isOpen, onToggle]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={onToggle}
        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[#0b2540]" />
        ) : (
          <Menu className="w-6 h-6 text-[#0b2540]" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] bg-white z-50 lg:hidden overflow-y-auto">
          <nav className="flex flex-col p-6 space-y-2">
            {/* Product Services */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => toggleSection('products')}
                className="flex items-center justify-between w-full py-3 font-anek font-medium text-[16px] text-[#0b2540]"
              >
                Product Services
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    expandedSection === 'products' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedSection === 'products' && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/services/case-management"
                    className="block py-2 text-[14px] text-gray-600 hover:text-[#419372]"
                    onClick={onToggle}
                  >
                    Case Management
                  </Link>
                  <Link
                    href="/services/reporting"
                    className="block py-2 text-[14px] text-gray-600 hover:text-[#419372]"
                    onClick={onToggle}
                  >
                    Reporting
                  </Link>
                  <Link
                    href="/services/mobile-medical-units"
                    className="block py-2 text-[14px] text-gray-600 hover:text-[#419372]"
                    onClick={onToggle}
                  >
                    Mobile Medical Units & Camps
                  </Link>
                  <Link
                    href="/services/surveys"
                    className="block py-2 text-[14px] text-gray-600 hover:text-[#419372]"
                    onClick={onToggle}
                  >
                    Surveys
                  </Link>
                  <Link
                    href="/services/cohort-research"
                    className="block py-2 text-[14px] text-gray-600 hover:text-[#419372]"
                    onClick={onToggle}
                  >
                    Cohort Based Research Studies
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => toggleSection('solutions')}
                className="flex items-center justify-between w-full py-3 font-anek font-medium text-[16px] text-[#0b2540]"
              >
                Solutions
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    expandedSection === 'solutions' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedSection === 'solutions' && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/solutions/education"
                    className="block py-2 text-[14px] text-gray-600 hover:text-[#419372]"
                    onClick={onToggle}
                  >
                    Education
                  </Link>
                  <Link
                    href="/solutions/healthcare"
                    className="block py-2 text-[14px] text-gray-600 hover:text-[#419372]"
                    onClick={onToggle}
                  >
                    Healthcare
                  </Link>
                  <Link
                    href="/solutions/water-sanitation"
                    className="block py-2 text-[14px] text-gray-600 hover:text-[#419372]"
                    onClick={onToggle}
                  >
                    Water & Sanitation
                  </Link>
                  <Link
                    href="/solutions/waste-management"
                    className="block py-2 text-[14px] text-gray-600 hover:text-[#419372]"
                    onClick={onToggle}
                  >
                    Waste Management
                  </Link>
                </div>
              )}
            </div>

            {/* Pricing */}
            <Link
              href="/pricing"
              className="py-3 font-anek font-medium text-[16px] text-[#0b2540] border-b border-gray-200"
              onClick={onToggle}
            >
              Pricing
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="py-3 font-anek font-medium text-[16px] text-[#0b2540] border-b border-gray-200"
              onClick={onToggle}
            >
              About
            </Link>

            {/* Resources */}
            <Link
              href="/resources"
              className="py-3 font-anek font-medium text-[16px] text-[#0b2540] border-b border-gray-200"
              onClick={onToggle}
            >
              Resources
            </Link>

            {/* CTA Buttons */}
            <div className="pt-6 space-y-3">
              <Link
                href="/login"
                className="block w-full py-3 text-center font-anek font-medium text-[16px] text-[#0b2540] border-2 border-[#0b2540] rounded-lg hover:bg-[#0b2540] hover:text-white transition-all"
                onClick={onToggle}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="block w-full py-3 text-center font-anek font-medium text-[16px] text-white bg-[#419372] rounded-lg hover:bg-[#357a5e] transition-all"
                onClick={onToggle}
              >
                Sign Up
              </Link>
              <Link
                href="/demo"
                className="block w-full py-3 text-center font-anek font-medium text-[16px] text-[#419372] border-2 border-[#419372] rounded-lg hover:bg-[#419372] hover:text-white transition-all"
                onClick={onToggle}
              >
                Request a Demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
