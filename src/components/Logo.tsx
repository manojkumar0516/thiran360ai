import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  withText?: boolean;
}

export function Logo({ className, withText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3 group select-none", className)}>
      <div className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center shrink-0">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#2563eb]/30 blur-[12px] rounded-full group-hover:bg-[#fbbf24]/40 transition-colors duration-700" />
        
        {/* Abstract 360 AI Mark */}
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-full h-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          {/* Outer Ring */}
          <motion.circle 
            cx="50" cy="50" r="38" 
            stroke="url(#blue-gradient)" 
            strokeWidth="6" 
            strokeDasharray="160 250"
            strokeLinecap="round"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ originX: "50px", originY: "50px" }}
          />
          {/* Inner Ring */}
          <motion.circle 
            cx="50" cy="50" r="24" 
            stroke="url(#gold-gradient)" 
            strokeWidth="5" 
            strokeDasharray="60 120"
            strokeLinecap="round"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ originX: "50px", originY: "50px" }}
          />
          {/* Center Element */}
          <motion.path 
            d="M50 36 L62 56 L38 56 Z" 
            fill="url(#white-gradient)" 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "50px", originY: "50px" }}
          />

          <defs>
            <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <linearGradient id="white-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {withText && (
        <div className="flex flex-col justify-center translate-y-[1px]">
          <span className="text-[1.125rem] md:text-xl font-black tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 leading-none">
            THIRAN
          </span>
          <span className="text-[0.6rem] md:text-[0.65rem] font-bold tracking-[0.3em] text-[#fbbf24] uppercase leading-none mt-1">
            360 AI
          </span>
        </div>
      )}
    </div>
  );
}
