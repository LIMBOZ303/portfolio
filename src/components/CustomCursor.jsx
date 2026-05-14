import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  
  // Motion values for the mouse position
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  
  // Smooth spring physics for the trailing effect
  const springConfig = { damping: 25, stiffness: 150 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      if (e.touches && e.touches.length > 0) {
        mouseX.set(e.touches[0].clientX)
        mouseY.set(e.touches[0].clientY)
      } else {
        mouseX.set(e.clientX)
        mouseY.set(e.clientY)
      }
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOut = (e) => {
      if (e.relatedTarget === null) setIsVisible(false)
    }
    
    const handleTouchEnd = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('touchmove', moveCursor, { passive: true })
    window.addEventListener('touchstart', moveCursor, { passive: true })
    window.addEventListener('mouseout', handleMouseOut)
    window.addEventListener('touchend', handleTouchEnd)
    window.addEventListener('mouseover', () => setIsVisible(true))

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('touchmove', moveCursor)
      window.removeEventListener('touchstart', moveCursor)
      window.removeEventListener('mouseout', handleMouseOut)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [mouseX, mouseY, isVisible])

  // Check if touch device
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  return (
    <>
      {/* Outer glowing ring (trails the mouse) - Hidden on touch devices so it doesn't get covered by finger */}
      {!isTouchDevice && (
        <motion.div
          className="fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full pointer-events-none z-[9998] border border-primary/50 bg-primary/10 shadow-[0_0_20px_rgba(6,182,212,0.6)] mix-blend-screen hidden md:block"
          style={{
            x: smoothX,
            y: smoothY,
            opacity: isVisible ? 1 : 0
          }}
        />
      )}
      
      {/* Huge background spotlight glow (illuminates the background like a candle) - Works on both PC and Mobile */}
      <motion.div
        className="fixed top-0 left-0 w-[600px] h-[600px] -ml-[300px] -mt-[300px] rounded-full pointer-events-none z-[0] bg-primary/5 blur-[120px] mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isVisible ? 0.8 : 0
        }}
      />
    </>
  )
}
