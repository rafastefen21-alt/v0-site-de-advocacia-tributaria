import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowLeft, Calendar, FileText, Building2, Users, Landmark, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Reforma Tributária | SKP Assessoria Tributária",
  description: "Entenda a maior reforma tributária desde 1988. IBS, CBS, Imposto Seletivo, cronograma de transição e impactos para sua empresa.",
}

const taxChanges = [
  { old: "ICMS (estadual)", new: "IBS - Imposto sobre Bens e Serviços" },
  { old: "ISS (municipal)", new: "IBS - Imposto sobre Bens e Serviços" },
  { old: "PIS", new: "CBS - Contribuição sobre Bens e Serviços" },
  { old: "COFINS", new: "CBS - Contribuição sobre Bens e Serviços" },
  { old: "IPI (reduzido a zero)", new: "IS - Imposto Seletivo" },
]

const approvals = [
  {
    title: "Lei Complementar 214/2025",
    date: "Janeiro de 2025",
    description: "Primeira lei de regulamentação da reforma. Definiu as regras gerais do IBS, da CBS e do Imposto Seletivo, incluindo alíquotas, não-cumulatividade, regimes diferenciados e o cronograma de transição até 2033.",
    icon: FileText,
  },
  {
    title: "PLP 108/2024",
    date: "Dezembro de 2025",
    description: "Segunda lei de regulamentação, aprovada pela Câmara e enviada à sanção presidencial. Definiu a governança do novo sistema, criou o Comitê Gestor do IBS (CG-IBS) e regulamentou o split payment - mecanismo que separa automaticamente o tributo no momento da transação.",
    icon: Building2,
  },
  {
    title: "ITCMD - Novas Regras",
    date: "Heranças e Doações",
    description: "Alíquotas passam a ser obrigatoriamente progressivas (sobem conforme o valor do bem). Estados mantêm autonomia para fixar alíquotas, mas o Senado estabelecerá teto. Fundos de previdência privada herdados (VGBL/PGBL) foram excluídos da base de cálculo.",
    icon: Users,
  },
  {
    title: "ITBI - Novas Regras",
    date: "Compra e Venda de Imóveis",
    description: "Base de cálculo passa a ser o valor de mercado do imóvel. Municípios poderão oferecer desconto na alíquota para quem antecipar o pagamento no ato da escritura - inclusive para imóveis na planta.",
    icon: Landmark,
  },
]

const timeline = [
  { year: "2023", event: "Emenda Constitucional 132 promulgada" },
  { year: "Jan 2025", event: "LC 214/2025 sancionada. Regras gerais do IBS e CBS definidas" },
  { year: "Dez 2025", event: "PLP 108/2024 aprovado. Comitê Gestor criado. Split payment regulamentado" },
  { year: "2026", event: "Início do período de testes. Primeiras obrigações acessórias do IBS e CBS entram em vigor" },
  { year: "2026-2032", event: "Transição gradual. ICMS e ISS ainda coexistem com IBS e CBS" },
  { year: "2033", event: "IBS e CBS entram em plena vigência. ICMS e ISS extintos" },
  { year: "Até 2078", event: "Mecanismos de compensação de perdas para estados e municípios" },
]

const sectors = [
  "Empresas de serviços (escritórios, consultorias, clínicas)",
  "Agronegócio",
  "Saúde e farmacêutico",
  "Combustíveis e telecomunicações",
  "Imobiliário (ITBI e ITCMD com novas regras)",
  "Operações de herança, doação e planejamento sucessório",
]

const services = [
  "Diagnóstico de impacto da reforma para a sua empresa",
  "Revisão de contratos e precificação sob a nova tributação",
  "Planejamento tributário para o período de transição",
  "Acompanhamento das obrigações acessórias do IBS e CBS",
  "Assessoria em ITCMD e planejamento sucessório",
]

const faqs = [
  {
    question: "Minha empresa já precisa fazer algo em 2026?",
    answer: "Sim. As primeiras obrigações acessórias do IBS e CBS entram em vigor em 2026. Empresas que não se prepararem podem enfrentar rejeições de notas fiscais e autuações.",
  },
  {
    question: "O Simples Nacional vai mudar?",
    answer: "O Simples Nacional passa por adaptações no período de transição, especialmente na dinâmica de pagamento dos impostos e no aproveitamento de créditos. O impacto no fluxo de caixa pode ser relevante.",
  },
  {
    question: "O que é o split payment?",
    answer: "É o novo mecanismo pelo qual o valor do tributo é separado automaticamente no momento da transação - uma parte vai ao vendedor, outra diretamente ao governo. Reduz erros e sonegação, mas exige adequação dos sistemas das empresas.",
  },
  {
    question: "A reforma afeta o planejamento de herança e doação?",
    answer: "Sim, diretamente. As novas regras do ITCMD trazem alíquotas progressivas e mudanças na base de cálculo. Quem tem planejamento sucessório em andamento precisa revisá-lo.",
  },
]

