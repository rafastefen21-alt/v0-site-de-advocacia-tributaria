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
  CheckCircle2,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"

const problems = [
  {
    id: "carga-alta",
    icon: TrendingDown,
    problem: "Carga tributária alta",
    angle: 0, // top
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
    angle: 180, // bottom
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
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null)
  const activeSolution = problems.find((p) => p.id === selectedProblem)?.solution
  const activeItem = problems.find((p) => p.id === selectedProblem)

  // Calculate position based on angle
  const getPosition = (angle: number, radius: number) => {
    const radian = (angle - 90) * (Math.PI / 180) // Start from top (12 o'clock)
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius,
    }
  }

  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4 text-balance">
            Qual seu desafio?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Selecione o problema que sua empresa enfrenta e descubra a solução ideal.
          </p>
        </div>

        {/* Compass Container - Desktop */}
        <div className="hidden lg:flex justify-center items-center min-h-[600px]">
          <div className="relative w-[600px] h-[600px]">
            
            {/* Outer Circle - Decorative */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/10" />
            
            {/* Middle Circle - Decorative */}
            <div className="absolute inset-12 rounded-full border border-secondary/10" />
            
            {/* Inner Circle - Decorative */}
            <div className="absolute inset-24 rounded-full border border-secondary/5" />

            {/* Cardinal Points - N, S, E, W */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-mono text-secondary/30">N</div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-mono text-secondary/30">S</div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-secondary/30">E</div>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-mono text-secondary/30">O</div>

            {/* Compass Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                {/* Outer ring */}
                <div className="w-40 h-40 rounded-full bg-card border-4 border-secondary/20 shadow-2xl flex items-center justify-center">
                  {/* Inner circle with gradient */}
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center relative overflow-hidden">
                    {/* Compass needle */}
                    <div 
                      className="absolute w-1 h-20 transition-transform duration-500 ease-out"
                      style={{
                        transform: selectedProblem 
                          ? `rotate(${problems.find(p => p.id === selectedProblem)?.angle || 0}deg)` 
                          : 'rotate(0deg)',
                      }}
                    >
                      <div className="w-full h-1/2 bg-primary rounded-t-full" />
                      <div className="w-full h-1/2 bg-white/50 rounded-b-full" />
                    </div>
                    {/* Center dot */}
                    <div className="absolute w-4 h-4 rounded-full bg-primary border-2 border-white shadow-lg z-10" />
                  </div>
                </div>
                
                {/* SKP Text */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-xs font-mono text-secondary/50 tracking-wider">SKP ASSESSORIA</span>
                </div>
              </div>
            </div>

            {/* Problem Buttons around the compass */}
            {problems.map((item) => {
              const Icon = item.icon
              const isSelected = selectedProblem === item.id
              const position = getPosition(item.angle, 240)

              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedProblem(isSelected ? null : item.id)}
                  className="absolute transition-all duration-300 group"
                  style={{
                    left: `calc(50% + ${position.x}px)`,
                    top: `calc(50% + ${position.y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {/* Connection line to center */}
                  <div 
                    className={`absolute w-px h-16 bg-gradient-to-b from-transparent transition-opacity duration-300 ${
                      isSelected ? 'to-primary opacity-100' : 'to-secondary/20 opacity-50'
                    }`}
                    style={{
                      transformOrigin: 'center bottom',
                      transform: `rotate(${item.angle + 180}deg)`,
                      bottom: '50%',
                      left: '50%',
                      marginLeft: '-0.5px',
                    }}
                  />
                  
                  {/* Button card */}
                  <div
                    className={`
                      relative px-5 py-4 rounded-2xl border transition-all duration-300 min-w-[160px]
                      ${isSelected 
                        ? "bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/30 scale-110" 
                        : "bg-card border-border hover:border-primary/50 hover:shadow-lg hover:scale-105"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className={`
                          w-10 h-10 rounded-xl flex items-center justify-center transition-colors flex-shrink-0
                          ${isSelected 
                            ? "bg-white/20" 
                            : "bg-primary/10 group-hover:bg-primary/20"
                          }
                        `}
                      >
                        <Icon className={`h-5 w-5 ${isSelected ? "text-white" : "text-primary"}`} />
                      </div>
                      <span 
                        className={`
                          text-sm font-semibold transition-colors text-left
                          ${isSelected ? "text-white" : "text-secondary"}
                        `}
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

        {/* Mobile Layout - Grid */}
        <div className="lg:hidden">
          {/* Mobile Compass Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-card border-2 border-secondary/20 shadow-lg flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center relative">
                <div 
                  className="absolute w-0.5 h-10 transition-transform duration-500"
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
          <div className="grid grid-cols-2 gap-3">
            {problems.map((item) => {
              const Icon = item.icon
              const isSelected = selectedProblem === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedProblem(isSelected ? null : item.id)}
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
        </div>

        {/* Solution Modal/Card */}
        {activeSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:static lg:inset-auto lg:p-0 lg:mt-12">
            {/* Backdrop for mobile */}
            <div 
              className="absolute inset-0 bg-black/50 lg:hidden"
              onClick={() => setSelectedProblem(null)}
            />
            
            <div className="relative w-full max-w-2xl mx-auto p-6 lg:p-8 rounded-3xl bg-card border border-border shadow-2xl">
              {/* Close button */}
              <button
                onClick={() => setSelectedProblem(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary/50 hover:bg-secondary/20 hover:text-secondary transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                {activeItem && (
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <activeItem.icon className="h-6 w-6 text-primary" />
                  </div>
                )}
                <div>
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">
                    Solução Recomendada
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-secondary">
                    {activeSolution.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {activeSolution.description}
              </p>
              
              <div className="grid sm:grid-cols-3 gap-3 mb-6">
                {activeSolution.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 rounded-xl bg-primary/5">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-secondary">{benefit}</span>
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
          </div>
        )}
      </div>
    </section>
  )
}
