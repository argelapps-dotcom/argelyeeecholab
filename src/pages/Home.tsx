
import { Link } from 'react-router-dom';
import { Play, Youtube, Facebook, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAudio } from '../contexts/AudioContext';
import { tracks } from '../data/tracks';

export const Home = () => {
  const { playTrack } = useAudio();
  const latestRelease = tracks[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=2000"
            alt="Echo Waves Live Concert"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-dark-900/80 to-dark-900"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold uppercase tracking-tighter mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Echo
              </span>
              <br />
              <span className="text-gradient">
                Waves
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
              Electronic soundscapes for the modern soul. 
              New album 'Synthetic Dreams' out now.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => playTrack(latestRelease)}
                className="px-8 py-4 bg-brand hover:bg-brand-light text-white rounded-full font-medium tracking-wide flex items-center gap-2 transition-all hover:scale-105 w-full sm:w-auto justify-center"
              >
                <Play size={20} className="fill-current" />
                LISTEN NOW
              </button>
              <Link 
                to="/music"
                className="px-8 py-4 glass-panel hover:bg-white/10 text-white rounded-full font-medium tracking-wide transition-all w-full sm:w-auto text-center"
              >
                DISCOGRAPHY
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Release Section */}
      <section className="py-24 bg-dark-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand to-brand-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src={latestRelease.coverUrl}
                  alt="Synthetic Dreams Album Cover"
                  className="relative rounded-2xl w-full max-w-md mx-auto shadow-2xl"
                />
                <button 
                  onClick={() => playTrack(latestRelease)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-brand/90 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110 hover:bg-brand"
                >
                  <Play size={32} className="fill-current ml-2" />
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-brand-accent font-medium tracking-widest uppercase mb-2">Latest Release</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Synthetic Dreams</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                A journey through neon-lit streets and digital landscapes. 
                This album blends retro-futuristic synths with driving modern beats, 
                creating an immersive auditory experience that bridges the gap between nostalgia and tomorrow.
              </p>
              <Link 
                to="/music"
                className="inline-flex items-center gap-2 text-brand hover:text-brand-light font-medium tracking-wide transition-colors"
              >
                VIEW FULL TRACKLIST <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-24 bg-dark-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/5 blur-[150px] rounded-full"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">Connect with Echo Waves</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-8 rounded-2xl flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform hover:border-red-500/50 group"
            >
              <div className="w-16 h-16 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-colors">
                <Youtube size={32} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">YouTube</h4>
                <p className="text-gray-400 text-sm">Watch music videos & live sets</p>
              </div>
            </a>
            
            <a 
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-8 rounded-2xl flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform hover:border-blue-500/50 group"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Facebook size={32} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Facebook</h4>
                <p className="text-gray-400 text-sm">Join the community & get updates</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};