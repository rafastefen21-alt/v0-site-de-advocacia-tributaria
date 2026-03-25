"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  originX: number
  originY: number
  size: number
  color: string
  angle: number
}

export function InteractiveParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number>(0)

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
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 8000)
      
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        // Use brand colors: secondary (navy blue) and primary (orange)
        const colors = [
          "#1a2744", // secondary - navy blue
          "#1a2744",
          "#1a2744",
          "#F26522", // primary - orange (less frequent)
          "#64748B", // muted
        ]
        particlesRef.current.push({
          x,
          y,
          originX: x,
          originY: y,
          size: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          angle: Math.random() * Math.PI * 2,
        })
      }
    }

    const drawParticle = (particle: Particle) => {
      if (!ctx) return
      
      ctx.save()
      ctx.translate(particle.x, particle.y)
      ctx.rotate(particle.angle)
      
      ctx.beginPath()
      ctx.fillStyle = particle.color
      // Draw a small dash/line instead of circle for the antigravity effect
      ctx.fillRect(-particle.size * 2, -particle.size / 2, particle.size * 4, particle.size)
      ctx.fill()
      
      ctx.restore()
    }

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mouseX = mouseRef.current.x
      const mouseY = mouseRef.current.y
      const radius = 150 // Influence radius of mouse

      particlesRef.current.forEach((particle) => {
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < radius) {
          // Push particles away from mouse
          const force = (radius - distance) / radius
          const angle = Math.atan2(dy, dx)
          const pushX = Math.cos(angle) * force * 50
          const pushY = Math.sin(angle) * force * 50
          
          particle.x -= pushX * 0.1
          particle.y -= pushY * 0.1
          
          // Rotate particle based on mouse movement
          particle.angle = angle + Math.PI / 2
        } else {
          // Slowly return to original position
          particle.x += (particle.originX - particle.x) * 0.02
          particle.y += (particle.originY - particle.y) * 0.02
          
          // Slowly return to original random angle
          particle.angle += 0.001
        }

        drawParticle(particle)
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

    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("touchmove", handleTouchMove)

    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      canvas.removeEventListener("touchmove", handleTouchMove)
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
