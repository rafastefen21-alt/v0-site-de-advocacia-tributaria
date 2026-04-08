"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Diagnóstico Tributário Gratuito",
    description: "Análise completa da situação fiscal da sua empresa sem custos. Identificamos oportunidades de economia e recuperação de créditos.",
    hasAccent: true,
    accentPosition: "right",
  },
  {
    id: 2,
    title: "Consultoria Tributária",
    description: "Orientação especializada para tomada de decisões estratégicas, com suporte contínuo de especialistas em legislação tributária.",
    hasAccent: true,
    accentPosition: "left",
  },
  {
    id: 3,
    title: "Análise Tributária",
    description: "Estudo aprofundado dos tributos pagos pela empresa, identificando inconsistências e oportunidades de otimização.",
    hasAccent: false,
  },
  {
    id: 4,
    title: "Planejamento Tributário",
    description: "Estratégias personalizadas para redução legal da carga tributária, escolhendo o melhor regime e aproveitando incentivos fiscais.",
    hasAccent: true,
    accentPosition: "right",
  },
  {
    id: 5,
    title: "Recuperação de Crédito Tributário",
    description: "Identificação e recuperação de valores pagos indevidamente nos últimos 5 anos, de forma administrativa ou judicial.",
    hasAccent: true,
    accentPosition: "left",
  },
  {
    id: 6,
    title: "Compliance Tributário",
    description: "Implementação de processos e controles para garantir conformidade fiscal, prevenindo autuações e multas.",
    hasAccent: true,
    accentPosition: "right",
  },
  {
    id: 7,
    title: "Revisão Fiscal",
    description: "Auditoria completa dos procedimentos de apuração de tributos, corrigindo erros e otimizando processos.",
    hasAccent: false,
  },
]

export function ServicesSection() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  return (
    <section className="py-16 relative overflow-hidden bg-background">
      {/* Top shadow that projects over the previous section */}
      <div 
        className="absolute top-0 left-0 right-0 h-8 pointer-events-none"
        style={{ 
          boxShadow: '0 -15px 25px -5px rgba(0, 0, 0, 0.08), 0 -8px 15px -6px rgba(0, 0, 0, 0.06)',
          zIndex: 10 
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-secondary mb-3 text-balance">
            Nossos Serviços
          </h2>
          <p className="text-base text-muted-foreground text-pretty">
            Soluções completas em assessoria tributária para sua empresa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {services.slice(0, 4).map((service) => {
            const isExpanded = expandedService === service.id

            return (
              <div
                key={service.id}
                className="relative group"
              >
                {/* Animated Orbiting Accent Lines */}
                <div 
                  className="absolute w-1 h-[35%] bg-gradient-to-b from-primary via-primary to-transparent rounded-full z-10"
                  style={{
                    right: '-4px',
                    top: '15%',
                    animation: 'moveRight 3s ease-in-out infinite',
                    animationDelay: `${service.id * 0.3}s`
                  }}
                />
                <div 
                  className="absolute w-1 h-[35%] bg-gradient-to-t from-primary via-primary to-transparent rounded-full z-10"
                  style={{
                    left: '-4px',
                    top: '50%',
                    animation: 'moveLeft 3s ease-in-out infinite',
                    animationDelay: `${service.id * 0.3}s`
                  }}
                />

                <div
                  className={`
                    relative h-full min-h-[180px] p-6 rounded-2xl bg-secondary text-secondary-foreground 
                    transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between
                    ${isExpanded ? "shadow-2xl scale-[1.02]" : "hover:shadow-lg"}
                  `}
                  onClick={() => setExpandedService(isExpanded ? null : service.id)}
                >
                  {/* Service Title */}
                  <h3 className="text-lg font-bold mb-6 leading-tight text-center">
                    {service.title}
                  </h3>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <p className="text-sm text-secondary-foreground/80 mb-4 animate-in fade-in duration-300 text-center">
                      {service.description}
                    </p>
                  )}

                  {/* CTA Button */}
                  <button 
                    className="flex items-center gap-2 text-sm font-medium text-secondary-foreground/90 hover:text-white transition-colors justify-center"
                    onClick={(e) => {
                      e.stopPropagation()
                      if (!isExpanded) {
                        document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
                      } else {
                        setExpandedService(null)
                      }
                    }}
                  >
                    {isExpanded ? (
                      <X className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                    <span>Quero Saber Mais</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Segunda linha centralizada */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5 max-w-[calc(75%+10px)] mx-auto">
          {services.slice(4).map((service) => {
            const isExpanded = expandedService === service.id

            return (
              <div
                key={service.id}
                className="relative group"
              >
                {/* Animated Orbiting Accent Lines */}
                <div 
                  className="absolute w-1 h-[35%] bg-gradient-to-b from-primary via-primary to-transparent rounded-full z-10"
                  style={{
                    right: '-4px',
                    top: '15%',
                    animation: 'moveRight 3s ease-in-out infinite',
                    animationDelay: `${service.id * 0.3}s`
                  }}
                />
                <div 
                  className="absolute w-1 h-[35%] bg-gradient-to-t from-primary via-primary to-transparent rounded-full z-10"
                  style={{
                    left: '-4px',
                    top: '50%',
                    animation: 'moveLeft 3s ease-in-out infinite',
                    animationDelay: `${service.id * 0.3}s`
                  }}
                />

                <div
                  className={`
                    relative h-full min-h-[180px] p-6 rounded-2xl bg-secondary text-secondary-foreground 
                    transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between
                    ${isExpanded ? "shadow-2xl scale-[1.02]" : "hover:shadow-lg"}
                  `}
                  onClick={() => setExpandedService(isExpanded ? null : service.id)}
                >
                  {/* Service Title */}
                  <h3 className="text-lg font-bold mb-6 leading-tight text-center">
                    {service.title}
                  </h3>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <p className="text-sm text-secondary-foreground/80 mb-4 animate-in fade-in duration-300 text-center">
                      {service.description}
                    </p>
                  )}

                  {/* CTA Button */}
                  <button 
                    className="flex items-center gap-2 text-sm font-medium text-secondary-foreground/90 hover:text-white transition-colors justify-center"
                    onClick={(e) => {
                      e.stopPropagation()
                      if (!isExpanded) {
                        document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
                      } else {
                        setExpandedService(null)
                      }
                    }}
                  >
                    {isExpanded ? (
                      <X className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                    <span>Quero Saber Mais</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
