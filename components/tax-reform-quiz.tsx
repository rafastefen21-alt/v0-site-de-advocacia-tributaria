"use client"

import { useState, useEffect } from "react"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    id: 1,
    text: "Qual é o regime tributário da sua empresa hoje?",
    hint: "Essa é a variável que mais define o impacto da reforma no seu negócio.",
    options: ["Simples Nacional", "Lucro Presumido", "Lucro Real", "Não sei / Quero descobrir"],
    multi: false,
    cols: 2,
  },
  {
    id: 2,
    text: "Em qual setor sua empresa atua?",
    hint: null,
    options: ["Comércio (varejo / atacado)", "Serviços (consultoria, saúde, tecnologia, educação...)", "Indústria / Manufatura", "Agronegócio", "Financeiro / Imobiliário", "Outro"],
    multi: false,
    cols: 2,
  },
  {
    id: 3,
    text: "Qual é o faturamento anual aproximado da sua empresa?",
    hint: null,
    options: ["Até R$ 360 mil (MEI)", "R$ 360 mil a R$ 4,8 milhões", "R$ 4,8 milhões a R$ 78 milhões", "Acima de R$ 78 milhões"],
    multi: false,
    cols: 2,
  },
  {
    id: 4,
    text: "Para quem sua empresa vende principalmente?",
    hint: "Essa resposta define se o regime híbrido de 2027 pode ser vantajoso para você.",
    options: ["Consumidor final — pessoa física (B2C)", "Outras empresas (B2B)", "Misto (B2B e B2C)", "Governo / setor público"],
    multi: false,
    cols: 2,
  },
  {
    id: 5,
    text: "Sua empresa compra muito de fornecedores para produzir ou revender?",
    hint: "Empresas com alto volume de compras acumulam mais créditos de IBS/CBS.",
    options: ["Sim, a maior parte do custo é em insumos / mercadorias", "Parcialmente — temos custos mistos", "Não, nosso principal custo é mão de obra", "Não sei avaliar"],
    multi: false,
    cols: 1,
  },
  {
    id: 6,
    text: "Sua empresa realiza vendas para clientes em outros estados?",
    hint: "A reforma muda a tributação da origem para o destino — isso afeta diretamente quem vende fora do estado.",
    options: ["Sim, a maior parte das vendas é para outros estados", "Sim, mas é uma parte pequena", "Não, atuamos apenas localmente", "Exportamos para o exterior"],
    multi: false,
    cols: 1,
  },
  {
    id: 7,
    text: "Sua empresa possui contratos de prestação de serviço ou fornecimento com prazo superior a 1 ano?",
    hint: "Contratos sem cláusula de reajuste tributário podem gerar prejuízo na transição.",
    options: ["Sim, temos vários contratos longos em vigor", "Sim, alguns poucos", "Não, trabalhamos com contratos curtos ou avulsos", "Não se aplica ao nosso modelo"],
    multi: false,
    cols: 1,
  },
  {
    id: 8,
    text: "Como seus clientes pagam principalmente?",
    hint: "O split payment entra em vigor com Pix e cartões — e elimina o float financeiro dos tributos.",
    options: ["Cartão de crédito / débito", "Pix", "Boleto bancário", "Dinheiro / transferência manual", "Misto"],
    multi: false,
    cols: 2,
  },
  {
    id: 9,
    text: "Como está o sistema de emissão de notas fiscais da sua empresa?",
    hint: null,
    options: ["Atualizado e integrado com contador / ERP", "Básico, emitimos NF mas sem integração", "Emitimos notas manualmente", "Ainda não adaptamos para CBS / IBS"],
    multi: false,
    cols: 1,
  },
  {
    id: 10,
    text: "Sua empresa faz revisão ou planejamento tributário regularmente?",
    hint: null,
    options: ["Sim, revisamos todo ano com especialista", "Fazemos só quando há algum problema", "Nunca fizemos uma revisão formal", "Não sei o que é planejamento tributário"],
    multi: false,
    cols: 1,
  },
  {
    id: 11,
    text: "O que mais preocupa você com a reforma tributária?",
    hint: "Selecione todos que se aplicam.",
    options: ["Aumento da carga tributária", "Impacto no fluxo de caixa (split payment)", "Complexidade operacional e notas fiscais", "Contratos e precificação desatualizados", "Não perder créditos tributários legítimos", "Não sei por onde começar"],
    multi: true,
    cols: 2,
  },
]

