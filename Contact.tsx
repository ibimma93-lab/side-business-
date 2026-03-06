import { useState, FormEvent } from 'react';
import { Mail, Phone, CircleCheck, LoaderCircle } from 'lucide-react';
import { Button } from './Hero';
import { motion } from 'motion/react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      // In a real app, we would send the data here
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-12 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900 mb-12">Let's streamline your business.</h3>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-16"
        >
          <a href="mailto:annmarie.pinkney@gmail.com" className="flex items-center gap-3 text-lg hover:text-gray-600 transition-colors group p-4 rounded-xl hover:bg-white/50 hover:backdrop-blur-sm">
            <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full group-hover:bg-gray-900 group-hover:text-white transition-colors shadow-sm">
              <Mail size={20} />
            </div>
            <span>annmarie.pinkney@gmail.com</span>
          </a>
          <a href="tel:416-906-9961" className="flex items-center gap-3 text-lg hover:text-gray-600 transition-colors group p-4 rounded-xl hover:bg-white/50 hover:backdrop-blur-sm">
            <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full group-hover:bg-gray-900 group-hover:text-white transition-colors shadow-sm">
              <Phone size={20} />
            </div>
            <span>416-906-9961</span>
          </a>
        </motion.div>

        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto bg-green-50/80 backdrop-blur-md border border-green-200 p-6 md:p-8 text-center rounded-2xl shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <CircleCheck className="w-12 h-12 text-green-600" />
            </div>
            <h4 className="text-2xl font-serif text-gray-900 mb-2">Message Sent!</h4>
            <p className="text-gray-600">Thank you for reaching out. I'll get back to you shortly to discuss how we can improve your operations.</p>
            <button onClick={() => setStatus('idle')} className="mt-6 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 underline">
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            name="contact" 
            method="post" 
            onSubmit={handleSubmit} 
            className="max-w-xl mx-auto space-y-6 text-left bg-white/40 backdrop-blur-md border border-white/50 p-6 md:p-10 rounded-3xl shadow-xl"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                required 
                className="w-full px-4 py-3 bg-white/60 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all hover:bg-white/80"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required 
                className="w-full px-4 py-3 bg-white/60 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all hover:bg-white/80"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can I help?</label>
              <textarea 
                name="message" 
                id="message" 
                rows={4} 
                required 
                className="w-full px-4 py-3 bg-white/60 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all hover:bg-white/80"
                placeholder="Tell me about your business challenges..."
              ></textarea>
            </div>
            
            {status === 'error' && (
              <div className="text-red-600 text-sm text-center">Something went wrong. Please try again or email me directly.</div>
            )}
            
            <div className="text-center pt-4">
              <Button type="submit" className="w-full md:w-auto" disabled={status === 'submitting'}>
                {status === 'submitting' ? (
                  <span className="flex items-center gap-2">
                    <LoaderCircle className="animate-spin w-4 h-4" /> Sending...
                  </span>
                ) : "Send Message"}
              </Button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
