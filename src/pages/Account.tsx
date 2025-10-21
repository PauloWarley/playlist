import { User, Mail, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Account = () => {
  return (
    <div className="container max-w-4xl mx-auto px-6 py-12">
      {/* Background blur effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          Minha Conta
        </h1>

        <div className="space-y-6">
          {/* Profile Section */}
          <Card className="bg-card/40 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Perfil</CardTitle>
              <CardDescription>Gerencie suas informações pessoais</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24 border-4 border-primary/30">
                  <AvatarFallback className="bg-gradient-primary text-white text-2xl font-semibold">
                    U
                  </AvatarFallback>
                </Avatar>
                <Button variant="outline">Alterar Foto</Button>
              </div>

              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nome</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="name" placeholder="Seu nome" className="pl-10" defaultValue="Usuário" />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="seu@email.com" className="pl-10" defaultValue="usuario@email.com" />
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-primary">Salvar Alterações</Button>
            </CardContent>
          </Card>

          {/* Security Section */}
          <Card className="bg-card/40 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Segurança</CardTitle>
              <CardDescription>Altere sua senha</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="current-password">Senha Atual</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="current-password" type="password" className="pl-10" />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="new-password">Nova Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="new-password" type="password" className="pl-10" />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="confirm-password" type="password" className="pl-10" />
                </div>
              </div>

              <Button className="bg-gradient-primary">Alterar Senha</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Account;
