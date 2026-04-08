"use client"

import { ArrowRight, Shield, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_8z1xp08z1xp08z1x.png-oroALOPMX8RHFSdAgChdZsBoT1OseN.jpeg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent z-[1]" />

      <div className="relative w-full px-6 sm:px-10 lg:px-16 py-16 z-10">
        <div className="w-full text-center sm:text-left max-w-full sm:max-w-[70vw] mx-auto sm:mx-0">
          <h1 className="text-secondary leading-tight mb-5">
            <span className="block text-base sm:text-xl lg:text-2xl xl:text-3xl font-normal italic tracking-tight sm:tracking-normal mx-auto sm:mx-0 max-w-[80%] sm:max-w-none">
              Menos tributo, mais resultado.
            </span>
            <span className="text-primary block text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
              <span className="block">Assessoria tributária que</span>
              <span className="block">cresce com o seu negócio.</span>
            </span>
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mb-8 leading-relaxed mx-auto sm:mx-0">
            Somos um escritório completo de assessoria tributária. Transformamos impostos pagos
            indevidamente em caixa para sua empresa com segurança jurídica e tecnologia de ponta.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 mb-10 w-full max-w-xs sm:max-w-none mx-auto sm:mx-0">
            <Link href="#contato" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 py-4 text-xs sm:text-sm group w-full"
              >
                Solicite seu Diagnóstico Gratuito
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </Button>
            </Link>
            <Link href="#servicos" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-secondary/20 text-secondary hover:bg-secondary/5 font-semibold px-4 py-4 text-xs sm:text-sm w-full"
              >
                Conheça Nossos Serviços
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-secondary text-xs">Segurança Jurídica</p>
                <p className="text-[10px] text-muted-foreground">100% Compliance</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-secondary text-xs">+ R$ 500 Milhões</p>
                <p className="text-[10px] text-muted-foreground">Recuperados</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-secondary text-xs">Tecnologia</p>
                <p className="text-[10px] text-muted-foreground">Auditoria Digital</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
