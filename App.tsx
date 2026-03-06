import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Impact from './Impact';
import Contact from './Contact';
import Footer from './Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 relative overflow-hidden">
      {/* Ambient Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-200/30 blur-[100px] animate-pulse" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-blue-200/30 blur-[100px] animate-pulse delay-1000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-indigo-200/20 blur-[120px] animate-pulse delay-2000" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Impact />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
