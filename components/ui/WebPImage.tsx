import Image, { ImageProps } from 'next/image';

/**
 * WebPImage Component
 * 
 * Automatically uses WebP images with fallback to original format
 * for browsers that don't support WebP
 * 
 * Usage:
 * <WebPImage src="/image.png" alt="Description" width={600} height={400} />
 * 
 * This will automatically use /image.webp if available, with fallback to /image.png
 */

interface WebPImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
}

export default function WebPImage({ 
  src, 
  fallbackSrc,
  alt,
  ...props 
}: WebPImageProps) {
  // Convert source to WebP
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const originalSrc = fallbackSrc || src;

  return (
    <picture>
      {/* WebP source for modern browsers */}
      <source srcSet={webpSrc} type="image/webp" />
      
      {/* Fallback for browsers that don't support WebP */}
      <Image
        src={originalSrc}
        alt={alt}
        {...props}
      />
    </picture>
  );
}
