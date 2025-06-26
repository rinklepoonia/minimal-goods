// hooks/useLenis.js
"use client"
import { useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"

const UseLenis = () => {
    useEffect(() => {
        const lenis = new Lenis({
            smooth: true,
            lerp: 0.08,
            direction: "vertical",
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
        lenis.on("scroll", ScrollTrigger.update)

        return () => {
            lenis.destroy()
        }
    }, [])
}

export default UseLenis
