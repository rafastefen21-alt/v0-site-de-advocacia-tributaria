"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from "framer-motion"

// Section landmarks where the symbol will "land"
const sectionLandmarks = [
  { id: "hero", offsetY: 100, align: "right" },
  { id: "servicos", offsetY: 50, align: "left" },
  { id: "nossos-servicos", offsetY: 50, align: "right" },
  { id: "calculadora", offsetY: 50, align: "left" },
  { id: "processo", offsetY: 50, align: "right" },
  { id: "equipe", offsetY: 50, align: "left" },
  { id: "contato", offsetY: 50, align: "right" },
]

export function ScrollSymbol() {
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)
  const bobOffset = useMotionValue(0)
  
  const { scrollYProgress } = useScroll()
  
  // Smooth spring animation for vertical movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Transform scroll progress to Y position (moves down as user scrolls)
  const y = useTransform(smoothProgress, [0, 1], [100, 2800])
  
  // Transform scroll progress to X position (oscillates between left and right)
  const x = useTransform(
    smoothProgress,
    [0, 0.15, 0.25, 0.4, 0.55, 0.7, 0.85, 1],
    ["calc(85vw - 40px)", "calc(15vw)", "calc(85vw - 40px)", "calc(15vw)", "calc(85vw - 40px)", "calc(15vw)", "calc(85vw - 40px)", "calc(15vw)"]
  )
  
  // Rotation based on scroll
  const rotate = useTransform(smoothProgress, [0, 1], [0, 360])
  
  // Scale pulsing
  const scale = useTransform(
    smoothProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1]
  )
  
  // Opacity based on scroll position
  const opacity = useTransform(
    smoothProgress,
    [0, 0.02, 0.95, 1],
    [0.7, 0.85, 0.85, 0.5]
  )

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Detect scrolling state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [])

  // Bobbing animation when not scrolling
  useAnimationFrame((time) => {
    if (!isScrolling) {
      const bob = Math.sin(time / 500) * 8
      bobOffset.set(bob)
    } else {
      bobOffset.set(0)
    }
  })

  // Don't render on mobile
  if (isMobile) return null

  return (
    <motion.div
      className="fixed z-50 pointer-events-none"
      style={{
        y,
        x,
        rotate,
        scale,
        opacity,
      }}
    >
      <motion.div
        style={{ y: bobOffset }}
        className="relative"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 blur-xl bg-primary/30 rounded-full scale-150" />
        
        {/* SKP Symbol - SVG recreation of the logo */}
        <svg
          width="50"
          height="50"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative drop-shadow-lg"
        >
          {/* Outer curved shape */}
          <path
            d="M70 20C85 20 95 35 95 50C95 65 85 80 70 80C60 80 52 74 48 65"
            stroke="#F26522"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M30 80C15 80 5 65 5 50C5 35 15 20 30 20C40 20 48 26 52 35"
            stroke="#F26522"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Inner curved connections */}
          <path
            d="M48 65C44 55 44 45 52 35"
            stroke="#F26522"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </motion.div>
    </motion.div>
  )
}