function calcScore(answers: Record<number, number | number[]>) {
  let score = 0
  const regime = answers[0] as number
  if (regime === 0) score += 20
  if (regime === 1) score += 35
  if (regime === 2) score += 15
  if (regime === 3) score += 40

  const setor = answers[1] as number
  if (setor === 1) score += 20
  if (setor === 0) score += 12
  if (setor === 2) score += 8
  if (setor === 3) score += 5
  if (setor === 4) score += 15
  if (setor === 5) score += 10

  const insumos = answers[4] as number
  if (insumos === 2) score += 15
  if (insumos === 3) score += 10
  if (insumos === 1) score += 5

  const nf = answers[8] as number
  if (nf === 3) score += 15
  if (nf === 2) score += 10
  if (nf === 1) score += 5

  const plan = answers[9] as number
  if (plan === 2) score += 15
  if (plan === 3) score += 20
  if (plan === 1) score += 8

  return Math.min(score, 100)
}

function getAlerts(answers: Record<number, number | number[]>) {
  const setor = answers[1] as number
  const regime = answers[0] as number
  const insumos = answers[4] as number
  const pagamento = answers[7] as number
  const nf = answers[8] as number
  const contratos = answers[6] as number
  const alerts: string[] = []

  if (regime === 1) alerts.push("2026 é o último ano no regime cumulativo de PIS/COFINS — análise de migração é urgente")
  if (setor === 1) alerts.push("Setor de serviços tende a ter aumento de carga com IBS/CBS — revise sua precificação agora")
  if (contratos === 0 || contratos === 1) alerts.push("Contratos sem cláusula tributária podem gerar prejuízo durante a transição 2026–2033")
  if (pagamento === 0 || pagamento === 1 || pagamento === 4) alerts.push("Split payment via cartão e Pix elimina o float financeiro — seu capital de giro será afetado")
  if (nf === 3) alerts.push("Notas fiscais ainda não adaptadas para CBS/IBS — risco de autuação em 2026")
  if (insumos === 2) alerts.push("Empresas com custo principal em mão de obra têm menos créditos a compensar no novo sistema")

  return alerts.slice(0, 4)
}

function getOpportunities(answers: Record<number, number | number[]>) {
  const regime = answers[0] as number
  const setor = answers[1] as number
  const insumos = answers[4] as number
  const plan = answers[9] as number
  const ops: string[] = []

  if (plan === 2 || plan === 3) ops.push("Revisão dos últimos 5 anos pode revelar créditos tributários não aproveitados")
  if (regime === 0 && (answers[3] as number) === 1) ops.push("Empresas do Simples com carteira B2B podem se beneficiar do regime híbrido a partir de 2027")
  if (regime === 1) ops.push("Migração para Lucro Real pode ser vantajosa com o fim da cumulatividade em 2027")
  if (setor === 1) ops.push("Setores como saúde e educação têm alíquota reduzida — verifique se sua atividade se enquadra")
  if (insumos === 0 || insumos === 1) ops.push("Alto volume de compras gera créditos de IBS/CBS — estruture o aproveitamento agora")
  ops.push("Planejamento tributário preventivo pode garantir até 30% de redução na carga efetiva")

  return ops.slice(0, 4)
}

const regimeLabels = ["Simples Nacional", "Lucro Presumido", "Lucro Real", "A definir"]
const setorLabels = ["Comércio", "Serviços", "Indústria", "Agronegócio", "Financeiro/Imobiliário", "Outro"]

const timeline = [
  { year: "2026", text: "Fase de testes CBS (0,9%) + IBS (0,1%). Notas fiscais com novos campos obrigatórios. Adaptar sistemas e revisar contratos." },
  { year: "2027", text: "PIS/COFINS extintos. CBS em vigor plena (≈8,8%). Split payment obrigatório. Fim do regime cumulativo para Lucro Presumido." },
  { year: "2029", text: "Início da transição do ICMS e ISS para o IBS. Cobrança crescente até 2032." },
  { year: "2033", text: "Sistema definitivo. ICMS e ISS extintos. IBS e CBS em alíquota plena." },
]

