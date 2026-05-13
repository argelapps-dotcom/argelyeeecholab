import React, { useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';


export const AudioPlayer = () => {
  const { 
    currentTrack, isPlaying, progress, duration, volume, 
    togglePlay, nextTrack, prevTrack, seek, setVolume, audioRef 
  } = useAudio();

  // Handle play/pause when track changes
  useEffect(() => {
    if (currentTrack && isPlaying && audioRef.current) {
      audioRef.current.play().catch(e => console.error("Autoplay prevented:", e));
    }
  }, [currentTrack, isPlaying, audioRef]);

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    seek(Number(e.target.value));
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-900/95 backdrop-blur-xl border-t border-white/10 z-50 px-4 py-3 md:py-4">
      <audio 
        ref={audioRef} 
        src={currentTrack.audioUrl} 
        preload="metadata"
      />
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Track Info */}
        <div className="flex items-center gap-4 w-full md:w-1/3">
          <img 
            src={currentTrack.coverUrl} 
            alt={currentTrack.title} 
            className="w-12 h-12 md:w-14 md:h-14 rounded-md object-cover shadow-lg"
          />
          <div className="min-w-0">
            <h4 className="text-white font-medium truncate">{currentTrack.title}</h4>
            <p className="text-gray-400 text-sm truncate">{currentTrack.artist}</p>
          </div>
        </div>

        {/* Controls & Progress */}
        <div className="flex flex-col items-center w-full md:w-1/3 gap-2">
          <div className="flex items-center gap-6">
            <button 
              onClick={prevTrack}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SkipBack size={20} />
            </button>
            <button 
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-white text-dark-900 flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause size={20} className="fill-current" /> : <Play size={20} className="fill-current ml-1" />}
            </button>
            <button 
              onClick={nextTrack}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SkipForward size={20} />
            </button>
          </div>
          
          <div className="flex items-center gap-3 w-full max-w-md">
            <span className="text-xs text-gray-400 w-10 text-right">{formatTime(progress)}</span>
            <input 
              type="range" 
              min="0" 
              max={duration || 100}
              value={progress}
              onChange={handleProgressChange}
              className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand"
            />
            <span className="text-xs text-gray-400 w-10">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Volume */}
        <div className="hidden md:flex items-center justify-end gap-3 w-1/3">
          <button onClick={() => setVolume(volume === 0 ? 0.8 : 0)} className="text-gray-400 hover:text-white">
            {volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand"
          />
        </div>
      </div>
    </div>
  );
};