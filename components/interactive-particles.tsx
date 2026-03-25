"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  originX: number
  originY: number
  size: number
  color: string
  rotation: number
  waveOffset: number
  waveSpeed: number
  opacity: number
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
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 6000)
      
      // Blue shades only
      const colors = [
        "#1a2744", // navy blue (brand secondary)
        "#1e3a5f", // dark blue
        "#2563EB", // bright blue
        "#3B82F6", // blue
        "#60A5FA", // light blue
        "#1a2744", // navy blue
      ]
      
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const colorIndex = Math.floor(Math.random() * colors.length)
        
        particlesRef.current.push({
          x,
          y,
          originX: x,
          originY: y,
          size: Math.random() * 6 + 4,
          color: colors[colorIndex],
          rotation: Math.random() * Math.PI * 2,
          waveOffset: Math.random() * Math.PI * 2,
          waveSpeed: Math.random() * 0.02 + 0.01,
          opacity: Math.random() * 0.4 + 0.3,
        })
      }
    }

    // Draw the SKP "a" symbol shape
    const drawSKPSymbol = (particle: Particle) => {
      if (!ctx) return
      
      ctx.save()
      ctx.translate(particle.x, particle.y)
      ctx.rotate(particle.rotation)
      ctx.globalAlpha = particle.opacity
      
      const s = particle.size
      
      ctx.strokeStyle = particle.color
      ctx.lineWidth = s * 0.18
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
      
      // Draw the SKP symbol - stylized "a" with two interlocking curves
      ctx.beginPath()
      
      // Outer oval (the main "a" shape)
      ctx.ellipse(0, 0, s * 0.5, s * 0.7, 0, 0, Math.PI * 2)
      ctx.stroke()
      
      // Inner curved element (the swoosh inside)
      ctx.beginPath()
      ctx.ellipse(s * 0.1, s * 0.15, s * 0.25, s * 0.35, Math.PI * 0.2, Math.PI * 0.5, Math.PI * 2)
      ctx.stroke()
      
      ctx.restore()
    }

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      timeRef.current += 1

      const mouseX = mouseRef.current.x
      const mouseY = mouseRef.current.y
      const radius = 150

      particlesRef.current.forEach((particle) => {
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Continuous wave motion
        const time = timeRef.current * 0.012
        const waveAmplitude = 10
        const waveX = Math.sin(time + particle.waveOffset) * waveAmplitude
        const waveY = Math.cos(time * 0.7 + particle.waveOffset * 1.2) * waveAmplitude
        
        // Gentle rotation over time
        particle.rotation += Math.sin(time + particle.waveOffset) * 0.008

        if (distance < radius && mouseX > 0 && mouseY > 0) {
          // Push particles away from mouse
          const force = (radius - distance) / radius
          const angle = Math.atan2(dy, dx)
          const pushX = Math.cos(angle) * force * 60
          const pushY = Math.sin(angle) * force * 60
          
          particle.x -= pushX * 0.15
          particle.y -= pushY * 0.15
          
          // Spin faster when pushed
          particle.rotation += force * 0.1
        } else {
          // Smoothly move with wave motion
          const targetX = particle.originX + waveX
          const targetY = particle.originY + waveY
          particle.x += (targetX - particle.x) * 0.04
          particle.y += (targetY - particle.y) * 0.04
        }

        drawSKPSymbol(particle)
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
      style={{ opacity: 0.6 }}
    />
  )
}
