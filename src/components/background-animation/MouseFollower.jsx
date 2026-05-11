'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function MouseFollower() {
    const followerRef = useRef(null)
    const cursorRef = useRef(null)

    useEffect(() => {
        const follower = followerRef.current
        const cursor = cursorRef.current

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            })

            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.6,
                ease: 'power2.out'
            })
        }

        window.addEventListener('mousemove', moveCursor)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
                style={{ transform: 'translate(-50%, -50%)' }}
            />
            <div
                ref={followerRef}
                className="fixed w-8 h-8 border-2 border-white/50 rounded-full pointer-events-none z-50 mix-blend-difference"
                style={{ transform: 'translate(-50%, -50%)' }}
            />
        </>
    )
}
