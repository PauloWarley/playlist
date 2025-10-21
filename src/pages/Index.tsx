import { MusicPlayer } from "@/components/MusicPlayer";
import { AddSongInput } from "@/components/AddSongInput";
import { QueueItem } from "@/components/QueueItem";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";
import album4 from "@/assets/album-4.jpg";

const Index = () => {
  const queueSongs = [
    {
      title: "Ordinary famesto",
      artist: "Onimo Merde",
      coverImage: album2,
      votes: 12,
    },
    {
      title: "Ordinary duntinall",
      artist: "Onimo Porgo",
      coverImage: album3,
      votes: 8,
    },
    {
      title: "Ordinary da nosxsua",
      artist: "Onimo Meríê",
      coverImage: album4,
      votes: 5,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />

      {/* Main Content */}
      <div className="relative z-10 container max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Playlist da Party
          </h1>
        </header>

        {/* Music Player */}
        <div className="bg-player/30 backdrop-blur-xl rounded-3xl p-8 mb-8 border border-border/30 shadow-elevated">
          <MusicPlayer />
        </div>

        {/* Add Song Input */}
        <AddSongInput />

        {/* Queue */}
        <div className="space-y-3">
          {queueSongs.map((song, index) => (
            <QueueItem
              key={index}
              title={song.title}
              artist={song.artist}
              coverImage={song.coverImage}
              initialVotes={song.votes}
            />
          ))}
        </div>
      </div>

      {/* Decorative star */}
      <div className="absolute bottom-8 right-8 text-primary/40">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor" className="animate-pulse">
          <path d="M30 0L33.09 26.91L60 30L33.09 33.09L30 60L26.91 33.09L0 30L26.91 26.91L30 0Z" />
        </svg>
      </div>
    </div>
  );
};

export default Index;
