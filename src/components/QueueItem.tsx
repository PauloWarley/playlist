import { ThumbsUp, ThumbsDown, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface QueueItemProps {
  title: string;
  artist: string;
  coverImage: string;
  initialVotes?: number;
}

export const QueueItem = ({ title, artist, coverImage, initialVotes = 0 }: QueueItemProps) => {
  const [votes, setVotes] = useState(initialVotes);
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);

  const handleVote = (type: 'up' | 'down') => {
    if (userVote === type) {
      // Remove vote
      setVotes(votes + (type === 'up' ? -1 : 1));
      setUserVote(null);
    } else {
      // Change or add vote
      if (userVote) {
        setVotes(votes + (type === 'up' ? 2 : -2));
      } else {
        setVotes(votes + (type === 'up' ? 1 : -1));
      }
      setUserVote(type);
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-all group">
      <img 
        src={coverImage} 
        alt={title}
        className="w-16 h-16 rounded-lg object-cover shadow-md"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground truncate">{title}</h3>
        <p className="text-sm text-muted-foreground truncate">{artist}</p>
      </div>
      
      {/* Vote buttons */}
      <div className="flex items-center gap-2 shrink-0">
        <Button
          variant="ghost"
          size="icon"
          className={`h-9 w-9 rounded-full transition-all ${
            userVote === 'up' 
              ? 'bg-accent text-accent-foreground' 
              : 'hover:bg-accent/20'
          }`}
          onClick={() => handleVote('up')}
        >
          <ThumbsUp className="h-4 w-4" />
        </Button>
        
        <span className={`text-sm font-semibold min-w-[2ch] text-center ${
          votes > 0 ? 'text-accent' : votes < 0 ? 'text-destructive' : 'text-muted-foreground'
        }`}>
          {votes > 0 ? '+' : ''}{votes}
        </span>
        
        <Button
          variant="ghost"
          size="icon"
          className={`h-9 w-9 rounded-full transition-all ${
            userVote === 'down' 
              ? 'bg-destructive/20 text-destructive' 
              : 'hover:bg-destructive/10'
          }`}
          onClick={() => handleVote('down')}
        >
          <ThumbsDown className="h-4 w-4" />
        </Button>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-full opacity-60 hover:opacity-100 transition-opacity shrink-0"
      >
        <Info className="h-5 w-5" />
      </Button>
    </div>
  );
};
