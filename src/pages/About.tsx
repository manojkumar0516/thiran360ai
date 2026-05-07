  import { motion, useInView } from 'motion/react';
  import { useRef, useEffect, useState } from 'react';
  import { Target, Compass, Zap, Cpu, Users, Award, ShieldCheck, Box } from 'lucide-react';
  import { cn } from '@/lib/utils';


  // Simple counter animation hook
  function useCountUp(end: number, duration: number = 2) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const increment = end / (duration * 60);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.ceil(start));
          }
        }, 1000 / 60);
        return () => clearInterval(timer);
      }
    }, [isInView, end, duration]);

    return { count, ref };
  }

  function StatCard({ label, value, suffix = "" }: { label: string, value: number, suffix?: string }) {
    const { count, ref } = useCountUp(value);
    return (
      <div ref={ref} className="glass p-8 rounded-2xl text-center border-t-2 border-t-brand-blue-light/50">
        <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 mb-2">
          {count}{suffix}
        </h3>
        <p className="text-slate-400 uppercase tracking-widest text-xs font-semibold">{label}</p>
      </div>
    );
  }

  export function About() {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-brand-gold mb-6 pb-2 leading-tight">
            Pioneering Intelligent Innovation
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            We constantly push boundaries, harnessing emerging technologies to shape intelligent solutions that define the future.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-blue p-10 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target size={120} />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-brand-blue-light/20 flex items-center justify-center text-brand-blue-light"><Target size={24} /></span>
                Our Vision
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                To become a global leader in intelligent digital transformation—empowering industries through AI, design, and innovation.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-gold p-10 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Compass size={120} />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold"><Compass size={24} /></span>
                Our Mission
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                To craft future-ready experiences by blending creativity, technology, and strategy—driven by purpose, fueled by passion.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <StatCard label="Projects Completed" value={60} suffix="+" />
          <StatCard label="Partners & Tie-Ups" value={40} suffix="+" />
          <StatCard label="Team Members" value={48} />
          <StatCard label="Years Experience" value={5} suffix="+" />
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Innovation", desc: "Thinking beyond the possible." },
              { icon: Box, title: "Creativity", desc: "Design meets engineering." },
              { icon: Cpu, title: "AI-Driven", desc: "Intelligence at the core." },
              { icon: ShieldCheck, title: "Automation", desc: "Streamlining the future." }
            ].map((val, i) => (
              <motion.div 
                  key={val.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 text-center hover:border-brand-blue-light/50 transition-colors"
              >
                  <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-6 text-brand-blue-light">
                    <val.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{val.title}</h3>
                  <p className="text-slate-400 text-sm">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-12">Strategic Partnerships</h2>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
              {['AWS Partner', 'Advanced Technology Partner', 'Microsoft Azure', 'Cloud Solution Provider', 'Oracle Gold Level Partner'].map((partner, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="px-6 py-4 glass rounded-full text-slate-300 font-medium text-sm md:text-base border-brand-blue/20 hover:border-brand-gold/50 transition-colors hover:text-white"
                >
                  {partner}
                </motion.div>
              ))}
          </div>
        </div>

        {/* CEO Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 border-l-4 border-l-brand-gold relative overflow-hidden"
        >
          {/* Subtle background element */}
          <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
            <Award size={400} />
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 items-center relative z-10">
            <div className="col-span-1 flex justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-slate-800 shadow-[0_0_30px_rgba(251,191,36,0.15)] bg-gradient-to-b from-slate-700 to-slate-900 flex items-center justify-center relative">
                  <img src="https://cdn.phototourl.com/free/2026-05-07-a3204f27-cf74-4771-8a55-11334c7c1606.jpg" alt="Maanickavasagar G" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  <div className="absolute inset-0 rounded-full ring-inset ring-2 ring-brand-gold/20 mix-blend-overlay"></div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 text-center md:text-left">
              <span className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-2 block">Meet Our CEO</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Maanickavasagar G</h2>
              <p className="text-brand-blue-light font-medium mb-8">Chief Executive Officer & Founder</p>
              
              <blockquote className="text-xl md:text-2xl text-slate-300 italic font-light leading-relaxed border-l-4 border-slate-700 pl-6 space-y-4">
                "At Thiran, our vision is to empower innovation through intelligence — creating tech that doesn't just work, but inspires."
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
