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
  Lightbulb,
  Target,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"

const problems = [
  {
    id: "carga-alta",
    icon: TrendingDown,
    problem: "Carga tributária alta",
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
    problem: "Riscos de autuação fiscal",
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
    problem: "Erros na apuração de tributos",
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

  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
            <Target className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-primary">BÚSSOLA DE SERVIÇOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4 text-balance">
            Qual é o Seu Desafio Tributário?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Selecione o problema que sua empresa enfrenta e descubra a solução ideal. 
            Nossa equipe está preparada para resolver qualquer desafio tributário.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems Grid */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium text-secondary">Selecione seu desafio</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {problems.map((item) => {
                const Icon = item.icon
                const isSelected = selectedProblem === item.id

                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedProblem(item.id)}
                    className={`
                      group relative p-6 rounded-2xl border text-left transition-all duration-300
                      ${isSelected 
                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20" 
                        : "bg-card border-border hover:border-primary/50 hover:shadow-md"
                      }
                    `}
                  >
                    <div 
                      className={`
                        w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors
                        ${isSelected 
                          ? "bg-white/20" 
                          : "bg-primary/10 group-hover:bg-primary/20"
                        }
                      `}
                    >
                      <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-primary"}`} />
                    </div>
                    <h3 
                      className={`
                        font-semibold mb-1 transition-colors
                        ${isSelected ? "text-white" : "text-secondary"}
                      `}
                    >
                      {item.problem}
                    </h3>
                    <ArrowRight 
                      className={`
                        absolute top-6 right-6 h-5 w-5 transition-all
                        ${isSelected 
                          ? "text-white opacity-100" 
                          : "text-primary opacity-0 group-hover:opacity-100"
                        }
                      `}
                    />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Solution Display */}
          <div className="relative">
            {activeSolution ? (
              <div className="sticky top-32 p-8 rounded-3xl bg-card border border-border shadow-xl">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-mono text-primary uppercase tracking-wider">
                      Solução Recomendada
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-secondary mb-4">
                    {activeSolution.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {activeSolution.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {activeSolution.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-secondary">{benefit}</span>
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
            ) : (
              <div className="sticky top-32 p-12 rounded-3xl bg-secondary/5 border border-dashed border-secondary/20 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <Target className="h-10 w-10 text-secondary/30" />
                </div>
                <h3 className="text-xl font-semibold text-secondary/70 mb-2">
                  Selecione um Desafio
                </h3>
                <p className="text-muted-foreground max-w-xs">
                  Clique em um dos problemas ao lado para ver a solução personalizada que oferecemos
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
