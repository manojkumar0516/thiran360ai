import { motion } from 'motion/react';
import { Activity, Map, Briefcase, Camera, ShoppingBag, Car, BookOpen, Home, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

const products = [
  {
    name: 'OT - Smart Monitoring',
    category: 'Automation',
    icon: Activity,
    delay: 0.1,
    size: 'lg',
    description: 'Advanced real-time operational technology monitoring and industrial automation platform.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Smart Monitoring System',
    category: 'Analytics',
    icon: Cpu,
    delay: 0.2,
    size: 'md',
    description: 'AI-driven predictive maintenance and monitoring capabilities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'GPS Tracking',
    category: 'Logistics',
    icon: Map,
    delay: 0.3,
    size: 'sm',
    description: 'Precision geolocation and fleet management analytics.',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Corporate Automation',
    category: 'Business',
    icon: Briefcase,
    delay: 0.4,
    size: 'lg',
    description: 'Complete ERP and CRM intelligent solutions for modern enterprises.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Capture360',
    category: 'Media',
    icon: Camera,
    delay: 0.5,
    size: 'md',
    description: 'Immersive 360-degree media processing and analytics suite.',
    image: 'https://images.unsplash.com/photo-1512753360435-329c4535a9a7?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Ecom360',
    category: 'Commerce',
    icon: ShoppingBag,
    delay: 0.6,
    size: 'sm',
    description: 'Full-cycle intelligent e-commerce ecosystem engine.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Thiran Telematics',
    category: 'Automotive',
    icon: Car,
    delay: 0.7,
    size: 'lg',
    description: 'Next-gen vehicle tracking, diagnostic, and autonomous data collection systems.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Libro360AI',
    category: 'Education',
    icon: BookOpen,
    delay: 0.8,
    size: 'md',
    description: 'AI-powered learning management and content aggregation platform.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Property360',
    category: 'Real Estate',
    icon: Home,
    delay: 0.9,
    size: 'sm',
    description: 'Intelligent property management, virtual tours, and tenant analytics.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Kovais',
    category: 'Ecosystem',
    icon: Cloud,
    delay: 1.0,
    size: 'md',
    description: 'Unified cloud infrastructure orchestration and marketplace.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  }
];

import { Cloud } from 'lucide-react';

export function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <span className="text-brand-blue-light font-medium tracking-wider uppercase text-sm mb-4 block">Our Ecosystem</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          Intelligent Products
        </h1>
        <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
          Explore our suite of enterprise-grade, AI-powered products designed to optimize, monitor, and scale your operations globally.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: product.delay * 0.5 }}
            className="col-span-1 relative group rounded-3xl overflow-hidden glass hover:glass-blue transition-all duration-500 cursor-pointer flex flex-col min-h-[320px] md:min-h-[360px]"
          >
            {/* Render Image with Overlay instead of just gradient */}
            <div className="absolute inset-0 z-0">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-light/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Simulated UI elements for "dashboard" feel */}
            <div className="absolute top-4 right-4 flex gap-1.5 z-10 opacity-30 group-hover:opacity-100 transition-opacity">
              <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-brand-blue-light" />
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>

            <div className="relative z-10 p-8 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-auto">
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center shadow-lg group-hover:border-brand-blue-light/50 transition-colors">
                  <product.icon size={24} className="text-brand-blue-light group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-medium text-brand-gold uppercase tracking-wider">{product.category}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{product.name}</h3>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-800/60 pt-6">
                <p className="text-sm text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors">
                  {product.description}
                </p>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
