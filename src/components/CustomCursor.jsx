import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let curX = 0, curY = 0
    let animId

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      }
    }

    const animate = () => {
      curX += (mouseX - curX) * 0.15
      curY += (mouseY - curY) * 0.15
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${curX}px, ${curY}px)`
      }
      animId = requestAnimationFrame(animate)
    }

    const onEnter = () => setIsHovering(true)
    const onLeave = () => setIsHovering(false)

    // Better event handling
    window.addEventListener('mousemove', move, { passive: true })
    
    // Update hover state more frequently
    const updateHoverState = () => {
      const links = document.querySelectorAll('a, button, [data-hover], .card, .ctaOutline, .ctaWhatsapp')
      links.forEach(el => {
        el.addEventListener('mouseenter', onEnter, { passive: true })
        el.addEventListener('mouseleave', onLeave, { passive: true })
      })
    }

    updateHoverState()
    
    // Re-check for new elements periodically
    const interval = setInterval(updateHoverState, 1000)

    animId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(animId)
      clearInterval(interval)
    }
  }, [])

  // Don't render custom cursor on mobile
  if (isMobile) return null

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: -20,
          left: -20,
          width: isHovering ? 48 : 36,
          height: isHovering ? 48 : 36,
          border: '2px solid var(--ink)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 999999,
          transition: 'width 0.3s, height 0.3s, background 0.3s',
          background: isHovering ? 'var(--yellow)' : 'transparent',
          mixBlendMode: isHovering ? 'normal' : 'difference',
          willChange: 'transform',
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: -3,
          left: -3,
          width: 6,
          height: 6,
          background: 'var(--ink)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 999999,
          willChange: 'transform',
          transition: 'background 0.2s',
        }}
      />
    </>
  )
}
