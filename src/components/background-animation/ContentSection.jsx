'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ContentSection({ title, description, index }) {
    const sectionRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: 1
                },
                y: 100,
                opacity: 0,
                scale: 0.95
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center px-6 py-20"
        >
            <div
                ref={contentRef}
                className="max-w-4xl mx-auto"
            >
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
                    <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                        Section {index}
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        {title}
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    )
}
