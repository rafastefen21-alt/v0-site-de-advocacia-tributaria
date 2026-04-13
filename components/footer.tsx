import Image from "next/image"
import Link from "next/link"
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react"

const navigation = {
  servicos: [
    { name: "Diagnóstico Tributário", href: "#" },
    { name: "Consultoria Tributária", href: "#" },
    { name: "Recuperação de Créditos", href: "#" },
    { name: "Planejamento Tributário", href: "#" },
    { name: "Compliance Tributário", href: "#" },
    { name: "Revisão Fiscal", href: "#" },
  ],
  segmentos: [
    { name: "Simples Nacional", href: "#" },
    { name: "Lucro Presumido", href: "#" },
    { name: "Lucro Real", href: "#" },
    { name: "Indústria", href: "#" },
    { name: "Comércio", href: "#" },
    { name: "Serviços", href: "#" },
  ],
  empresa: [
    { name: "Sobre Nós", href: "#" },
    { name: "Nossa Equipe", href: "#equipe" },
    { name: "Blog", href: "#" },
    { name: "Contato", href: "#contato" },
    { name: "Política de Privacidade", href: "#" },
  ],
}

const social = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "YouTube", href: "#", icon: Youtube },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20SKP%20Azul%404x%20%282%29-EM2hnNNRgAwgvXAfzxdQtlQpFfl7GQ.png"
              alt="SKP Assessoria Tributária"
              width={140}
              height={50}
              className="h-10 w-auto brightness-0 invert mb-6"
            />
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-4">
              Assessoria tributária com inteligência jurídica e tecnologia na recuperação de créditos.
            </p>
            <div className="text-secondary-foreground/70 text-sm leading-relaxed mb-2 space-y-1">
              <p>(48) 98813-1245 — SC</p>
              <p>(11) 91989-2000 — SP</p>
            </div>
            <div className="text-secondary-foreground/70 text-sm leading-relaxed mb-6 space-y-1">
              <p>Rua Santo Antonio, 686 - CJ 201</p>
              <p>Barreiros — São José / SC</p>
              <p className="mt-2">Av. Regente Feijó, 944 - CJ 1304 A</p>
              <p>Anália Franco — São Paulo / SP</p>
            </div>
            <div className="flex items-center gap-3">
              {social.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Serviços</h3>
            <ul className="space-y-3">
              {navigation.servicos.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Segmentos */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Segmentos</h3>
            <ul className="space-y-3">
              {navigation.segmentos.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Empresa</h3>
            <ul className="space-y-3">
              {navigation.empresa.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-foreground/50 text-sm">
              © {new Date().getFullYear()} SKP Assessoria Tributária. Todos os direitos reservados.
            </p>
            <p className="text-secondary-foreground/50 text-sm">
              OAB/SC 12345 | CNPJ 00.000.000/0001-00
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
