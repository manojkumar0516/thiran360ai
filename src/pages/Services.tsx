import { motion } from 'motion/react';
import { Globe, Smartphone, Server, Cpu, Cloud, Megaphone, Laptop } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    title: 'Web Development',
    description: 'Next-generation web applications built with scalable architectures and futuristic UI/UX.',
    icon: Globe,
    color: 'from-blue-600 to-blue-400',
    shadow: 'shadow-[0_0_20px_rgba(37,99,235,0.2)]'
  },
  {
    title: 'Android Development',
    description: 'High-performance, intelligent Android applications tailored for the modern enterprise.',
    icon: Smartphone,
    color: 'from-emerald-600 to-emerald-400',
    shadow: 'shadow-[0_0_20px_rgba(16,185,129,0.2)]'
  },
  {
    title: 'iOS Development',
    description: 'Premium native iOS experiences combining sleek design with powerful AI integrations.',
    icon: Laptop,
    color: 'from-slate-600 to-slate-400',
    shadow: 'shadow-[0_0_20px_rgba(100,116,139,0.2)]'
  },
  {
    title: 'IoT Solutions',
    description: 'Smart connected ecosystems that bridge the physical world with intelligent cloud oversight.',
    icon: Cpu,
    color: 'from-brand-gold-dark to-brand-gold',
    shadow: 'shadow-[0_0_20px_rgba(251,191,36,0.2)]'
  },
  {
    title: 'Backend Development',
    description: 'Robust, secure, and infinitely scalable server-side architectures running the world.',
    icon: Server,
    color: 'from-purple-600 to-purple-400',
    shadow: 'shadow-[0_0_20px_rgba(147,51,234,0.2)]'
  },
  {
    title: 'DevOps',
    description: 'Seamless continuous integration, deployment pipelines, and cloud orchestration.',
    icon: Cloud,
    color: 'from-cyan-600 to-cyan-400',
    shadow: 'shadow-[0_0_20px_rgba(6,182,212,0.2)]'
  },
  {
    title: 'Digital Marketing',
    description: 'AI-driven marketing strategies that target, acquire, and retain valuable global audiences.',
    icon: Megaphone,
    color: 'from-rose-600 to-rose-400',
    shadow: 'shadow-[0_0_20px_rgba(225,29,72,0.2)]'
  }
];

export function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <span className="text-brand-gold font-medium tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          Transforming Ideas into Reality
        </h1>
        <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
          We leverage cutting-edge technologies to build intelligent, scalable, and beautifully designed solutions for the visionaries of tomorrow.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={cn(
              "group relative p-1 rounded-2xl glass hover:bg-slate-800/80 transition-all duration-500 overflow-hidden",
              service.shadow, 
              "hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:-translate-y-2 cursor-pointer"
            )}
          >
            {/* Hover Gradient Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl" />
            
            <div className="p-8 h-full rounded-xl bg-slate-950/50 backdrop-blur-sm border border-slate-800/50 relative z-10 flex flex-col">
              <div className={cn("w-14 h-14 rounded-lg flex items-center justify-center mb-6 bg-gradient-to-br shadow-lg", service.color)}>
                <service.icon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-brand-blue-light transition-colors">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light mt-auto">
                {service.description}
              </p>
              
              <div className="mt-8 flex items-center text-sm font-medium text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                Explore Solution <span className="ml-2">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