function ScoreCircle({ score }: { score: number }) {
  const [displayed, setDisplayed] = useState(0)
  const circumference = 2 * Math.PI * 40
  const offset = circumference - (score / 100) * circumference
  const color = score < 35 ? "#1a8f5c" : score < 65 ? "#b8860b" : "#c0392b"

  useEffect(() => {
    let n = 0
    const step = () => {
      n = Math.min(n + 2, score)
      setDisplayed(n)
      if (n < score) requestAnimationFrame(step)
    }
    const t = setTimeout(() => requestAnimationFrame(step), 100)
    return () => clearTimeout(t)
  }, [score])

  return (
    <div className="relative w-24 h-24 flex-shrink-0">
      <svg viewBox="0 0 88 88" className="w-full h-full -rotate-90">
        <circle cx="44" cy="44" r="40" fill="none" stroke="#e5e7eb" strokeWidth="6" />
        <circle
          cx="44" cy="44" r="40" fill="none"
          stroke={color} strokeWidth="6" strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-serif text-2xl font-bold leading-none" style={{ color }}>{displayed}</span>
        <span className="text-[10px] text-muted-foreground mt-0.5">/ 100</span>
      </div>
    </div>
  )
}

export function TaxReformQuiz() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number | number[]>>({})
  const [selectedMulti, setSelectedMulti] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [animating, setAnimating] = useState(false)

  const q = questions[current]
  const pct = Math.round(((current + 1) / questions.length) * 100)

  const hasAnswer = q.multi
    ? (Array.isArray(answers[current]) && (answers[current] as number[]).length > 0)
    : answers[current] !== undefined

  function selectOption(i: number) {
    if (q.multi) {
      const prev = Array.isArray(answers[current]) ? (answers[current] as number[]) : []
      const next = prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
      setAnswers(a => ({ ...a, [current]: next }))
      setSelectedMulti(next)
    } else {
      setAnswers(a => ({ ...a, [current]: i }))
    }
  }

  function isSelected(i: number) {
    if (q.multi) return selectedMulti.includes(i)
    return answers[current] === i
  }

  function goNext() {
    if (current === questions.length - 1) { setShowResult(true); return }
    setAnimating(true)
    setTimeout(() => {
      setCurrent(c => c + 1)
      const next = current + 1
      setSelectedMulti(Array.isArray(answers[next]) ? (answers[next] as number[]) : [])
      setAnimating(false)
    }, 220)
  }

  function goBack() {
    if (current === 0) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(c => c - 1)
      const prev = current - 1
      setSelectedMulti(Array.isArray(answers[prev]) ? (answers[prev] as number[]) : [])
      setAnimating(false)
    }, 220)
  }

  function restart() {
    setAnswers({})
    setSelectedMulti([])
    setCurrent(0)
    setShowResult(false)
  }

  if (showResult) {
    const score = calcScore(answers)
    const alerts = getAlerts(answers)
    const ops = getOpportunities(answers)
    const regime = regimeLabels[answers[0] as number] || "A definir"
    const setor = setorLabels[answers[1] as number] || "Geral"

    let badgeClass = ""
    let badgeLabel = ""
    let headline = ""
    let summary = ""

    if (score < 35) {
      badgeClass = "bg-green-50 text-green-700 border border-green-200"
      badgeLabel = "Baixo impacto"
      headline = "Sua empresa está relativamente bem posicionada para a transição."
      summary = "O perfil da sua empresa apresenta poucos pontos de risco com a Reforma Tributária. Ainda assim, há oportunidades de otimização que podem ser aproveitadas antes de 2027."
    } else if (score < 65) {
      badgeClass = "bg-yellow-50 text-yellow-700 border border-yellow-200"
      badgeLabel = "Impacto moderado"
      headline = "Há pontos de atenção que precisam de ajuste antes de 2027."
      summary = "Sua empresa tem vulnerabilidades específicas que, sem planejamento, podem resultar em aumento de carga tributária ou problemas de fluxo de caixa durante a transição."
    } else {
      badgeClass = "bg-red-50 text-red-700 border border-red-200"
      badgeLabel = "Alto impacto"
      headline = "Sua empresa precisa agir agora — a janela de ajuste está se fechando."
      summary = "O perfil da sua empresa indica exposição significativa às mudanças da reforma. Cada mês sem planejamento pode representar tributo pago a mais ou passivo tributário acumulado."
    }

    return (
      <div className="w-full max-w-2xl mx-auto animate-in fade-in slide-in-from-right-8 duration-300">
        <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
          <div className="p-8 sm:p-12">
            {/* Top */}
            <div className="flex items-start gap-6 mb-8 pb-8 border-b border-border">
              <ScoreCircle score={score} />
              <div className="flex-1">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase mb-3 ${badgeClass}`}>
                  {badgeLabel}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-secondary leading-snug mb-2">{headline}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{summary}</p>
                <p className="text-xs text-muted-foreground/60 mt-2">Perfil: {regime} · {setor}</p>
              </div>
            </div>

            {/* Blocks */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-muted/40 rounded-xl border border-border p-5">
                <div className="flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-primary mb-3">
                  <span className="w-3 h-px bg-primary inline-block" />
                  Pontos de alerta
                </div>
                <ul className="space-y-2">
                  {alerts.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted/40 rounded-xl border border-border p-5">
                <div className="flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-primary mb-3">
                  <span className="w-3 h-px bg-primary inline-block" />
                  Oportunidades identificadas
                </div>
                <ul className="space-y-2">
                  {ops.map((o, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-primary mb-4">
                <span className="w-3 h-px bg-primary inline-block" />
                Cronograma crítico para seu perfil
              </div>
              <div className="space-y-0">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-5 items-start relative">
                    {i < timeline.length - 1 && (
                      <div className="absolute left-[35px] top-7 bottom-0 w-px bg-border" />
                    )}
                    <span className="font-serif text-xs font-semibold text-primary w-10 flex-shrink-0 pt-2.5">{item.year}</span>
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-primary bg-background flex-shrink-0 mt-3" />
                    <p className="text-xs text-muted-foreground leading-relaxed pb-5">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary/8 border border-primary/20 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-lg font-semibold text-secondary mb-1">Receba a análise completa</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Nossos especialistas traduzem esse diagnóstico em um plano de ação concreto para a sua empresa.</p>
              </div>
              <Link
                href="/#contato"
                className="flex-shrink-0 inline-flex items-center gap-2.5 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-3 rounded-lg text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
              >
                Falar com especialista
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="text-center mt-4">
              <button
                onClick={restart}
                className="text-xs text-muted-foreground hover:text-secondary border border-border rounded-lg px-4 py-2 transition-colors"
              >
                ↺ Refazer diagnóstico
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-4 mb-9">
        <div className="flex-1 h-px bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${pct}%`, boxShadow: "0 0 8px var(--color-primary)" }}
          />
        </div>
        <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">{current + 1} de {questions.length}</span>
      </div>

      {/* Card */}
      <div
        className={`bg-card rounded-2xl border border-border shadow-md overflow-hidden transition-all duration-220 ${animating ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}
      >
        <div className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
        <div className="p-8 sm:p-12">
          <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary mb-5">
            <span className="w-5 h-px bg-primary inline-block" />
            Pergunta {String(current + 1).padStart(2, "0")}
          </div>

          <h2 className="font-serif text-xl sm:text-[1.6rem] font-semibold text-secondary leading-snug mb-2">{q.text}</h2>

          {q.hint && (
            <p className="text-xs text-muted-foreground italic mb-6">{q.hint}</p>
          )}

          <div className={`grid gap-2.5 mt-6 ${q.cols === 2 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => selectOption(i)}
                className={`flex items-center gap-3.5 p-4 rounded-xl border text-left text-sm transition-all duration-200 hover:translate-x-1 ${
                  isSelected(i)
                    ? "border-primary bg-primary/10 text-secondary"
                    : "border-border bg-muted/40 text-muted-foreground hover:border-primary/40 hover:text-secondary"
                }`}
              >
                <span className={`w-5 h-5 rounded-full border-[1.5px] flex items-center justify-center flex-shrink-0 transition-all ${
                  q.multi ? "rounded" : ""
                } ${isSelected(i) ? "border-primary bg-primary" : "border-muted-foreground/30"}`}>
                  {isSelected(i) && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                </span>
                <span className="leading-snug">{opt}</span>
              </button>
            ))}
          </div>

          {/* Nav */}
          <div className="flex items-center justify-between mt-9 gap-4">
            {current > 0 ? (
              <button
                onClick={goBack}
                className="flex items-center gap-2 border border-border text-muted-foreground hover:text-secondary px-4 py-2.5 rounded-lg text-sm transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Voltar
              </button>
            ) : <div />}
            <button
              onClick={goNext}
              disabled={!hasAnswer}
              className="ml-auto flex items-center gap-2.5 bg-primary hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              {current === questions.length - 1 ? "Ver meu diagnóstico" : "Próxima"}
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
