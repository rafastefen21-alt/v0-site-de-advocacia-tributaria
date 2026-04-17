"use client"

import { useState } from "react"
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const regimes = [
  { value: "simples", label: "Simples Nacional" },
  { value: "presumido", label: "Lucro Presumido" },
  { value: "real", label: "Lucro Real" },
  { value: "misto", label: "Regime Misto" },
]

const faturamentos = [
  { value: "ate-300k", label: "Até R$ 300 mil" },
  { value: "300k-1.5m", label: "De R$ 300 mil a R$ 1,5 milhão" },
  { value: "1.5m-5m", label: "De R$ 1,5 milhão a R$ 5 milhões" },
  { value: "acima-5m", label: "Acima de R$ 5 milhões" },
]

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
              <span className="text-sm font-mono text-primary">FALE CONOSCO</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-secondary mb-6 text-balance leading-tight">
              Solicite seu Diagnóstico Tributário Gratuito
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed text-pretty">
              Preencha o formulário e nossa equipe entrará em contato para realizar 
              uma análise completa das oportunidades de recuperação de créditos da sua empresa.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Telefone</h3>
                  <p className="text-muted-foreground">(48) 98813-1245 — SC</p>
                  <p className="text-muted-foreground">(11) 91989-2000 — SP</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">E-mail</h3>
                  <p className="text-muted-foreground">contato@skpassessoria.com.br</p>
                </div>
              </div>
              
               <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Horário de Atendimento</h3>
                  <p className="text-muted-foreground">Segunda a Sexta: 9h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <div className="bg-background rounded-3xl border border-border p-8 shadow-xl relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              
              <form onSubmit={handleSubmit} className="relative space-y-6">
                <h3 className="text-xl font-bold text-secondary mb-6">
                  Garanta sua Análise Tributária
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">
                      Nome Completo
                    </label>
                    <Input 
                      placeholder="Seu nome" 
                      className="h-12 bg-card border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">
                      Empresa
                    </label>
                    <Input 
                      placeholder="Nome da empresa" 
                      className="h-12 bg-card border-border"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">
                      E-mail
                    </label>
                    <Input 
                      type="email" 
                      placeholder="seu@email.com" 
                      className="h-12 bg-card border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">
                      Telefone/WhatsApp
                    </label>
                    <Input 
                      placeholder="(00) 00000-0000" 
                      className="h-12 bg-card border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">
                    Regime Tributário
                  </label>
                  <Select>
                    <SelectTrigger className="w-full h-12 bg-card border-border">
                      <SelectValue placeholder="Selecione o regime" />
                    </SelectTrigger>
                    <SelectContent>
                      {regimes.map((regime) => (
                        <SelectItem key={regime.value} value={regime.value}>
                          {regime.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">
                    Faturamento Anual
                  </label>
                  <Select>
                    <SelectTrigger className="w-full h-12 bg-card border-border">
                      <SelectValue placeholder="Selecione a faixa" />
                    </SelectTrigger>
                    <SelectContent>
                      {faturamentos.map((fat) => (
                        <SelectItem key={fat.value} value={fat.value}>
                          {fat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">
                    Mensagem (opcional)
                  </label>
                  <Textarea 
                    placeholder="Conte-nos mais sobre sua empresa e seus desafios tributários..."
                    className="min-h-[120px] bg-card border-border resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      Enviado com Sucesso!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Solicitar Diagnóstico Gratuito
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, você concorda com nossa política de privacidade. 
                  Seus dados estão seguros conosco.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
