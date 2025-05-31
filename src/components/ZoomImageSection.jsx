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
                start: " top bottom",
                end: "+1500 bottom",
                scrub: 1,
                markers: true,
                toggleActions: "play none none none",
                pin: true,
                pinSpacing: false,
                pinSpacer: false,
                animation: tl,
            })
            tl.fromTo("#imgZoom img", {
                borderRadius: "100rem",
                width: "300px",
                height: "300px",
            }, {
                borderRadius: "0",
                width: "1400px",
                height: "933px"
            }
            )
        })
        return () => ctx.revert();
    }, [])
    return (
        <div id='zoomImgEffect' className='min-h-screen bg-[#2E2A27] z-40 flex justify-center items-center'>
            <div className='px-3'>
                <div id='imgZoom' className='mx-auto'>
                    <Image width={1400} height={953} className='object-cover mx-auto' src="/assets/images/webp/room.webp" alt='her-img' />
                </div>
            </div>
        </div>
    )
}

export default ZoomImageSection