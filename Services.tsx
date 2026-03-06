import { Mail, Settings, LayoutTemplate, Plus } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: "Client Experience & Communication System",
    icon: Mail,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    items: [
      "Client email templates (inquiry, booking, next steps)",
      "Branded document templates (welcome guides, process overviews)",
      "A simple “What to Expect” client guide (PDF + web version)",
      "A follow-up checklist so no one drops the ball"
    ],
    problemSolved: [
      "“I’m busy and forget to follow up”",
      "“My emails feel messy or inconsistent”",
      "“Clients don’t know what’s happening”",
      "“I keep answering the same questions”"
    ]
  },
  {
    title: "Business Operations Cleanup",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    items: [
      "Clean folder structure in Google Drive",
      "Clear SOPs for common tasks",
      "Simple internal checklists",
      "“If this happens, do this” playbooks",
      "Timeline + responsibility clarity"
    ],
    problemSolved: [
      "“Everything lives in my head”",
      "“I can’t delegate”",
      "“My admin is a mess”",
      "“I’m the bottleneck”"
    ]
  },
  {
    title: "Done-For-You Business Foundations",
    icon: LayoutTemplate,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    items: [
      "Simple website setup",
      "Clear service descriptions",
      "Guides/checklists",
      "FAQ and process pages",
      "A small “resource library”"
    ],
    problemSolved: [
      "“I look unprofessional online”",
      "“I don’t have time to build this”",
      "“My website doesn’t explain what I do”"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 md:px-12 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">What I Do</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-gray-900">Core Services</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.article 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group flex flex-col h-full bg-white/40 backdrop-blur-md border border-white/50 hover:border-white/80 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-md p-3 shadow-sm rounded-xl">
                    <service.icon className="w-6 h-6 text-gray-900" />
                  </div>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow text-left">
                <h4 className="text-xl font-serif font-bold mb-6 text-gray-900 min-h-[56px]">{service.title}</h4>
                
                <div className="mb-6">
                  <h5 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Deliverables</h5>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 font-light flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0 group-hover:bg-gray-900 transition-colors"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="w-full h-px bg-gray-200/50 mb-6"></div>
                
                <div className="mb-8 flex-grow">
                  <h5 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Solves</h5>
                  <ul className="space-y-2">
                    {service.problemSolved.map((problem, i) => (
                      <li key={i} className="text-sm text-gray-600 italic">{problem}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white/30 backdrop-blur-md p-6 md:p-12 text-center max-w-4xl mx-auto border border-white/50 rounded-3xl shadow-xl"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-white p-2 rounded-full shadow-sm">
              <Plus className="w-6 h-6 text-gray-900" />
            </div>
          </div>
          <h4 className="text-2xl font-serif font-medium text-gray-900 mb-4">Need something custom?</h4>
          <p className="text-gray-700 font-light text-lg mb-0">
            In addition to the core packages, I offer <span className="font-medium text-gray-900">customized support</span> designed around your business, your workflows, and where you need the most structure and clarity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
