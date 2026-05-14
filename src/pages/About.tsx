
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-5/12 sticky top-32"
          >
            <img 
              src="https://images.unsplash.com/photo-1516280440502-a2f727f498c4?auto=format&fit=crop&q=80&w=1000"
              alt="EchoLab Studio Portrait"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="mt-8 glass-panel p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-4">Booking & Press</h3>
              <div className="space-y-4">
                <a href="mailto:xlegra001@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-brand transition-colors">
                  <Mail size={20} className="text-brand-accent" />
                  xlegra001@gmail.com
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={20} className="text-brand-accent" />
                  Tagum City, Philippines, 8100
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-7/12"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">The Story Behind<br/><span className="text-gradient">The Sound</span></h1>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                ArgelYee EchoLab is the electronic music project of producer and sound designer Argel Yee. 
                Fusing elements of synthwave, ambient, and modern techno, the project aims to create 
                cinematic auditory experiences that transport listeners to neon-drenched futures.
              </p>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                Emerging from the underground electronic scene in late 2025, ArgelYee EchoLab quickly gained 
                traction with a series of self-released singles that caught the attention of influential 
                curators. The signature sound—characterized by driving analog basslines, ethereal pads, 
                and meticulous drum programming—draws inspiration from 80s sci-fi soundtracks and contemporary 
                club culture alike.
              </p>

              <p className="text-gray-400 leading-relaxed mb-12">
                The debut album, <em>Padayon Lang</em>, represents a culmination of two years of studio 
                experimentation. It's a conceptual journey exploring the intersection of human emotion and 
                artificial intelligence, told entirely through instrumental compositions.
              </p>

              <h2 className="text-3xl font-display font-bold mb-6 text-white">Live Experience</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Beyond the studio, ArgelYee EchoLab transforms into an immersive live A/V show. Utilizing custom 
                generative visuals synced to hardware synthesizers and drum machines, the live performance 
                is a continuous, evolving mix that ensures no two shows are exactly alike.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&q=80&w=600"
                  alt="Live Performance"
                  className="rounded-xl w-full h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&q=80&w=600"
                  alt="Studio Gear"
                  className="rounded-xl w-full h-48 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
