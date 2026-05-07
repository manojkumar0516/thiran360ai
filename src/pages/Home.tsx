import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { Globe } from '../components/Globe';
import { ChevronRight } from 'lucide-react';

export function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden px-6 pb-20">
      
      {/* 3D Globe Section */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0 flex items-center justify-center top-[-10%] md:top-[10%] opacity-80 pointer-events-none"
      >
        <Globe className="w-[120%] max-w-[900px] md:w-[80%] md:max-w-[1000px] blur-[1px]" />
      </motion.div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-20 md:mt-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-blue-light/30 mb-8"
        >
           <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
           <span className="text-sm font-medium text-slate-300 tracking-wide">Pioneering the Future of AI</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
          style={{ y: y2 }}
        >
          {/* Glowing orbital text effect mockup */}
          <div className="absolute -inset-10 rounded-full border border-brand-gold/20 animate-[spin_60s_linear_infinite] opacity-30 mix-blend-screen" />
          <div className="absolute -inset-20 rounded-full border border-brand-blue-light/20 animate-[spin_80s_linear_infinite_reverse] opacity-30 mix-blend-screen" />
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 mb-6 drop-shadow-2xl leading-tight">
            Innovating the  <span className="text-brand-gold drop-shadow-[0_0_25px_rgba(251,191,36,0.6)] relative z-10">Digital Future</span> 
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl text-slate-300 font-light mb-12 max-w-3xl leading-relaxed"
        >
          Delivering scalable digital solutions powered by innovation and creativity.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Link to="/services" className="group px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue-light to-brand-blue text-white font-semibold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center ring-1 ring-brand-blue-light/50">
            Explore Services
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/products" className="group px-8 py-4 rounded-full glass hover:glass-gold text-white font-semibold flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/0 via-brand-gold/10 to-brand-gold/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            Our Products
          </Link>
          <Link to="/contact" className="px-8 py-4 rounded-full border border-slate-700 hover:border-slate-400 text-slate-300 font-semibold transition-all duration-300 hover:-translate-y-1 hover:text-white w-full sm:w-auto justify-center flex">
            Contact Us
          </Link>
        </motion.div>
      </div>

    </div>
  );
}
