import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-serif font-bold text-lg text-gray-900">
            ANNMARIE PINKNEY <span className="text-xs font-sans font-normal text-gray-500 ml-1">PMP</span>
          </h4>
          <p className="text-sm text-gray-500 mt-1">Business Operations & Client Experience Consultant</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
        
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Annmarie Pinkney. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
