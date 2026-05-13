export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  coverUrl: string;
  audioUrl: string;
  duration: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: any;
}