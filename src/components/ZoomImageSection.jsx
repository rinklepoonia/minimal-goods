"use client"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, { useLayoutEffect } from 'react'
gsap.registerPlugin(ScrollTrigger);

const ZoomImageSection = () => {
    useLayoutEffect(() => {
        const circleHeight = window.innerHeight;
        const circleWidth = window.innerWidth;
        let ctx = gsap.context(() => {
            let tl = gsap.timeline()
            ScrollTrigger.create({
                trigger: "#zoomImgEffect",
                start: "top 8%",
                end: "bottom top",
                scrub: 1,
                markers: false,
                toggleActions: "play none none none",
                pin: true,
                pinSpacing: true,
                animation: tl,
            })
            // tl.fromTo("#imgZoom ", {
            //     borderRadius: "100rem",
            //     width: "500px",
            //     height: "500px",
            // }, {
            //     borderRadius: "0",
            //     width: "100vw",
            //     height: "100vh",

            // }, "<"
            // )
            tl.fromTo("#imgZoom",
                {
                    width: `${circleHeight - 200}px`,
                    height: `${circleHeight - 200}px`,
                    borderRadius: "9999px",
                },
                {
                    width: `${circleWidth - 18}px`,
                    height: `${circleHeight - 69}px`,
                    borderRadius: "0px",
                    duration: 1,
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
        // <div id='zoomImgEffect' className='h-[100vh] bg-[#2E2A27] z-[2] px-10 flex justify-center items-center overflow-hidden relative'>
        //     <div id='imgZoom' className='mx-auto overflow-hidden w-full h-full flex items-center justify-center'>
        //         <Image width={1920} height={1024} className='object-cover mx-auto' src="/assets/images/webp/room.webp" alt='her-img' />
        //     </div>
        // </div>
        <div className="relative z-[2] bg-[#2E2A27] ">
            <div id='zoomImgEffect' className='flex justify-center zoomImageContainer'>
                <div className="flex justify-center items-center pt-[69px] w-full">
                    <div id='imgZoom' className="rounded-full overflow-hidden bg-no-repeat bg-center image-wrapper bg-[url('/assets/images/webp/room.webp')]"></div>
                </div>
            </div>
        </div>
    )
}

export default ZoomImageSection