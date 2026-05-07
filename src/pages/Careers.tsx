import { motion } from 'motion/react';
import { UploadCloud, CheckCircle2, ChevronRight, Briefcase, GraduationCap, Heart, Coffee } from 'lucide-react';
import { useState } from 'react';

export function Careers() {
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24 max-w-3xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-brand-blue-light mb-6 pb-2 leading-tight">
          Join the AI Revolution
        </h1>
        <p className="text-xl text-slate-400 font-light leading-relaxed">
          Build the future with us. We're looking for passionate minds to join our mission of intelligent digital transformation.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Info Sections */}
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Briefcase className="text-brand-gold" /> Why THIRAN 360 AI?
              </h2>
              <p className="text-slate-400 leading-relaxed font-light">
                We are a culture of innovators, thinkers, and builders. Here, your ideas have the runway to become world-class products. We provide a futuristic environment where creativity meets cutting-edge technology.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
               {[
                 { icon: Heart, title: "Health & Wellness", desc: "Premium comprehensive healthcare coverage." },
                 { icon: GraduationCap, title: "Continuous Learning", desc: "Budgets for courses, conferences, and books." },
                 { icon: Coffee, title: "Modern Workspace", desc: "State-of-the-art office and remote flexibility." },
                 { icon: CheckCircle2, title: "Stock Options", desc: "Invested in the future we're building together." }
               ].map((benefit) => (
                 <div key={benefit.title} className="glass p-6 rounded-2xl hover:border-brand-blue-light/30 transition-colors">
                   <benefit.icon className="text-brand-blue-light mb-4" size={24} />
                   <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                   <p className="text-xs text-slate-400">{benefit.desc}</p>
                 </div>
               ))}
            </div>

            <div className="glass-blue p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="text-brand-blue-light" /> Internship Opportunities
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Are you a student or fresh graduate passionate about AI? Our internship program offers hands-on experience with real-world projects and mentorship from industry leaders.
              </p>
              <button className="text-brand-blue-light font-medium text-sm flex items-center gap-1 hover:text-white transition-colors">
                Learn more about internships <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Application Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden">
            {/* Form Glow Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue-light/10 blur-[80px] -z-10 rounded-full" />
            
            <h2 className="text-3xl font-bold text-white mb-8">Apply Now</h2>
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                <p className="text-slate-400">Our hiring team will review your profile and get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-slate-400 mb-1 group-focus-within:text-brand-blue-light transition-colors">Full Name</label>
                    <input required type="text" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue-light focus:ring-1 focus:ring-brand-blue-light transition-all placeholder:text-slate-600" placeholder="John Doe" />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-slate-400 mb-1 group-focus-within:text-brand-blue-light transition-colors">Email Address</label>
                    <input required type="email" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue-light focus:ring-1 focus:ring-brand-blue-light transition-all placeholder:text-slate-600" placeholder="john@example.com" />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-slate-400 mb-1 group-focus-within:text-brand-blue-light transition-colors">Phone Number</label>
                    <input required type="tel" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue-light focus:ring-1 focus:ring-brand-blue-light transition-all placeholder:text-slate-600" placeholder="+1 (555) 000-0000" />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-slate-400 mb-1 group-focus-within:text-brand-blue-light transition-colors">Position Applying For</label>
                    <select required defaultValue="" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue-light focus:ring-1 focus:ring-brand-blue-light transition-all appearance-none cursor-pointer">
                      <option value="" disabled>Select a position</option>
                      <option value="frontend">Frontend Engineer</option>
                      <option value="backend">Backend Engineer</option>
                      <option value="ai">AI/ML Researcher</option>
                      <option value="intern">Internship Program</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-slate-400 mb-1">Resume / CV</label>
                    <div className="relative border-2 border-dashed border-slate-700 hover:border-brand-blue-light rounded-xl p-8 text-center transition-colors cursor-pointer group-focus-within:border-brand-blue-light bg-slate-950/30">
                      <input 
                        type="file" 
                        accept=".pdf,.doc,.docx"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                      />
                      <div className="flex flex-col items-center justify-center text-slate-400 pointer-events-none">
                        <UploadCloud size={32} className="mb-3 text-slate-500 group-hover:text-brand-blue-light transition-colors" />
                        <p className="text-sm">
                          {file ? <span className="text-brand-blue-light font-medium">{file.name}</span> : <span>Drag and drop or <span className="text-brand-blue-light">browse</span> to upload</span>}
                        </p>
                        <p className="text-xs text-slate-600 mt-2">PDF, DOC, DOCX up to 10MB</p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-slate-400 mb-1 group-focus-within:text-brand-blue-light transition-colors">Cover Letter / Message</label>
                    <textarea rows={3} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue-light focus:ring-1 focus:ring-brand-blue-light transition-all placeholder:text-slate-600 resize-none" placeholder="Tell us why you'd be a great fit..."></textarea>
                  </div>
                </div>

                <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-blue-light text-white font-bold text-lg hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-1 active:scale-[0.98]">
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
