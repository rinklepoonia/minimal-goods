'use client'

import { useEffect, useState } from 'react'
import gsap from 'gsap'

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            gsap.to('.loading-screen', {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.inOut',
                onComplete: () => setIsLoading(false)
            })
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    if (!isLoading) return null

    return (
        <div className="loading-screen fixed inset-0 z-50 bg-slate-950 flex items-center justify-center">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4" />
                <p className="text-white/60 text-sm tracking-wider">Loading Experience</p>
            </div>
        </div>
    )
}
