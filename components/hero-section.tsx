"use client"

import { ArrowRight, Shield, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

// Floating circles configuration
const leftCircles = [
  { size: 12, delay: 0, duration: 25, startY: 15 },
  { size: 10, delay: 4, duration: 30, startY: 35 },
  { size: 14, delay: 8, duration: 28, startY: 55 },
  { size: 8, delay: 12, duration: 32, startY: 75 },
  { size: 11, delay: 16, duration: 27, startY: 90 },
]

const rightCircles = [
  { size: 11, delay: 2, duration: 28, startY: 10 },
  { size: 13, delay: 6, duration: 26, startY: 30 },
  { size: 9, delay: 10, duration: 31, startY: 50 },
  { size: 12, delay: 14, duration: 29, startY: 70 },
  { size: 8, delay: 18, duration: 33, startY: 85 },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating Blue Circles - Left Side */}
      {leftCircles.map((circle, index) => (
        <div
          key={`left-${index}`}
          className="absolute rounded-full bg-secondary z-10"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            left: '-30px',
            top: `${circle.startY}%`,
            animation: `floatFromLeft ${circle.duration}s ease-in-out ${circle.delay}s infinite`,
          }}
        />
      ))}

      {/* Floating Blue Circles - Right Side */}
      {rightCircles.map((circle, index) => (
        <div
          key={`right-${index}`}
          className="absolute rounded-full bg-secondary z-10"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            right: '-30px',
            top: `${circle.startY}%`,
            animation: `floatFromRight ${circle.duration}s ease-in-out ${circle.delay}s infinite`,
          }}
        />
      ))}

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2744' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        {/* Gradient Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/5 border border-secondary/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-secondary/70">ASSESSORIA TRIBUTÁRIA</span>
          </div>

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
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-secondary">Segurança Jurídica</p>
                <p className="text-sm text-muted-foreground">100% Compliance</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-secondary">+ R$ 500 Milhões</p>
                <p className="text-sm text-muted-foreground">Recuperados</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card border border-border">
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-secondary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  )
}
