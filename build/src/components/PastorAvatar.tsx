import React, { useState } from 'react';
import { Sparkles, User } from 'lucide-react';

interface PastorAvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const PastorAvatar: React.FC<PastorAvatarProps> = ({
  className = '',
  size = 'hero',
}) => {
  const candidateImages = [
    '/pastor-profile.png',
    '/i_2bec537d4f86.png',
    '/pastor-profile.jpg',
    '/assets/pastor-profile.png',
    '/assets/i_2bec537d4f86.png',
  ];
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: 'w-16 h-16 rounded-2xl',
    md: 'w-24 h-24 rounded-2xl',
    lg: 'w-56 h-56 rounded-3xl',
    hero: 'w-full max-w-[280px] sm:max-w-sm aspect-[3/4] rounded-3xl',
  };

  const handleImageError = () => {
    if (candidateIndex < candidateImages.length - 1) {
      setCandidateIndex(prev => prev + 1);
    } else {
      setImgError(true);
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-white shadow-md border border-slate-200/80 p-2 sm:p-2.5 ${sizeClasses[size]} ${className}`}
    >
      <div className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-50 flex items-center justify-center">
        {!imgError ? (
          <img
            src={candidateImages[candidateIndex]}
            alt="이대희 목사"
            referrerPolicy="no-referrer"
            onError={handleImageError}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          /* Editorial portrait card */
          <div className="w-full h-full flex flex-col items-center justify-between p-6 sm:p-8 text-center relative bg-gradient-to-b from-[#073063] via-[#0D559A] to-[#073063] text-white">
            <div className="w-full flex justify-between items-center text-[10px] font-bold tracking-widest text-sky-200 uppercase font-display">
              <span>GAL CHURCH</span>
              <span>LEADERSHIP</span>
            </div>

            <div className="flex flex-col items-center my-auto space-y-3">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center shadow-inner">
                <User className="w-12 h-12 text-white" />
              </div>
              <div className="space-y-1">
                <h4 className="text-2xl font-bold tracking-tight text-white">
                  이대희 목사
                </h4>
                <p className="text-xs text-sky-200 font-medium tracking-wider">
                  GAL CHURCH
                </p>
              </div>
            </div>

            <div className="text-[11px] text-sky-100/80 leading-relaxed max-w-[220px]">
              &ldquo;말씀을 삶으로, 다음 세대를 믿음으로.&rdquo;
            </div>
          </div>
        )}

        {/* Small identification tag */}
        <div className="absolute bottom-3.5 left-3.5 bg-black/45 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-white font-medium flex items-center gap-1.5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#198AD6]" />
          <span>이대희 목사</span>
        </div>
      </div>
    </div>
  );
};
