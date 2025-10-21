import { Plus, Music, Clock, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Playlists = () => {
  const navigate = useNavigate();

  const playlists = [
    {
      id: 1,
      name: "Playlist da Party",
      description: "Playlist colaborativa da festa",
      songs: 15,
      duration: "1h 30min",
      collaborators: 8,
      isActive: true,
    },
    {
      id: 2,
      name: "Chill Vibes",
      description: "Músicas para relaxar",
      songs: 24,
      duration: "2h 15min",
      collaborators: 3,
      isActive: false,
    },
    {
      id: 3,
      name: "Workout Mix",
      description: "Energia para treinar",
      songs: 32,
      duration: "2h 45min",
      collaborators: 5,
      isActive: false,
    },
  ];

  return (
    <div className="container max-w-6xl mx-auto px-6 py-12">
      {/* Background blur effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Minhas Playlists
          </h1>
          <Button className="bg-gradient-primary">
            <Plus className="mr-2 h-4 w-4" />
            Nova Playlist
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {playlists.map((playlist) => (
            <Card
              key={playlist.id}
              className="bg-card/40 backdrop-blur-sm border-border/50 hover:bg-card/60 transition-all cursor-pointer group"
              onClick={() => navigate('/')}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2">
                      {playlist.name}
                      {playlist.isActive && (
                        <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                      )}
                    </CardTitle>
                    <CardDescription>{playlist.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Music className="h-4 w-4" />
                    <span>{playlist.songs} músicas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{playlist.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{playlist.collaborators} colaboradores</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlists;
