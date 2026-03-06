import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'text';
  children?: React.ReactNode;
}

export const Button = ({ variant = "primary", children, className = "", ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900";
  
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 border border-transparent rounded-lg shadow-lg hover:shadow-xl",
    outline: "bg-white/50 backdrop-blur-sm text-gray-900 border border-gray-900 hover:bg-white/80 rounded-lg",
    text: "bg-transparent text-gray-900 hover:text-gray-600 underline-offset-4 hover:underline p-0"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-3/5 space-y-8 relative z-10"
      >
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl -z-10"></div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight text-gray-900 drop-shadow-sm">
          Clarity, consistency, and time back for busy businesses.
        </h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="p-6 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl max-w-2xl"
        >
          <p className="text-xl text-gray-800 font-light leading-relaxed">
            I’m a PMP-certified operations leader turning chaos into clear, repeatable systems. Get structure without adding more work to your day.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <a href="#contact">
            <Button>Schedule a Consultation</Button>
          </a>
          <a href="#services">
            <Button variant="outline">View Services</Button>
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="md:w-2/5 relative"
      >
        <div className="aspect-[4/5] overflow-hidden relative rounded-2xl shadow-2xl border-4 border-white/20">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Relaxed work environment with counter, stools, and urban skyline view" 
            className="object-cover w-full h-full opacity-90 hover:scale-105 transition-all duration-700 grayscale hover:grayscale-0 active:grayscale-0"
            referrerPolicy="no-referrer"
          />
          {/* Glass Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent pointer-events-none"></div>
        </div>
        
        {/* Floating Glass Element */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -bottom-6 -left-6 w-full h-full border border-gray-900/10 rounded-2xl -z-10 bg-white/10 backdrop-blur-[2px]"
        ></motion.div>
      </motion.div>
    </section>
  );
}
