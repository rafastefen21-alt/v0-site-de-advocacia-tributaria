"use client"

import { useState } from "react"
import { 
  TrendingDown, 
  FileWarning, 
  RefreshCcw, 
  ShieldAlert, 
  HelpCircle,
  Scale,
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"

const problems = [
  {
    id: "carga-alta",
    icon: TrendingDown,
    problem: "Carga tributária alta",
    angle: 0,
    solution: {
      title: "Planejamento Tributário",
      description: "Desenvolvemos estratégias personalizadas para reduzir legalmente a carga tributária da sua empresa, analisando o regime tributário mais adequado e identificando benefícios fiscais aplicáveis.",
      benefits: [
        "Redução de até 30% na carga tributária",
        "Escolha do regime tributário ideal",
        "Aproveitamento de incentivos fiscais",
      ],
    },
  },
  {
    id: "impostos-pagos",
    icon: RefreshCcw,
    problem: "Impostos pagos a mais",
    angle: 60,
    solution: {
      title: "Recuperação de Créditos Tributários",
      description: "Identificamos e recuperamos valores pagos indevidamente nos últimos 5 anos, incluindo teses como exclusão do ICMS da base do PIS/COFINS, com segurança jurídica total.",
      benefits: [
        "Análise dos últimos 5 anos",
        "Recuperação administrativa ou judicial",
        "Sem custo inicial - success fee",
      ],
    },
  },
  {
    id: "riscos-fiscais",
    icon: ShieldAlert,
    problem: "Riscos de autuação",
    angle: 120,
    solution: {
      title: "Compliance Tributário",
      description: "Implementamos processos e controles para garantir conformidade fiscal total, prevenindo autuações e multas, com monitoramento contínuo das obrigações tributárias.",
      benefits: [
        "Prevenção de autuações fiscais",
        "Monitoramento em tempo real",
        "Relatórios de conformidade",
      ],
    },
  },
  {
    id: "erros-apuracao",
    icon: FileWarning,
    problem: "Erros na apuração",
    angle: 180,
    solution: {
      title: "Revisão Fiscal",
      description: "Realizamos auditoria completa dos procedimentos de apuração de tributos, identificando erros e inconsistências que podem resultar em pagamentos indevidos ou riscos fiscais.",
      benefits: [
        "Auditoria completa de impostos",
        "Correção de inconsistências",
        "Otimização de processos fiscais",
      ],
    },
  },
  {
    id: "duvidas-legislacao",
    icon: HelpCircle,
    problem: "Dúvidas sobre legislação",
    angle: 240,
    solution: {
      title: "Consultoria Tributária",
      description: "Nossa equipe de especialistas oferece suporte contínuo para esclarecer dúvidas, interpretar a legislação e orientar decisões estratégicas relacionadas a tributos.",
      benefits: [
        "Acesso a especialistas tributários",
        "Pareceres e consultas",
        "Atualização sobre mudanças legais",
      ],
    },
  },
  {
    id: "processos-judiciais",
    icon: Scale,
    problem: "Disputas com o Fisco",
    angle: 300,
    solution: {
      title: "Contencioso Tributário",
      description: "Defendemos sua empresa em processos administrativos e judiciais, com estratégia focada em resultados e ampla experiência em litígios tributários.",
      benefits: [
        "Defesa em auto de infração",
        "Recursos administrativos",
        "Ações judiciais tributárias",
      ],
    },
  },
]

export function ServiceCompass() {
  const [selectedProblem, setSelectedProblem] = useState<string | null>("carga-alta")
  const activeSolution = problems.find((p) => p.id === selectedProblem)?.solution
  const activeItem = problems.find((p) => p.id === selectedProblem)

  const getPosition = (angle: number, radius: number) => {
    const radian = (angle - 90) * (Math.PI / 180)
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius,
    }
  }

  return (
    <section id="servicos" className="py-16 relative overflow-hidden bg-background">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-secondary mb-3 text-balance">
            Qual seu desafio?
          </h2>
          <p className="text-base text-muted-foreground text-pretty">
            Selecione o problema que sua empresa enfrenta e descubra a solução ideal.
          </p>
        </div>

        {/* Desktop Layout - Compass Left, Solution Right */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Compass */}
          <div className="flex justify-center">
            <div className="relative w-[450px] h-[450px]">
              {/* Outer Circle */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/10" />
              
              {/* Middle Circle */}
              <div className="absolute inset-8 rounded-full border border-secondary/10" />
              
              {/* Inner Circle */}
              <div className="absolute inset-16 rounded-full border border-secondary/5" />

              {/* Cardinal Points */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-mono text-secondary/30">N</div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-mono text-secondary/30">S</div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-mono text-secondary/30">E</div>
              <div className="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-mono text-secondary/30">O</div>

              {/* Compass Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-20 h-20 rounded-full bg-card border-4 border-secondary/20 shadow-xl flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center relative overflow-hidden">
                    <div 
                      className="absolute w-1 h-10 transition-transform duration-500 ease-out"
                      style={{
                        transform: selectedProblem 
                          ? `rotate(${problems.find(p => p.id === selectedProblem)?.angle || 0}deg)` 
                          : 'rotate(0deg)',
                      }}
                    >
                      <div className="w-full h-1/2 bg-primary rounded-t-full" />
                      <div className="w-full h-1/2 bg-white/50 rounded-b-full" />
                    </div>
                    <div className="absolute w-3 h-3 rounded-full bg-primary border-2 border-white shadow-lg z-10" />
                  </div>
                </div>
              </div>

              {/* Problem Buttons around the compass */}
              {problems.map((item) => {
                const Icon = item.icon
                const isSelected = selectedProblem === item.id
                const position = getPosition(item.angle, 175)

                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedProblem(item.id)}
                    className="absolute transition-all duration-300 group"
                    style={{
                      left: `calc(50% + ${position.x}px)`,
                      top: `calc(50% + ${position.y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div
                      className={`
                        relative px-4 py-3 rounded-lg border transition-all duration-300 min-w-[130px]
                        ${isSelected 
                          ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105" 
                          : "bg-card border-border hover:border-primary/50 hover:shadow-md"
                        }
                      `}
                    >
                      <div className="flex items-center gap-2">
                        <div 
                          className={`
                            w-7 h-7 rounded flex items-center justify-center transition-colors flex-shrink-0
                            ${isSelected ? "bg-white/20" : "bg-primary/10"}
                          `}
                        >
                          <Icon className={`h-4 w-4 ${isSelected ? "text-white" : "text-primary"}`} />
                        </div>
                        <span 
                          className={`text-xs font-semibold text-left leading-tight ${isSelected ? "text-white" : "text-secondary"}`}
                        >
                          {item.problem}
                        </span>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Side - Solution */}
          <div className="flex items-center">
            {activeSolution && activeItem && (
              <div className="w-full p-6 rounded-2xl bg-card border border-border shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <activeItem.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-primary uppercase tracking-wider">
                      Solucao Recomendada
                    </span>
                    <h3 className="text-lg font-bold text-secondary">
                      {activeSolution.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {activeSolution.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {activeSolution.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2 p-2 rounded-lg bg-primary/5">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-secondary font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Solicitar Consultoria
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Mobile Compass Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-card border-2 border-secondary/20 shadow-lg flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center relative">
                <div 
                  className="absolute w-0.5 h-8 transition-transform duration-500"
                  style={{
                    transform: selectedProblem 
                      ? `rotate(${problems.find(p => p.id === selectedProblem)?.angle || 0}deg)` 
                      : 'rotate(0deg)',
                  }}
                >
                  <div className="w-full h-1/2 bg-primary rounded-t-full" />
                  <div className="w-full h-1/2 bg-white/50 rounded-b-full" />
                </div>
                <div className="absolute w-2 h-2 rounded-full bg-primary border border-white z-10" />
              </div>
            </div>
          </div>

          {/* Mobile Grid */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {problems.map((item) => {
              const Icon = item.icon
              const isSelected = selectedProblem === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedProblem(item.id)}
                  className={`
                    p-4 rounded-xl border text-left transition-all duration-300
                    ${isSelected 
                      ? "bg-primary text-primary-foreground border-primary shadow-lg" 
                      : "bg-card border-border"
                    }
                  `}
                >
                  <Icon className={`h-5 w-5 mb-2 ${isSelected ? "text-white" : "text-primary"}`} />
                  <span className={`text-sm font-medium ${isSelected ? "text-white" : "text-secondary"}`}>
                    {item.problem}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Mobile Solution */}
          {activeSolution && activeItem && (
            <div className="p-6 rounded-2xl bg-card border border-border shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <activeItem.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">
                    Solucao Recomendada
                  </span>
                  <h3 className="text-xl font-bold text-secondary">
                    {activeSolution.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {activeSolution.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {activeSolution.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2 p-2 rounded-lg bg-primary/5">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-secondary">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Solicitar Consultoria
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
