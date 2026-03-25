"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  originX: number
  originY: number
  length: number
  thickness: number
  color: string
  angle: number
  waveOffset: number
  waveSpeed: number
}

export function InteractiveParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number>(0)
  const timeRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particlesRef.current = []
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 4000)
      
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        // Colors similar to Google Antigravity - blues and purples with some variation
        const colors = [
          "#1a2744", // navy blue (brand secondary)
          "#2563EB", // bright blue
          "#3B82F6", // blue
          "#6366F1", // indigo
          "#8B5CF6", // purple
          "#7C3AED", // violet
          "#F26522", // orange (brand primary - sparse)
        ]
        const colorIndex = Math.random() < 0.08 ? 6 : Math.floor(Math.random() * 6)
        
        particlesRef.current.push({
          x,
          y,
          originX: x,
          originY: y,
          length: Math.random() * 3 + 2,
          thickness: Math.random() * 1 + 0.5,
          color: colors[colorIndex],
          angle: Math.random() * Math.PI * 2,
          waveOffset: Math.random() * Math.PI * 2,
          waveSpeed: Math.random() * 0.03 + 0.02,
        })
      }
    }

    const drawParticle = (particle: Particle, time: number) => {
      if (!ctx) return
      
      // Calculate wave motion
      const waveAngle = Math.sin(time * particle.waveSpeed + particle.waveOffset) * 0.5
      const currentAngle = particle.angle + waveAngle
      
      ctx.save()
      ctx.translate(particle.x, particle.y)
      ctx.rotate(currentAngle)
      
      // Draw a small dash/line
      ctx.beginPath()
      ctx.strokeStyle = particle.color
      ctx.lineWidth = particle.thickness
      ctx.lineCap = "round"
      ctx.moveTo(-particle.length / 2, 0)
      ctx.lineTo(particle.length / 2, 0)
      ctx.stroke()
      
      ctx.restore()
    }

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      timeRef.current += 1

      const mouseX = mouseRef.current.x
      const mouseY = mouseRef.current.y
      const radius = 120

      particlesRef.current.forEach((particle) => {
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Continuous wave motion - always moving like flowing water
        const time = timeRef.current * 0.015
        const waveAmplitude = 8
        const waveX = Math.sin(time + particle.waveOffset) * waveAmplitude
        const waveY = Math.cos(time * 0.8 + particle.waveOffset * 1.3) * waveAmplitude
        
        // Update angle based on wave for flowing effect
        particle.angle += Math.sin(time + particle.waveOffset) * 0.02

        if (distance < radius && mouseX > 0 && mouseY > 0) {
          // Push particles away from mouse
          const force = (radius - distance) / radius
          const angle = Math.atan2(dy, dx)
          const pushX = Math.cos(angle) * force * 50
          const pushY = Math.sin(angle) * force * 50
          
          particle.x -= pushX * 0.2
          particle.y -= pushY * 0.2
          
          // Rotate particle towards mouse direction
          particle.angle = angle + Math.PI / 4
        } else {
          // Smoothly move with wave motion
          const targetX = particle.originX + waveX
          const targetY = particle.originY + waveY
          particle.x += (targetX - particle.x) * 0.05
          particle.y += (targetY - particle.y) * 0.05
        }

        drawParticle(particle, timeRef.current)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        }
      }
    }

    const handleTouchEnd = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("touchmove", handleTouchMove)
    canvas.addEventListener("touchend", handleTouchEnd)

    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      canvas.removeEventListener("touchmove", handleTouchMove)
      canvas.removeEventListener("touchend", handleTouchEnd)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto z-0"
      style={{ opacity: 0.7 }}
    />
  )
}
