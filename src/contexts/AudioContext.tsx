import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';
import { Track } from '../types';
import { tracks } from '../data/tracks';

interface AudioContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  progress: number;
  duration: number;
  volume: number;
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  seek: (time: number) => void;
  setVolume: (vol: number) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.8);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => setProgress(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => nextTrack();

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const playTrack = (track: Track) => {
    if (currentTrack?.id === track.id) {
      togglePlay();
      return;
    }
    setCurrentTrack(track);
    setIsPlaying(true);
    // Playback is handled in a useEffect in the AudioPlayer component to ensure src is loaded
  };

  const togglePlay = () => {
    if (!currentTrack && tracks.length > 0) {
      playTrack(tracks[0]);
      return;
    }
    
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(e => console.error("Playback failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    if (!currentTrack) return;
    const currentIndex = tracks.findIndex(t => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % tracks.length;
    playTrack(tracks[nextIndex]);
  };

  const prevTrack = () => {
    if (!currentTrack) return;
    const currentIndex = tracks.findIndex(t => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    playTrack(tracks[prevIndex]);
  };

  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setProgress(time);
    }
  };

  const setVolume = (vol: number) => {
    setVolumeState(vol);
  };

  return (
    <AudioContext.Provider value={{ 
      currentTrack, isPlaying, progress, duration, volume, 
      playTrack, togglePlay, nextTrack, prevTrack, seek, setVolume, audioRef 
    }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};