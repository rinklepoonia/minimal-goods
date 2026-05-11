'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    const heroRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero entrance animation
            gsap.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: 'power4.out',
                delay: 0.2
            })

            gsap.from(subtitleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power4.out',
                delay: 0.5
            })

            // Scroll-triggered animations
            gsap.to(heroRef.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                },
                y: 200,
                opacity: 0,
                scale: 0.9
            })
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h1
                    ref={titleRef}
                    className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
                >
                    Premium
                    <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                        Experience
                    </span>
                </h1>
                <p
                    ref={subtitleRef}
                    className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
                >
                    Immersive design meets cutting-edge technology
                </p>
            </div>
        </section>
    )
}
/*  */