import { useEffect, useRef, useState, useMemo } from 'react'

/**
 * Animate elements when scrolled into view using IntersectionObserver
 * @param {Object} options - Animation configuration
 * @returns {Object} { ref, isVisible, className, style }
 */
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    direction = 'up',
    delay = 0,
    duration = 600,
    triggerOnce = true,
    initiallyVisible = false
  } = options

  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(initiallyVisible)
  const hasAnimatedRef = useRef(false)
  const timeoutRef = useRef(null)

  // Set up the scroll watcher when component mounts
  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // For elements that should be initially visible, skip observer setup
    if (initiallyVisible && !hasAnimatedRef.current) {
      if (delay > 0) {
        timeoutRef.current = setTimeout(() => {
          setIsVisible(true)
          hasAnimatedRef.current = true
        }, delay)
      } else {
        setIsVisible(true)
        hasAnimatedRef.current = true
      }
      // Still return cleanup function
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
      }
    }

    // Create IntersectionObserver for elements not initially visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!hasAnimatedRef.current || !triggerOnce)) {
          if (timeoutRef.current) clearTimeout(timeoutRef.current)
          
          timeoutRef.current = setTimeout(() => {
            setIsVisible(true)
            hasAnimatedRef.current = true
          }, delay)
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin: '0px' }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [threshold, delay, triggerOnce, initiallyVisible])

  // Memoize output to prevent unnecessary re-renders
  return useMemo(() => ({
    ref: elementRef,
    isVisible,
    className: `scroll-animate animate-${direction} ${isVisible ? 'animate-in' : 'animate-out'}`,
    style: { '--animation-duration': `${duration}ms` }
  }), [isVisible, direction, duration])
}

