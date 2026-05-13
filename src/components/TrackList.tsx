import React from 'react';
import { Play, Pause } from 'lucide-react';
import { Track } from '../types';
import { useAudio } from '../contexts/AudioContext';
import { clsx } from 'clsx';

interface TrackListProps {
  tracks: Track[];
}

export const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  const { currentTrack, isPlaying, playTrack, togglePlay } = useAudio();

  return (
    <div className="w-full">
      <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-2 border-b border-white/10 text-sm text-gray-400 uppercase tracking-wider mb-2">
        <div className="col-span-1 text-center">#</div>
        <div className="col-span-6">Title</div>
        <div className="col-span-4">Album</div>
        <div className="col-span-1 text-right">Time</div>
      </div>
      
      <div className="flex flex-col gap-2">
        {tracks.map((track, index) => {
          const isCurrentTrack = currentTrack?.id === track.id;
          
          return (
            <div 
              key={track.id}
              className={clsx(
                'group grid grid-cols-12 gap-4 items-center px-4 py-3 rounded-lg transition-colors hover:bg-white/5',
                isCurrentTrack ? 'bg-white/5' : ''
              )}
            >
              <div className="col-span-2 md:col-span-1 flex justify-center">
                <button 
                  onClick={() => isCurrentTrack ? togglePlay() : playTrack(track)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-brand/20 text-brand opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {isCurrentTrack && isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                </button>
                <span className={clsx(
                  "absolute md:relative flex items-center justify-center w-8 h-8 md:opacity-100 group-hover:opacity-0 transition-opacity",
                  isCurrentTrack ? 'text-brand opacity-0' : 'text-gray-500'
                )}>
                  {isCurrentTrack ? (
                    <div className="flex gap-0.5 items-end h-4">
                      <div className="w-1 bg-brand animate-[bounce_1s_infinite]" style={{ height: '100%' }}></div>
                      <div className="w-1 bg-brand animate-[bounce_1.2s_infinite]" style={{ height: '60%' }}></div>
                      <div className="w-1 bg-brand animate-[bounce_0.8s_infinite]" style={{ height: '80%' }}></div>
                    </div>
                  ) : (
                    index + 1
                  )}
                </span>
              </div>
              
              <div className="col-span-8 md:col-span-6 flex items-center gap-4">
                <img src={track.coverUrl} alt={track.title} className="w-10 h-10 rounded object-cover" />
                <div className="min-w-0">
                  <p className={clsx("font-medium truncate", isCurrentTrack ? "text-brand-accent" : "text-white")}>
                    {track.title}
                  </p>
                  <p className="text-sm text-gray-400 truncate md:hidden">{track.album}</p>
                </div>
              </div>
              
              <div className="hidden md:block col-span-4 text-gray-400 text-sm truncate">
                {track.album}
              </div>
              
              <div className="col-span-2 md:col-span-1 text-right text-gray-400 text-sm">
                {track.duration}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};