import { Plus, Calendar, MapPin, Users, Music, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Parties = () => {
  const navigate = useNavigate();
  const parties = [
    {
      id: 1,
      name: "Festa de Aniversário",
      date: "25 Out 2025",
      location: "Casa do João",
      attendees: 45,
      songs: 120,
      status: "active",
    },
    {
      id: 2,
      name: "Churrasco do Trabalho",
      date: "02 Nov 2025",
      location: "Clube Social",
      attendees: 32,
      songs: 85,
      status: "upcoming",
    },
    {
      id: 3,
      name: "Festa de Formatura",
      date: "15 Set 2025",
      location: "Salão de Festas",
      attendees: 150,
      songs: 200,
      status: "finished",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-accent">Ativa</Badge>;
      case "upcoming":
        return <Badge variant="secondary">Próxima</Badge>;
      case "finished":
        return <Badge variant="outline">Finalizada</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="container max-w-6xl mx-auto px-6 py-12">
      {/* Background blur effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Festas
          </h1>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="border-primary/30 hover:bg-primary/10"
              onClick={() => navigate('/join')}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Entrar com Convite
            </Button>
            <Button className="bg-gradient-primary">
              <Plus className="mr-2 h-4 w-4" />
              Nova Festa
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {parties.map((party) => (
            <Card
              key={party.id}
              className="bg-card/40 backdrop-blur-sm border-border/50 hover:bg-card/60 transition-all cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle>{party.name}</CardTitle>
                      {getStatusBadge(party.status)}
                    </div>
                    <CardDescription className="flex items-center gap-4 flex-wrap">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {party.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {party.location}
                      </span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{party.attendees} participantes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Music className="h-4 w-4" />
                    <span>{party.songs} músicas</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {parties.length === 0 && (
          <Card className="bg-card/40 backdrop-blur-sm border-border/50">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <Music className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nenhuma festa ainda</h3>
              <p className="text-muted-foreground mb-6">
                Crie sua primeira festa e comece a compartilhar músicas!
              </p>
              <Button className="bg-gradient-primary">
                <Plus className="mr-2 h-4 w-4" />
                Criar Primeira Festa
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Parties;
