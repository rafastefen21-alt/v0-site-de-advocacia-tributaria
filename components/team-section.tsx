"use client"

import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

const team = [
  {
    name: "Tatiane Skoberg",
    role: "Advogada Contratual e Tributarista",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-09%20at%2020.56.48-3cyKabwqOBgqep9HMgMVJ0E9s9ilRi.jpeg",
    description: "Especialista em Gestão Tributária pela USP/Esalq. Pós-graduanda em Reforma Tributária e Prática Fiscal (FBC). Bacharel em Ciências Contábeis e Administração de Empresas. Mais de 15 anos de atuação na área fiscal/tributária.",
  },
  {
    name: "Bruno Pires",
    role: "Advogado de Propriedade Intelectual e Tributário",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-09%20at%2020.56.47-0YMwfaV10yEDFXoKcbeA21m2hlBIyh.jpeg",
    description: "Formado desde 2008 na Universidade de São Paulo, Pós-graduado em Direito Tributário pelo Damásio Educacional. Atuante em Direito Empresarial Tributário, Marcário e Juiz Arbitral Federal - CAMECON.",
  },
  {
    name: "Aline Fontoura",
    role: "Contadora Especialista em Gestão Tributária",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-17%20at%2013.17.18-lRV4OXPIVzIJwzPMyTmK32hBF1Alac.jpeg",
    description: "Formada desde 2008 na Universidade Cidade de SP, Pós-graduada em Processo Civil pela PUC/SP e MBA em Gestão Tributária pela USP/SP. Atuante em Direito Empresarial e Tributário. Membro do Mulheres do Tributário. Reconhecida pela Revista Análise como a Advogada mais admirada.",
  },
]

export function TeamSection() {
  return (
    <section id="equipe" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/[0.02]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
            <span className="text-sm font-mono text-primary">NOSSA EQUIPE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-secondary mb-4 text-balance">
            Especialistas em Direito Tributário
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Uma equipe multidisciplinar de advogados, contadores e especialistas em tecnologia 
            trabalhando juntos para maximizar seus resultados.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="relative p-6 -mt-16 z-10">
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                  <h3 className="text-xl font-bold text-secondary mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                    <button className="w-10 h-10 rounded-lg bg-secondary/5 hover:bg-secondary/10 flex items-center justify-center transition-colors">
                      <Linkedin className="h-5 w-5 text-secondary" />
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-secondary/5 hover:bg-secondary/10 flex items-center justify-center transition-colors">
                      <Mail className="h-5 w-5 text-secondary" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Photo */}
        <div className="mt-16">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-17%20at%2013.17.19-CsYDBdgQv5boOyiwBrWeCfebnwVDv5.jpeg"
              alt="Equipe SKP Assessoria Tributária"
              width={1200}
              height={500}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent flex items-center">
              <div className="p-8 lg:p-12 max-w-xl">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Unidos pela Excelência Tributária
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Nossa equipe combina expertise jurídica, conhecimento contábil e 
                  inovação tecnológica para entregar resultados excepcionais aos nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
