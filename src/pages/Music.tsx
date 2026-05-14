
import { motion } from 'framer-motion';
import { TrackList } from '../components/TrackList';
import { tracks } from '../data/tracks';
import { Play } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';

export const Music = () => {
  const { playTrack } = useAudio();
  
  const albums = [
    {
      title: 'Padayon Lang',
      year: '2026',
      cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=500',
      tracks: tracks.filter(t => t.album === 'Padayon Lang')
    },
    {
      title: 'Singles',
      year: '2023',
      cover: 'https://images.unsplash.com/photo-1518818419601-129561133e06?auto=format&fit=crop&q=80&w=500',
      tracks: tracks.filter(t => t.album === 'Singles')
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Discography</h1>
          <p className="text-xl text-gray-400">Explore the full catalog of Echo Waves.</p>
        </motion.div>

        <div className="space-y-24">
          {albums.map((album, index) => (
            <motion.div 
              key={album.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col xl:flex-row gap-12"
            >
              {/* Album Art & Info */}
              <div className="w-full xl:w-1/3 flex flex-col sm:flex-row xl:flex-col gap-8">
                <div className="relative group w-full max-w-sm mx-auto sm:mx-0">
                  <img 
                    src={album.cover} 
                    alt={album.title} 
                    className="w-full aspect-square object-cover rounded-xl shadow-2xl"
                  />
                  <button 
                    onClick={() => playTrack(album.tracks[0])}
                    className="absolute bottom-4 right-4 w-14 h-14 bg-brand text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-lg"
                  >
                    <Play size={24} className="fill-current ml-1" />
                  </button>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-display font-bold mb-2">{album.title}</h2>
                  <p className="text-brand-accent font-medium tracking-widest uppercase mb-4">{album.year}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {album.title === 'Synthetic Dreams' 
                      ? "The debut full-length album exploring themes of digital consciousness and neon-lit futures. Featuring 10 tracks of immersive electronic soundscapes."
                      : "A collection of standalone singles and B-sides released throughout the year, showcasing a more experimental side of the Echo Waves sound."}
                  </p>
                </div>
              </div>

              {/* Tracklist */}
              <div className="w-full xl:w-2/3 glass-panel rounded-2xl p-4 md:p-6">
                <TrackList tracks={album.tracks} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
