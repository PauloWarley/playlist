import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const AddSongInput = () => {
  return (
    <div className="relative mb-12">
      <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-1 border-2 border-primary/30 shadow-elevated">
        <div className="flex items-center gap-2">
          <Input
            placeholder="cole o link da música"
            className="flex-1 bg-background/50 border-0 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 h-12 px-4"
          />
          <Button
            size="icon"
            className="h-10 w-10 rounded-xl bg-accent hover:bg-accent/90 shrink-0 mr-1"
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