export default function ReformaTributariaPage() {
  return (
    <main className="min-h-screen bg-background font-serif">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20SKP%20Azul%404x%20%282%29-EM2hnNNRgAwgvXAfzxdQtlQpFfl7GQ.png"
                alt="SKP Assessoria Tributária"
                width={160}
                height={60}
                className="h-12 w-auto"
                loading="eager"
                priority
              />
            </Link>
            <Link href="/" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">Voltar ao site</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-reforma.png')`,
            zIndex: 0,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" style={{ zIndex: 1 }} />
        <div className="max-w-4xl mx-auto text-center relative" style={{ zIndex: 2 }}>
          <h1 className="text-secondary leading-tight mb-6">
            <span className="text-primary font-bold text-4xl sm:text-5xl lg:text-[3.25rem] tracking-wide block mb-2">A sua empresa está preparada?</span>
            <span className="text-2xl sm:text-3xl lg:text-[2rem] max-w-2xl mx-auto block">A maior reforma tributária desde 1988 já está em vigor.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground font-light leading-[1.8] max-w-3xl mx-auto mb-8">
            A Emenda Constitucional 132 foi promulgada, a Lei Complementar 214/2025 foi sancionada e a regulamentação do PLP 108/2024 está aprovada. O novo sistema tributário brasileiro é real - e o período de transição já começou.
          </p>
          <Link href="/#contato" className="w-full sm:w-auto inline-block">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-6 text-sm sm:text-base group w-full sm:w-auto">
              <span className="whitespace-normal sm:whitespace-nowrap">Quero entender o impacto para minha empresa</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Section 1 - O que mudou */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              O novo mapa tributário do Brasil
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              O sistema tributário brasileiro está sendo completamente redesenhado. Cinco impostos que você conhece serão extintos e substituídos por um novo modelo baseado no IVA (Imposto sobre Valor Agregado), já adotado em mais de 170 países.
            </p>
          </div>

          <div className="bg-background rounded-2xl p-6 sm:p-8 shadow-lg border border-border">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center py-3 bg-secondary/10 rounded-lg">
                <span className="font-bold text-secondary">SAI</span>
              </div>
              <div className="text-center py-3 bg-primary/10 rounded-lg">
                <span className="font-bold text-primary">ENTRA</span>
              </div>
            </div>
            <div className="space-y-3">
              {taxChanges.map((change, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 py-3 border-b border-border last:border-0">
                  <div className="flex items-center">
                    <span className="text-muted-foreground">{change.old}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-secondary font-medium">{change.new}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 pt-4 border-t border-border">
              O IPI será mantido apenas para produtos fabricados fora da Zona Franca de Manaus que tenham similar produzido lá.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Aprovações */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              O que já foi aprovado até agora
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {approvals.map((approval, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <approval.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-primary font-semibold">{approval.date}</span>
                    <h3 className="text-xl font-bold text-secondary mt-1 mb-3">{approval.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{approval.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4">
              Quando cada mudança entra em vigor
            </h2>
            <p className="text-lg text-secondary-foreground/80">
              A transição foi desenhada para ser gradual, mas isso não significa que sua empresa pode esperar.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center gap-6 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'} pl-12 sm:pl-0`}>
                    <div className="bg-card rounded-xl p-4 shadow-lg inline-block">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      <p className="text-secondary text-sm mt-1">{item.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-secondary -translate-x-1/2" />
                  <div className="flex-1 hidden sm:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Quem precisa se preocupar */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
                A reforma não afeta todos da mesma forma - mas afeta a todos
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                O impacto da reforma varia conforme o setor, o porte da empresa e o modelo de operação. Alguns negócios podem se beneficiar do novo regime de créditos. Outros - especialmente no setor de serviços - podem enfrentar aumento de carga.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Marketplaces e plataformas digitais também entram no radar: passam a ser solidariamente responsáveis pelo recolhimento de tributos caso o vendedor não emita nota fiscal.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-secondary mb-6">Setores que exigem atenção especial:</h3>
              <ul className="space-y-4">
                {sectors.map((sector, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{sector}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Como podemos ajudar */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Não espere a mudança chegar. Planeje antes.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A fase de adaptação começou - e empresas que se anteciparem terão vantagem competitiva real. Nossa equipe acompanha a regulamentação da reforma em tempo real e traduz cada mudança em ação prática para o seu negócio.
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary to-secondary/90 rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl font-bold text-secondary-foreground mb-8">O que oferecemos:</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-4 text-secondary-foreground text-sm">
                  {service}
                </div>
              ))}
            </div>
            <Link href="/#contato" className="w-full sm:w-auto inline-block">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-6 text-sm sm:text-base group w-full sm:w-auto">
                <span className="whitespace-normal sm:whitespace-nowrap">Agende uma conversa com nossos especialistas</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6 - FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Perguntas frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-card rounded-xl border border-border overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-secondary pr-4">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-180 flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
            Sua empresa está pronta para o novo sistema tributário?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Fale com nossos especialistas e receba um diagnóstico personalizado do impacto da reforma para o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none mx-auto">
            <Link href="/#contato" className="w-full sm:w-auto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-6 text-sm sm:text-base group w-full">
                Solicitar Diagnóstico Gratuito
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </Button>
            </Link>
            <Link href="/" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="border-secondary/20 text-secondary hover:bg-secondary/5 font-semibold px-6 sm:px-8 py-6 text-sm sm:text-base w-full">
                Voltar ao site principal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
