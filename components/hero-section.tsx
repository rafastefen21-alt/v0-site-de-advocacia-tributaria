"use client"

import { ArrowRight, Shield, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InteractiveParticles } from "@/components/interactive-particles"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Interactive Particle Effect */}
      <InteractiveParticles />

      {/* Background */}
      <div className="absolute inset-0 bg-background -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6 text-balance">
            Inteligência Jurídica e Tecnologia na{" "}
            <span className="text-primary">Recuperação de Créditos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Somos um escritório completo de assessoria tributária. Transformamos impostos pagos 
            indevidamente em caixa para sua empresa com segurança jurídica e tecnologia de ponta.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group"
            >
              Solicite seu Diagnóstico Gratuito
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-secondary/20 text-secondary hover:bg-secondary/5 font-semibold px-8 py-6 text-lg"
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-secondary">Segurança Jurídica</p>
                <p className="text-sm text-muted-foreground">100% Compliance</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-secondary">+ R$ 500 Milhões</p>
                <p className="text-sm text-muted-foreground">Recuperados</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-secondary">Tecnologia</p>
                <p className="text-sm text-muted-foreground">Auditoria Digital</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
