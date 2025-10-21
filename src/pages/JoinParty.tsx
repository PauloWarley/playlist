import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { z } from "zod";

const inviteCodeSchema = z.object({
  code: z
    .string()
    .trim()
    .length(6, { message: "O código deve ter 6 caracteres" })
    .regex(/^[A-Z0-9]+$/, { message: "Código inválido. Use apenas letras e números" }),
});

const nicknameSchema = z.object({
  nickname: z
    .string()
    .trim()
    .min(2, { message: "O nickname deve ter pelo menos 2 caracteres" })
    .max(20, { message: "O nickname deve ter no máximo 20 caracteres" })
    .regex(/^[a-zA-Z0-9_]+$/, { message: "Use apenas letras, números e underscore" }),
});

const JoinParty = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"code" | "nickname">("code");
  const [inviteCode, setInviteCode] = useState("");
  const [nickname, setNickname] = useState("");
  const [errors, setErrors] = useState<{ code?: string; nickname?: string }>({});

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      inviteCodeSchema.parse({ code: inviteCode.toUpperCase() });
      
      // Simular verificação do código
      if (inviteCode.toUpperCase() === "0F5AAA") {
        setStep("nickname");
        toast.success("Código válido! Agora escolha seu nickname");
      } else {
        toast.error("Código de convite inválido");
        setErrors({ code: "Código não encontrado" });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors({ code: error.errors[0].message });
      }
    }
  };

  const handleNicknameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      nicknameSchema.parse({ nickname });
      
      toast.success(`Bem-vindo(a), ${nickname}! 🎉`);
      
      // Redirecionar para a playlist da festa
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors({ nickname: error.errors[0].message });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-secondary relative overflow-hidden flex items-center justify-center p-6">
      {/* Background blur effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        <Card className="bg-card/40 backdrop-blur-xl border-border/50 shadow-elevated">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center">
              <PartyPopper className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-3xl bg-gradient-primary bg-clip-text text-transparent">
              {step === "code" ? "Entrar na Festa" : "Escolha seu Nickname"}
            </CardTitle>
            <CardDescription>
              {step === "code"
                ? "Digite o código do convite para participar"
                : "Como você quer ser chamado(a)?"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            {step === "code" ? (
              <form onSubmit={handleCodeSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="code" className="text-foreground">
                    Código do Convite
                  </Label>
                  <Input
                    id="code"
                    type="text"
                    placeholder="Ex: 0F5AAA"
                    value={inviteCode}
                    onChange={(e) => {
                      const value = e.target.value.toUpperCase();
                      setInviteCode(value.slice(0, 6));
                      setErrors({});
                    }}
                    maxLength={6}
                    className={`text-center text-2xl font-bold tracking-widest ${
                      errors.code ? "border-destructive" : ""
                    }`}
                    autoComplete="off"
                  />
                  {errors.code && (
                    <p className="text-sm text-destructive">{errors.code}</p>
                  )}
                  <p className="text-xs text-muted-foreground text-center">
                    6 caracteres (letras e números)
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary text-lg h-12"
                  disabled={inviteCode.length !== 6}
                >
                  Continuar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            ) : (
              <form onSubmit={handleNicknameSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nickname" className="text-foreground">
                    Seu Nickname
                  </Label>
                  <Input
                    id="nickname"
                    type="text"
                    placeholder="Ex: DJ_Party"
                    value={nickname}
                    onChange={(e) => {
                      setNickname(e.target.value);
                      setErrors({});
                    }}
                    maxLength={20}
                    className={errors.nickname ? "border-destructive" : ""}
                    autoComplete="off"
                  />
                  {errors.nickname && (
                    <p className="text-sm text-destructive">{errors.nickname}</p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    2-20 caracteres (letras, números e _)
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary text-lg h-12"
                    disabled={nickname.length < 2}
                  >
                    Entrar na Festa
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    className="w-full"
                    onClick={() => {
                      setStep("code");
                      setNickname("");
                      setErrors({});
                    }}
                  >
                    Voltar
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Helper text */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Não tem um convite?{" "}
          <button
            onClick={() => navigate("/parties")}
            className="text-primary hover:underline font-medium"
          >
            Criar sua própria festa
          </button>
        </p>
      </div>
    </div>
  );
};

export default JoinParty;
