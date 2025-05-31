"use client"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, { useLayoutEffect } from 'react'
gsap.registerPlugin(ScrollTrigger);

const ZoomImageSection = () => {
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let tl = gsap.timeline()
            ScrollTrigger.create({
                trigger: "#zoomImgEffect",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
                markers: true,
                toggleActions: "play none none none",
                duration: 2,
                pin: true,
                pinSpacing: false,
                animation: tl,
            })
            tl.fromTo("#imgZoom", {
                scale: 2,
                borderRadius: "100%",
            }, {
                borderRadius: 0,
                width:"1000px"
            }
            )
        })
        return () => ctx.revert();
    }, [])
    return (
        <div id='zoomImgEffect' className='min-h-screen bg-[#2E2A27] z-40 '>
            <div className='container max-w-[1380px] mx-auto px-3'>
                <Image id='imgZoom' width={500} height={500} className=' object-cover mx-auto ' src="/assets/images/webp/room.webp" alt='her-img' />
            </div>
        </div>
    )
}

export default ZoomImageSection