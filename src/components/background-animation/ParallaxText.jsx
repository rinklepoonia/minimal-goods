'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxText({ text, speed = 1 }) {
    const textRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(textRef.current, {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                },
                x: -200 * speed,
                ease: 'none'
            })
        }, textRef)

        return () => ctx.revert()
    }, [speed])

    return (
        <div className="overflow-hidden py-8">
            <div
                ref={textRef}
                className="text-[10vw] font-bold text-white/5 whitespace-nowrap"
            >
                {text} {text} {text}
            </div>
        </div>
    )
}
