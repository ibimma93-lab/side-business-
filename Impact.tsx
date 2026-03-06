import { Clock, CircleCheckBig, Star, Sun, ChartNoAxesColumnIncreasing, Briefcase, TrendingUp, RefreshCw, Sparkles, List } from 'lucide-react';
import { motion } from 'motion/react';

const impacts = [
  {
    challenge: "Repeatedly communicating the same information, instructions or updates",
    challengeIcon: Briefcase,
    resultIcon: Clock,
    result: "40–60% less time writing with ready-to-send templates and message frameworks that speed up responses and keep communication consistent"
  },
  {
    challenge: "Operating with critical processes & decisions centralized with the owner",
    challengeIcon: TrendingUp,
    resultIcon: CircleCheckBig,
    result: "Documented workflows and client-ready materials keep work moving without constant oversight, creating capacity for more clients and revenue"
  },
  {
    challenge: "Experiencing growth but feeling operationally stretched or reactive",
    challengeIcon: RefreshCw,
    resultIcon: Star,
    result: "3–5+ hours back each week and fewer missed steps across active files, deals, or projects through clear checklists and stage-by-stage workflows"
  },
  {
    challenge: "Seeking a more polished, structured & established presence",
    challengeIcon: Sparkles,
    resultIcon: Sun,
    result: "Branded onboarding guides and process documents create a more professional experience that strengthens trust, referrals, and repeat business"
  },
  {
    challenge: "Managing client relationships requiring frequent follow-ups & reminders",
    challengeIcon: List,
    resultIcon: ChartNoAxesColumnIncreasing,
    result: "Defined next steps and proactive update points keep projects moving and reduce delays or stalled work"
  }
];

export default function Impact() {
  return (
    <section id="impact" className="py-24 px-4 md:px-12 bg-gray-900 text-white relative overflow-hidden">
      {/* Ambient Background for Dark Section */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-purple-900/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Identify the Signs</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-white mb-6">Is this your business?</h3>
            <p className="text-gray-400 font-light text-lg mb-8">
              If you find yourself constantly repeating instructions, feeling reactive instead of proactive, or being the bottleneck in your own company, it's time for an operational overhaul.
            </p>
            <div className="hidden lg:block h-px w-24 bg-gray-700"></div>
          </motion.div>
          
          <div className="lg:col-span-8">
            <ul className="space-y-4">
              {impacts.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8 px-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="mt-1 shrink-0 text-gray-400 group-hover:text-white transition-colors">
                      <item.challengeIcon size={24} strokeWidth={1.5} />
                    </div>
                    <p className="font-medium text-gray-200">{item.challenge}</p>
                  </div>
                  <div className="flex gap-4 md:border-l md:border-gray-700/50 md:pl-6">
                    <div className="mt-1 shrink-0 text-gray-400 group-hover:text-white transition-colors">
                      <item.resultIcon size={24} strokeWidth={1.5} />
                    </div>
                    <p className="font-light text-gray-400">{item.result}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
