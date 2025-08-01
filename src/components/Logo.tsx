import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 40, showText = true }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* SVG Logo */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-110"
      >
        {/* Outer circle with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          
          {/* Glow effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#logoGradient)"
          opacity="0.1"
          className="animate-pulse"
        />
        
        {/* Main circle border */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
        />
        
        {/* Letter E */}
        <path
          d="M25 25 L25 75 M25 25 L45 25 M25 50 L40 50 M25 75 L45 75"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Letter N */}
        <path
          d="M55 25 L55 75 M55 25 L75 75 M75 25 L75 75"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Decorative dots representing AI/tech */}
        <circle cx="35" cy="15" r="2" fill="#3B82F6" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="65" cy="15" r="2" fill="#8B5CF6" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="85" cy="35" r="2" fill="#06B6D4" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="85" cy="65" r="2" fill="#3B82F6" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="35" cy="85" r="2" fill="#8B5CF6" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="15" cy="65" r="2" fill="#06B6D4" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="15" cy="35" r="2" fill="#3B82F6" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.7s" repeatCount="indefinite" />
        </circle>
      </svg>
      
      {/* Text Logo */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Elijah
          </span>
          <span className="text-sm font-medium text-gray-400 -mt-1">
            Nzeli
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
