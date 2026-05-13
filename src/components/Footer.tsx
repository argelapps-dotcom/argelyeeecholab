
import { Youtube, Facebook, Instagram, Twitter, Music } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/10 pt-16 pb-32 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Music className="text-brand" size={28} />
            <span className="font-display font-bold text-2xl tracking-wider uppercase">
              ArgelYee Echolab
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-brand hover:bg-brand/20 transition-all">
              <Youtube size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-brand hover:bg-brand/20 transition-all">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-brand hover:bg-brand/20 transition-all">
              <Instagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-brand hover:bg-brand/20 transition-all">
              <Twitter size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ArgelYee Echolab Music. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
