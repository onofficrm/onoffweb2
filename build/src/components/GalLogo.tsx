import React from 'react';

interface GalLogoProps {
  variant?: 'light' | 'dark'; // 'light' is for light backgrounds (Navy/Blue text), 'dark' is for Navy/Dark backgrounds (White/Bright blue)
  size?: 'sm' | 'md' | 'lg';
  showSlogan?: boolean;
  className?: string;
  onClick?: () => void;
}

export const GalLogo: React.FC<GalLogoProps> = ({
  variant = 'light',
  size = 'md',
  showSlogan = true,
  className = '',
  onClick,
}) => {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl sm:text-3xl',
  };

  const sloganSizes = {
    sm: 'text-[9px] tracking-[0.24em]',
    md: 'text-[10px] tracking-[0.28em]',
    lg: 'text-xs tracking-[0.32em]',
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none cursor-pointer group ${className}`}
      id="gal-church-logo"
    >
      {/* Brand Icon Mark */}
      <div className={`relative shrink-0 ${iconSizes[size]} transition-transform duration-200 group-hover:scale-105`}>
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* G - Forward Journey Arc */}
          <path
            d="M14 40C14 25.64 25.64 14 40 14C48 14 55 17.5 59.8 23L50.5 30.5C47.8 27 44.1 25 40 25C31.716 25 25 31.716 25 40C25 48.284 31.716 55 40 55C45.8 55 50.7 51.8 53.2 47H38V37H63.5C63.8 38.5 64 40.2 64 42C64 55.255 53.255 66 40 66C25.64 66 14 54.36 14 40Z"
            fill={isDark ? '#FFFFFF' : '#073063'}
          />

          {/* A - Awaken Triangle Apex */}
          <path
            d="M42 16L61 55H49L45.5 47.5H38.5L35 55H23L42 16ZM42 28.5L40 38.5H44L42 28.5Z"
            fill={isDark ? '#60A5FA' : '#0D559A'}
          />

          {/* L - Love Foundation */}
          <path
            d="M54 18H64.5V47.5C64.5 52.8 68.8 57 74 57H79V66H74C63 66 54 57.7 54 46.5V18Z"
            fill={isDark ? '#38BDF8' : '#198AD6'}
          />

          {/* Awaken Light Sparkle */}
          <circle
            cx="42"
            cy="11"
            r="3"
            fill={isDark ? '#93C5FD' : '#198AD6'}
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-2">
          <span
            className={`font-display font-black leading-none tracking-tight ${titleSizes[size]} ${
              isDark ? 'text-white' : 'text-[#073063]'
            }`}
          >
            GAL CHURCH
          </span>
        </div>

        {showSlogan && (
          <span
            className={`font-display font-bold uppercase mt-1 ${sloganSizes[size]} ${
              isDark ? 'text-[#38BDF8]' : 'text-[#198AD6]'
            }`}
          >
            GO · AWAKEN · LOVE
          </span>
        )}
      </div>
    </div>
  );
};
