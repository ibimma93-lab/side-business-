import { UserCheck, Brain, Zap, Briefcase, CircleCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-12 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900">
              Operations & Project Leader helping you scale.
            </h3>
            <div className="space-y-6 text-lg text-gray-700 font-light">
              <p>
                I am a PMP-certified strategic project leader specializing in digital transformation and operational efficiency. Known for bringing structure to complex environments by turning day-to-day work into clear, repeatable systems that improve workflows, strengthen client experiences, and make businesses easier to run.
              </p>
              <p>
                My passion lies in turning what’s in your head into clear systems and client-ready materials. I help businesses run smoothly by fostering open lines of dialogue and creating repeatable processes that don't depend on constant oversight.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {[
                { icon: UserCheck, title: "Capable & Results-Driven", desc: "Dedicated to resolving customer and business challenges." },
                { icon: Brain, title: "Knowledgeable", desc: "Expertise in steering complex projects and ensuring success." },
                { icon: Zap, title: "Hardworking & Organized", desc: "Consistent high-performer dedicated to surpassing goals." },
                { icon: Briefcase, title: "PMP Certified", desc: "Professional Project Management Certification from PMI." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 p-4 rounded-xl hover:bg-white/40 hover:backdrop-blur-sm transition-colors"
                >
                  <item.icon className="w-6 h-6 text-gray-800 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-white/30 backdrop-blur-md p-6 md:p-12 border border-white/50 shadow-xl relative rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-900"></div>
              <h4 className="font-serif text-2xl mb-6 text-gray-900">How I help you reclaim your time</h4>
              <ul className="space-y-4">
                {[
                  "Turning chaos into clear, repeatable systems that improve efficiency.",
                  "Documenting workflows so your business runs without you in every meeting.",
                  "Creating client-ready materials that look professional and build trust.",
                  "Implementing automation to reduce manual intervention and errors."
                ].map((text, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <CircleCheck className="w-6 h-6 text-gray-900 shrink-0" />
                    <span className="text-gray-800">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
