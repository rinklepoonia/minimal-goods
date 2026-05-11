'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function AnimatedBackground() {
    const bgRef = useRef(null)
    const overlayRef = useRef(null)
    const canvasRef = useRef(null)

    useEffect(() => {
        if (!bgRef.current) return

        const createZigzagAnimation = () => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.2 })
            const points = [
                { width: '0%', x: '0%', y: '0%', rotation: 0 },
                { width: '25%', x: '5%', y: '-8%', rotation: 3 },
                { width: '40%', x: '-3%', y: '10%', rotation: -5 },
                { width: '60%', x: '7%', y: '-12%', rotation: 6 },
                { width: '80%', x: '-6%', y: '8%', rotation: -4 },
                { width: '100%', x: '0%', y: '0%', rotation: 0 }
            ]

            points.forEach((point, index) => {
                if (index === 0) {
                    tl.set(bgRef.current, { ...point, opacity: 0.5 })
                } else {
                    tl.to(bgRef.current, { ...point, opacity: 1, duration: 0.5, ease: 'power2.inOut' })
                }
            })
            return tl
        }

        const mainTimeline = createZigzagAnimation()

        if (overlayRef.current) {
            gsap.to(overlayRef.current, { x: '200%', y: '30%', duration: 2.5, repeat: -1, ease: 'sine.inOut' })
        }

        return () => mainTimeline.kill()
    }, [])

    // Particle animation
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const particleCount = 80
        const particlesArray = []

        class Particle {
            constructor() {
                this.reset()
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
            }

            reset() {
                this.baseX = Math.random() * canvas.width
                this.baseY = Math.random() * canvas.height
                this.size = Math.random() * 3 + 1
                this.speedX = Math.random() * 2 - 1
                this.speedY = Math.random() * 2 - 1
                this.color = ['#6366f1', '#ec4899', '#8b5cf6'][Math.floor(Math.random() * 3)]
            }

            update(phase, centerX, centerY) {
                if (phase === 'scatter') {
                    this.x += this.speedX
                    this.y += this.speedY
                    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
                    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
                } else if (phase === 'gather') {
                    const dx = centerX - this.x
                    const dy = centerY - this.y
                    this.x += dx * 0.05
                    this.y += dy * 0.05
                } else if (phase === 'burst') {
                    const angle = Math.atan2(this.y - centerY, this.x - centerX)
                    this.x += Math.cos(angle) * 5
                    this.y += Math.sin(angle) * 5
                }
            }

            draw() {
                ctx.fillStyle = this.color
                ctx.shadowBlur = 10
                ctx.shadowColor = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particlesArray.push(new Particle())
        }

        let animationPhase = 'scatter'
        let phaseTimer = 0
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            phaseTimer++
            if (phaseTimer > 180 && animationPhase === 'scatter') {
                animationPhase = 'gather'
                phaseTimer = 0
            } else if (phaseTimer > 120 && animationPhase === 'gather') {
                animationPhase = 'burst'
                phaseTimer = 0
            } else if (phaseTimer > 60 && animationPhase === 'burst') {
                animationPhase = 'scatter'
                phaseTimer = 0
            }

            particlesArray.forEach(particle => {
                particle.update(animationPhase, centerX, centerY)
                particle.draw()
            })

            requestAnimationFrame(animate)
        }

        animate()

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="fixed inset-0 -z-20 overflow-hidden bg-slate-950">
            <canvas ref={canvasRef} className="absolute inset-0 opacity-60" />

            <div
                ref={bgRef}
                className="absolute inset-y-0 left-0 w-0"
                style={{
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(236, 72, 153, 0.4) 50%, rgba(139, 92, 246, 0.4) 100%)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transformOrigin: 'left center'
                }}
            >
                <div
                    ref={overlayRef}
                    className="absolute inset-y-0 -left-full w-full"
                    style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                        width: '50%'
                    }}
                />
            </div>

            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />
        </div>
    )
}
