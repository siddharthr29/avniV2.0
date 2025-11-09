/**
 * Video Modal Component
 * Displays YouTube video in a modal overlay with description and CTA
 */

"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import { Button } from "./Button";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export function VideoModal({
  isOpen,
  onClose,
  videoId,
  title = "Watch Our Story",
  description = "See how Avni is transforming field work for NGOs across India, empowering communities and driving real impact.",
  ctaText = "Start Your Free Trial",
  ctaLink = "/signup",
}: VideoModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[900px] mx-4 bg-white rounded-[24px] shadow-2xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all text-white"
          aria-label="Close video"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Video Container */}
        <div className="relative w-full pt-[56.25%] bg-black rounded-t-[24px] overflow-hidden">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        {/* Content Below Video */}
        <div className="p-8 text-center">
          {/* Title */}
          <h3 className="font-anek font-bold text-[28px] leading-[32px] text-[#0b2540] mb-4">
            {title}
          </h3>

          {/* Description */}
          <p className="font-noto text-[16px] leading-[24px] text-[#000000] opacity-80 mb-6 max-w-[600px] mx-auto">
            {description}
          </p>

          {/* CTA Button */}
          <Button variant="primary" size="lg" href={ctaLink}>
            {ctaText} →
          </Button>
        </div>
      </div>
    </div>
  );
}
