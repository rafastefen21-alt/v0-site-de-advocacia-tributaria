"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Shield, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.load()
    video.play().catch(() => {})
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%281%29-tYJbRYm5MnB52KRmW5PmWPW4Ct9UzW.mp4"
      />

      <div className="relative w-full px-6 sm:px-10 lg:px-16 py-16 z-10">
        <div className="w-full text-center sm:text-left max-w-full sm:max-w-[70vw]">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary leading-tight mb-5">
            <span className="block">
              <span className="sm:hidden">Menos tributo,<br />mais resultado.</span>
              <span className="hidden sm:inline">Menos tributo, mais resultado.</span>
            </span>
            <span className="text-primary block">
              <span className="block">Assessoria tributária que</span>
              <span className="block">cresce com o seu negócio.</span>
            </span>
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mb-8 leading-relaxed mx-auto sm:mx-0">
            Somos um escritório completo de assessoria tributária. Transformamos impostos pagos
            indevidamente em caixa para sua empresa com segurança jurídica e tecnologia de ponta.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-10">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 py-4 text-xs sm:text-sm group w-full sm:w-auto"
            >
              Solicite seu Diagnóstico Gratuito
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary/20 text-secondary hover:bg-secondary/5 font-semibold px-4 py-4 text-xs sm:text-sm w-full sm:w-auto"
            >
              Conheça Nossos Serviços
            </Button>
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
