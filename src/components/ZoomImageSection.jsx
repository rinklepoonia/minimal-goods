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
                start: " top top",
                end: "bottom top",
                scrub: 1,
                markers: false,
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
                width: "100vw",
                height: "953px",

            }
            )
                .to("#zoomImgEffect", {
                    backgroundColor: "#E8E2DA",
                })
        })
        return () => ctx.revert();
    }, [])
    return (
        <div id='zoomImgEffect' className='h-[100vh] bg-[#2E2A27] z-[40] px-4 flex justify-center items-center overflow-hidden'>
            <div id='imgZoom' className='mx-auto '>
                <Image width={1400} height={953} className='object-cover mx-auto' src="/assets/images/webp/room.webp" alt='her-img' />
            </div>
        </div>
    )
}

export default ZoomImageSection