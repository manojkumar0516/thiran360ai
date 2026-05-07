import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 backdrop-blur-sm pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="inline-block mb-6 outline-none">
            <Logo />
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
            Empowering innovation through intelligence. We are a global leader in intelligent digital transformation, 
            crafting future-ready experiences by blending creativity, technology, and strategy.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/thiran_360_ai?igsh=MWFmZGN6d3dmbmM0NQ==" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glass-gold transition-all text-slate-300 hover:text-brand-gold">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com/in/manickavasagarg" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glass-blue transition-all text-slate-300 hover:text-brand-blue-light">
              <Linkedin size={18} />
            </a>
            <a href="mailto:info@thiran360ai.com" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glass-blue transition-all text-slate-300 hover:text-white">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 border-b border-slate-800 pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-3">
            {['Home', 'Services', 'Products', 'About', 'Careers', 'Contact'].map(item => (
              <li key={item}>
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm text-slate-400 hover:text-brand-gold transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 border-b border-slate-800 pb-2 inline-block">Contact</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-blue-light shrink-0 mt-0.5" />
              <span className="text-sm text-slate-400 leading-relaxed">CFW3+WVR, Kullampalayam, Gobichettipalayam, Tamil Nadu 638476</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-blue-light shrink-0" />
              <a href="mailto:info@thiran360ai.com" className="text-sm text-slate-400 hover:text-white transition-colors">info@thiran360ai.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between">
        <p className="text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} THIRAN 360 AI. All rights reserved.
        </p>
        <p className="text-slate-500 text-xs mt-2 md:mt-0">
          Designed for the Future.
        </p>
      </div>
    </footer>
  );
}
