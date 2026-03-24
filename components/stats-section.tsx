"use client"

import { useEffect, useState, useRef } from "react"
import { Building2, Users, TrendingUp, Award } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: 500,
    suffix: "M+",
    prefix: "R$",
    label: "Em Créditos Recuperados",
  },
  {
    icon: Building2,
    value: 1200,
    suffix: "+",
    prefix: "",
    label: "Empresas Atendidas",
  },
  {
    icon: Users,
    value: 30,
    suffix: "+",
    prefix: "",
    label: "Anos de Experiência",
  },
  {
    icon: Award,
    value: 98,
    suffix: "%",
    prefix: "",
    label: "Taxa de Sucesso",
  },
]

function AnimatedNumber({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            const duration = 2000
            const steps = 60
            const increment = value / steps
            let current = 0

            const timer = setInterval(() => {
              current += increment
              if (current >= value) {
                setCount(value)
                clearInterval(timer)
              } else {
                setCount(Math.floor(current))
              }
            }, duration / steps)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold text-primary">
      {prefix}{count.toLocaleString("pt-BR")}{suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 mb-4">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                <p className="text-secondary-foreground/70 mt-2">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
