"use client"

import { useState, useEffect } from "react"
import { Calculator, Building2, Clock, DollarSign, TrendingUp, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const segments = [
  { value: "comercio", label: "Comércio", rate: 0.045 },
  { value: "industria", label: "Indústria", rate: 0.052 },
  { value: "servicos", label: "Serviços", rate: 0.038 },
]

export function TaxCalculator() {
  const [segment, setSegment] = useState("")
  const [monthlyTax, setMonthlyTax] = useState([50000])
  const [operationYears, setOperationYears] = useState([3])
  const [estimatedRecovery, setEstimatedRecovery] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (segment && monthlyTax[0] > 0 && operationYears[0] > 0) {
      const selectedSegment = segments.find((s) => s.value === segment)
      if (selectedSegment) {
        // Cálculo baseado na exclusão do ICMS da base do PIS/COFINS
        // Taxa de recuperação varia por segmento
        const baseRecovery = monthlyTax[0] * selectedSegment.rate * 12 * Math.min(operationYears[0], 5)
        // Correção monetária aproximada (SELIC)
        const correction = baseRecovery * 0.15
        const total = baseRecovery + correction
        
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 300)
        setEstimatedRecovery(total)
      }
    } else {
      setEstimatedRecovery(0)
    }
  }, [segment, monthlyTax, operationYears])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <section id="calculadora" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_4d7yc34d7yc34d7y-mEJPdxLlZcDspehRpHVuETGYTy4dD9.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
            <Calculator className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-primary">CALCULADORA TRIBUTÁRIA</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-secondary mb-4 text-balance">
            Descubra Quanto Sua Empresa Pode Recuperar
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Simule o potencial de recuperação de créditos tributários baseado nas principais 
            teses jurídicas, como a exclusão do ICMS da base do PIS/COFINS.
          </p>
        </div>

        {/* Calculator Card - Glassmorphism */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-card/70 backdrop-blur-xl border border-border/50 shadow-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-10">
                {/* Input Side */}
                <div className="space-y-8">
                  {/* Segment Selection */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm font-mono text-muted-foreground uppercase tracking-wider">
                      <Building2 className="h-4 w-4" />
                      Segmento da Empresa
                    </label>
                    <Select value={segment} onValueChange={setSegment}>
                      <SelectTrigger className="w-full h-14 text-lg border-border/50 bg-background/50 backdrop-blur-sm">
                        <SelectValue placeholder="Selecione o segmento" />
                      </SelectTrigger>
                      <SelectContent>
                        {segments.map((seg) => (
                          <SelectItem key={seg.value} value={seg.value} className="text-lg">
                            {seg.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Monthly Tax Input */}
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 text-sm font-mono text-muted-foreground uppercase tracking-wider">
                      <DollarSign className="h-4 w-4" />
                      Impostos Pagos Mensalmente
                    </label>
                    <div className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50">
                      <div className="text-3xl font-bold text-secondary mb-4">
                        {formatCurrency(monthlyTax[0])}
                      </div>
                      <Slider
                        value={monthlyTax}
                        onValueChange={setMonthlyTax}
                        min={10000}
                        max={500000}
                        step={5000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-2 font-mono">
                        <span>R$ 10 mil</span>
                        <span>R$ 500 mil</span>
                      </div>
                    </div>
                  </div>

                  {/* Operation Years */}
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 text-sm font-mono text-muted-foreground uppercase tracking-wider">
                      <Clock className="h-4 w-4" />
                      Tempo de Operação (anos)
                    </label>
                    <div className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50">
                      <div className="text-3xl font-bold text-secondary mb-4">
                        {operationYears[0]} {operationYears[0] === 1 ? "ano" : "anos"}
                      </div>
                      <Slider
                        value={operationYears}
                        onValueChange={setOperationYears}
                        min={1}
                        max={5}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-2 font-mono">
                        <span>1 ano</span>
                        <span>5 anos</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Result Side */}
                <div className="flex flex-col justify-center">
                  <div className="p-8 rounded-3xl bg-secondary text-secondary-foreground relative overflow-hidden">
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                      }} />
                    </div>
                    
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <span className="text-sm font-mono text-secondary-foreground/70 uppercase tracking-wider">
                          Estimativa de Recuperação
                        </span>
                      </div>
                      
                      <div className={`transition-all duration-300 ${isAnimating ? "scale-105 opacity-50" : "scale-100 opacity-100"}`}>
                        <p className="text-5xl lg:text-6xl font-bold text-primary mb-2">
                          {formatCurrency(estimatedRecovery)}
                        </p>
                      </div>
                      
                      <p className="text-secondary-foreground/70 text-sm mb-6">
                        Valor potencial de recuperação incluindo correção monetária
                      </p>

                      <div className="flex items-start gap-2 p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                        <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-secondary-foreground/70">
                          Este cálculo é uma estimativa baseada nas principais teses tributárias vigentes. 
                          O valor real pode variar após análise detalhada da documentação fiscal.
                        </p>
                      </div>

                      <Link href="#contato" className="w-full block">
                        <Button 
                          size="lg" 
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
                          disabled={!segment || monthlyTax[0] === 0}
                        >
                          Solicitar Análise Detalhada
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
