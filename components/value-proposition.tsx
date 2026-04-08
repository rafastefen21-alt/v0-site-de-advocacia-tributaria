"use client"

import { Sun, Users, Shield, ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

// Animated network background component
function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (rect) {
        canvas.width = rect.width
        canvas.height = rect.height
      }
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Generate network nodes
    const nodeCount = 35
    const nodes: { x: number; y: number; baseX: number; baseY: number; phase: number }[] = []
    
    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * 100
      const y = Math.random() * 100
      nodes.push({
        x,
        y,
        baseX: x,
        baseY: y,
        phase: Math.random() * Math.PI * 2,
      })
    }

    // Find connections between nearby nodes
    const connections: { from: number; to: number; distance: number }[] = []
    const maxDistance = 30

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].baseX - nodes[j].baseX
        const dy = nodes[i].baseY - nodes[j].baseY
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < maxDistance) {
          connections.push({ from: i, to: j, distance })
        }
      }
    }

    const animate = () => {
      if (!ctx || !canvas) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.003 // Very slow animation

      // Update node positions with subtle drift
      nodes.forEach((node) => {
        const driftX = Math.sin(time + node.phase) * 0.3
        const driftY = Math.cos(time * 0.8 + node.phase) * 0.3
        node.x = node.baseX + driftX
        node.y = node.baseY + driftY
      })

      // Draw connections with subtle opacity variation
      connections.forEach((conn) => {
        const fromNode = nodes[conn.from]
        const toNode = nodes[conn.to]
        
        const x1 = (fromNode.x / 100) * canvas.width
        const y1 = (fromNode.y / 100) * canvas.height
        const x2 = (toNode.x / 100) * canvas.width
        const y2 = (toNode.y / 100) * canvas.height

        // Subtle opacity pulsation on lines
        const lineOpacity = 0.12 + Math.sin(time * 0.5 + conn.distance * 0.1) * 0.03

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = `rgba(199, 134, 91, ${lineOpacity})`
        ctx.lineWidth = 0.8
        ctx.stroke()
      })

      // Draw nodes with pulsation
      nodes.forEach((node) => {
        const x = (node.x / 100) * canvas.width
        const y = (node.y / 100) * canvas.height

        // Subtle pulsation effect
        const pulse = 0.15 + Math.sin(time * 0.7 + node.phase) * 0.05
        const radius = 2 + Math.sin(time * 0.5 + node.phase) * 0.3

        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(199, 134, 91, ${pulse})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  )
}

const valueCards = [
  {
    icon: Sun,
    title: "Receita Adicional",
    description: "Aumento de faturamento sem investimento em estrutura",
    highlight: null,
  },
  {
    icon: Users,
    title: "Retenção de Clientes",
    description: "Redução de {Churn} e aumento de {lifetime value}",
    highlight: ["Churn", "lifetime value"],
  },
  {
    icon: Shield,
    title: "Segurança Operacional",
    description: "Redução de risco de autuação e blindagem legal",
    highlight: null,
  },
  {
    icon: ArrowRight,
    title: "Posicionamento de Mercado",
    description: "Atração de clientes premium e diferenciação competitiva",
    highlight: null,
  },
]

function renderDescription(description: string, highlights: string[] | null) {
  if (!highlights) return description
  
  let result = description
  highlights.forEach(term => {
    result = result.replace(`{${term}}`, `<em class="italic text-secondary font-normal">${term}</em>`)
  })
  return <span dangerouslySetInnerHTML={{ __html: result }} />
}

export function ValueProposition() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#eef3f9] relative overflow-hidden">
      {/* Animated network background */}
      <NetworkBackground />
      
      <div className="max-w-[1160px] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-3">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-primary flex items-center gap-3">
            <span className="w-8 h-0.5 bg-primary rounded-sm" />
            Proposta de Valor
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-secondary leading-tight max-w-[600px]">
            O que muda na prática quando você tem a{" "}
            <em className="italic text-primary">assessoria certa</em>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valueCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-7 pb-8 flex flex-col items-start gap-4 border border-secondary/10 relative overflow-hidden group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 cursor-default"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-[14px] bg-primary/10 flex items-center justify-center mb-1">
                <card.icon className="w-7 h-7 text-primary" strokeWidth={1.6} />
              </div>

              {/* Title */}
              <p className="text-sm font-medium tracking-[0.08em] uppercase text-secondary leading-snug">
                {card.title}
              </p>

              {/* Description */}
              <p className="text-[14.5px] font-light text-muted-foreground leading-relaxed flex-1">
                {renderDescription(card.description, card.highlight)}
              </p>

              {/* Link */}
              <a
                href="#contato"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-primary mt-1 group/link hover:gap-2.5 transition-all duration-200"
              >
                Saiba mais
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-200" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
