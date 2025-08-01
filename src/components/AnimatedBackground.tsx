import React, { useEffect, useRef } from 'react';

interface FloatingImage {
  id: number;
  src: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

const AnimatedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<FloatingImage[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    // Define image files inside useEffect to avoid dependency issues
    const imageFiles = ['/image1.png', '/image2.png', '/image3.png', '/image4.png'];

    // Initialize floating images with CSS animations instead of canvas
    const initializeImages = () => {
      imagesRef.current = [];
      const numImages = 12;

      for (let i = 0; i < numImages; i++) {
        const imageIndex = i % imageFiles.length;
        const image: FloatingImage = {
          id: i,
          src: imageFiles[imageIndex],
          x: Math.random() * 100, // percentage
          y: Math.random() * 100, // percentage
          vx: (Math.random() - 0.5) * 20, // animation duration variance
          vy: (Math.random() - 0.5) * 30, // animation duration variance
          size: (Math.random() * 100 + 60) * 1.5, // Size between 60-160px (increased from 30-90px)
          opacity: Math.random() * 0.15 + 0.05, // Very low opacity
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 60, // rotation duration
        };
        imagesRef.current.push(image);
      }

      // Create DOM elements for each floating image
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
        
        imagesRef.current.forEach((img, index) => {
          const imgElement = document.createElement('img');
          imgElement.src = img.src;
          imgElement.className = 'floating-image';
          imgElement.style.cssText = `
            position: absolute;
            width: ${img.size}px;
            height: ${img.size}px;
            left: ${img.x}%;
            top: ${img.y}%;
            opacity: ${img.opacity};
            transform: rotate(${img.rotation}deg);
            pointer-events: none;
            border-radius: 12px;
            object-fit: cover;
            filter: blur(1px);
            animation: 
              float${index} ${15 + img.vx}s ease-in-out infinite,
              rotate${index} ${20 + Math.abs(img.rotationSpeed)}s linear infinite,
              fade${index} ${8 + index}s ease-in-out infinite alternate;
          `;
          
          // Add dynamic keyframes
          const styleSheet = document.createElement('style');
          styleSheet.textContent = `
            @keyframes float${index} {
              0%, 100% { 
                transform: translate(0, 0) rotate(${img.rotation}deg); 
              }
              25% { 
                transform: translate(${20 + img.vx}px, ${-30 + img.vy}px) rotate(${img.rotation + 90}deg); 
              }
              50% { 
                transform: translate(${-15 + img.vx}px, ${25 + img.vy}px) rotate(${img.rotation + 180}deg); 
              }
              75% { 
                transform: translate(${25 + img.vx}px, ${-20 + img.vy}px) rotate(${img.rotation + 270}deg); 
              }
            }
            
            @keyframes rotate${index} {
              from { transform: rotate(${img.rotation}deg); }
              to { transform: rotate(${img.rotation + 360}deg); }
            }
            
            @keyframes fade${index} {
              0% { opacity: ${img.opacity}; }
              50% { opacity: ${img.opacity * 1.5}; }
              100% { opacity: ${img.opacity * 0.7}; }
            }
          `;
          
          document.head.appendChild(styleSheet);
          containerRef.current?.appendChild(imgElement);
        });
      }
    };

    initializeImages();

    // Copy the ref value to a local variable for cleanup
    const animationFrameId = animationRef.current;

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      style={{
        background: 'transparent',
      }}
    />
  );
};

export default AnimatedBackground;
