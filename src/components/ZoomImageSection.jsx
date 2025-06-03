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
                start: "top top",
                end: "bottom top",
                scrub: 1,
                markers: false,
                toggleActions: "play none none none",
                pin: true,
                pinSpacing: true,
                animation: tl,
            })
            tl.fromTo("#imgZoom", {
                width: "400px",
                height: "400px",
            }, {
                width: "100vw",
                height: "100vh",

            }, "<"
            )
                .fromTo("#imgZoom ", {
                    borderRadius: "100rem",
                    width: "400px",
                    height: "400px",
                }, {
                    borderRadius: "0",
                    width: "100vw",
                    height: "100vh",

                }, "<"
                )
                .to("#zoomImgEffect", {
                    backgroundColor: "#E8E2DA",
                }, "<")
                .to("#stickyNav", {
                    backgroundColor: "#E8E2DA",
                }, "<")
                .to("#navLinks", {
                    color: "#000",
                }, "<")
                .to("#logoPath", {
                    fill: "#000",
                }, "<")
                .to("#borderBottom", {
                    borderBottomColor: "#000",
                }, "<")
        })
        return () => ctx.revert();
    }, [])
    return (
        <div id='zoomImgEffect' className='h-[100vh] bg-[#2E2A27] z-[30] px-10 flex justify-center items-center overflow-hidden'>
            <div id='imgZoom' className='mx-auto overflow-hidden w-full'>
                <Image width={1920} height={1024} className='object-cover mx-auto' src="/assets/images/webp/room.webp" alt='her-img' />
            </div>
        </div>
    )
}

export default ZoomImageSection