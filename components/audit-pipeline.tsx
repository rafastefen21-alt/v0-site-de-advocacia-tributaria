"use client"

import { useState } from "react"
import { FileText, Search, Scale, BadgeCheck, ArrowRight } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Coleta de XMLs",
    description: "Recebemos os arquivos fiscais da sua empresa (XMLs de NFe, CTe, NFSe) para análise completa dos últimos 5 anos.",
    icon: FileText,
    details: [
      "Upload seguro de documentos",
      "Integração com sistemas contábeis",
      "Processamento automatizado",
    ],
  },
  {
    id: 2,
    title: "Auditoria Digital",
    description: "Nossa tecnologia analisa milhares de documentos identificando inconsistências e oportunidades de crédito.",
    icon: Search,
    details: [
      "Algoritmos de análise tributária",
      "Cruzamento de dados fiscais",
      "Identificação de créditos ocultos",
    ],
  },
  {
    id: 3,
    title: "Validação Jurídica",
    description: "Equipe especializada valida juridicamente cada oportunidade encontrada, garantindo segurança total.",
    icon: Scale,
    details: [
      "Revisão por advogados tributaristas",
      "Análise de jurisprudência",
      "Parecer técnico documentado",
    ],
  },
  {
    id: 4,
    title: "Recuperação",
    description: "Executamos a recuperação via administrativa ou judicial, maximizando o retorno para sua empresa.",
    icon: BadgeCheck,
    details: [
      "Compensação ou restituição",
      "Acompanhamento em tempo real",
      "Relatórios de execução",
    ],
  },
]

export function AuditPipeline() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section id="processo" className="py-12 relative overflow-hidden bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-secondary mb-2 text-balance">
            Nosso Processo de Análise
          </h2>
          <p className="text-base text-muted-foreground text-pretty">
            Um pipeline inteligente que combina tecnologia de ponta com expertise jurídica 
            para maximizar a recuperação de créditos da sua empresa.
          </p>
        </div>

        {/* Timeline Desktop */}
        <div className="hidden lg:block">
          {/* Progress Line */}
          <div className="relative mb-6">
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-border rounded-full" />
            <div 
              className="absolute top-5 left-0 h-0.5 bg-primary rounded-full transition-all duration-500"
              style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
            />
            
            {/* Step Indicators */}
            <div className="relative flex justify-between">
              {steps.map((step) => {
                const Icon = step.icon
                const isActive = step.id === activeStep
                const isCompleted = step.id < activeStep

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className="flex flex-col items-center group focus:outline-none"
                  >
                    <div
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 mb-2
                        ${isActive 
                          ? "bg-primary text-primary-foreground scale-110 shadow-lg shadow-primary/30" 
                          : isCompleted 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-card border-2 border-border text-muted-foreground group-hover:border-primary/50"
                        }
                      `}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <span 
                      className={`
                        text-xs font-medium transition-colors
                        ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-secondary"}
                      `}
                    >
                      {step.title}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active Step Content */}
          <div className="bg-background rounded-2xl border border-border p-6">
            {steps.map((step) => {
              if (step.id !== activeStep) return null
              const Icon = step.icon

              return (
                <div key={step.id} className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-muted-foreground">ETAPA {step.id}</span>
                        <h3 className="text-xl font-bold text-secondary">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-secondary">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="aspect-video rounded-2xl bg-secondary/5 flex items-center justify-center">
                      <Icon className="h-20 w-20 text-secondary/10" />
                    </div>
                    {/* Navigation Arrows */}
                    <div className="absolute bottom-2 right-2 flex gap-2">
                      <button
                        onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                        disabled={activeStep === 1}
                        className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center disabled:opacity-50 hover:bg-muted transition-colors"
                      >
                        <ArrowRight className="h-4 w-4 rotate-180 text-secondary" />
                      </button>
                      <button
                        onClick={() => setActiveStep(Math.min(steps.length, activeStep + 1))}
                        disabled={activeStep === steps.length}
                        className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-50 hover:bg-primary/90 transition-colors"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Timeline Mobile */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isLast = index === steps.length - 1

            return (
              <div key={step.id} className="relative">
                {/* Connector Line */}
                {!isLast && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border" />
                )}
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <span className="text-xs font-mono text-muted-foreground">ETAPA {step.id}</span>
                    <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-secondary/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
