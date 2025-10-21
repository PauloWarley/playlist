import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import albumCover from "@/assets/album-cover.jpg";

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(15); // 0:45 of 3:30 = ~21%

  return (
    <div className="relative">
      {/* Now Playing Section */}
      <div className="text-center mb-8">
        <p className="text-muted-foreground text-sm mb-4">Tocando agora</p>
        
        {/* Album Art */}
        <div className="relative inline-block mb-6">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-glow mx-auto">
            <img 
              src={albumCover} 
              alt="Album Cover" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Song Info */}
        <h2 className="text-5xl font-bold mb-2">Ordinary</h2>
        <p className="text-muted-foreground text-lg">Alex Warren - Official</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="relative h-2 bg-progress-bar rounded-full overflow-hidden">
          <div 
            className="absolute h-full bg-progress-filled rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-sm text-muted-foreground mt-2">
          <span>0:45</span>
          <span>3:30</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full hover:bg-primary/20"
        >
          <SkipBack className="h-6 w-6" />
        </Button>
        
        <Button
          variant="default"
          size="icon"
          className="h-16 w-16 rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-elevated"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <Pause className="h-8 w-8" fill="currentColor" />
          ) : (
            <Play className="h-8 w-8" fill="currentColor" />
          )}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full hover:bg-primary/20"
        >
          <SkipForward className="h-6 w-6" />
        </Button>
      </div>

      {/* Add to Playlist Button */}
      <Button
        variant="default"
        size="icon"
        className="absolute top-0 right-0 h-10 w-10 rounded-full bg-accent hover:bg-accent/90 shadow-lg"
      >
        <Plus className="h-5 w-5" />
      </Button>
    </div>
  );
};
