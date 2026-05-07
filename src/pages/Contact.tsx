import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Instagram, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24 max-w-3xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-brand-gold mb-6 pb-2 leading-tight">
          Get In Touch
        </h1>
        <p className="text-xl text-slate-400 font-light leading-relaxed">
          Have a project in mind? Let's discuss how we can help bring your vision to life.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
        
        {/* Left Column: Contact details & Map */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-10"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 group-hover:glass-gold transition-all text-brand-gold">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Office Address</h4>
                <p className="text-slate-400 text-sm leading-relaxed">CFW3+WVR, Kullampalayam,<br />Gobichettipalayam,<br />Tamil Nadu 638476</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 group-hover:glass-blue transition-all text-brand-blue-light">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Email</h4>
                <a href="mailto:info@thiran360ai.com" className="text-slate-400 text-sm hover:text-white transition-colors">info@thiran360ai.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 group-hover:glass-blue transition-all text-emerald-400">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Phone</h4>
                <p className="text-slate-400 text-sm">Mon-Fri from 9am to 6pm.</p>
                <a href="tel:#" className="text-slate-400 text-sm hover:text-white transition-colors mt-1 block">Request a call back</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/thiran_360_ai?igsh=MWFmZGN6d3dmbmM0NQ==" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-300 hover:text-brand-gold hover:glass-gold shadow-lg hover:-translate-y-1 transition-all">
                <Instagram size={22} />
              </a>
              <a href="https://linkedin.com/in/manickavasagarg" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-300 hover:text-brand-blue-light hover:glass-blue shadow-lg hover:-translate-y-1 transition-all">
                <Linkedin size={22} />
              </a>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden glass border-slate-700 h-64 w-full relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15643.51307694119!2d77.42656914569503!3d11.453303642345517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93d7cb570a2f7%3A0x6bbaeee0df79ae0a!2sKullampalayam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1714578132987!5m2!1sen!2sin" 
              className="w-full h-full border-0 absolute inset-0 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 opacity-80 hover:opacity-100" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <div className="glass p-8 md:p-12 rounded-3xl h-full relative overflow-hidden">
             {/* Subdued Glow effect */}
             <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none" />
             
             {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
              >
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 size={40} className="text-emerald-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-slate-400 text-lg max-w-md">Thank you for reaching out. A member of our team will get back to you shortly to discuss your vision.</p>
              </motion.div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col justify-center">
                 <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-slate-400 mb-2 group-focus-within:text-brand-gold transition-colors">First Name</label>
                      <input required type="text" className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" placeholder="John" />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-slate-400 mb-2 group-focus-within:text-brand-gold transition-colors">Last Name</label>
                      <input required type="text" className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" placeholder="Doe" />
                    </div>
                 </div>
                 
                 <div className="group">
                    <label className="block text-sm font-medium text-slate-400 mb-2 group-focus-within:text-brand-gold transition-colors">Email Address</label>
                    <input required type="email" className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" placeholder="john@example.com" />
                 </div>

                 <div className="group">
                    <label className="block text-sm font-medium text-slate-400 mb-2 group-focus-within:text-brand-gold transition-colors">Subject</label>
                    <input required type="text" className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" placeholder="How can we help you?" />
                 </div>

                 <div className="group">
                    <label className="block text-sm font-medium text-slate-400 mb-2 group-focus-within:text-brand-gold transition-colors">Message</label>
                    <textarea required rows={5} className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                 </div>

                 <button type="submit" className="w-full py-4 rounded-xl bg-slate-100 text-slate-900 font-bold text-lg hover:bg-brand-gold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-all mt-4">
                   Send Message <Send size={20} />
                 </button>
               </form>
             )}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
