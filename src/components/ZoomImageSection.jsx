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
            let mm = gsap.matchMedia();
            ScrollTrigger.create({
                trigger: "#zoomImgEffect",
                start: "top 5%",
                end: "bottom top",
                scrub: 1,
                markers: false,
                toggleActions: "play none none none",
                pin: true,
                pinSpacing: true,
                animation: tl,
            })
            mm.add("(min-width: 768.99px)", () => {
                tl.fromTo("#imgZoom",
                    {
                        width: `${circleHeight - 300}px`,
                        height: `${circleHeight -300}px`,
                        borderRadius: "9999px",
                    },
                    {
                        width: `${circleWidth - 40}px`,
                        height: `${circleHeight - 0}px`,
                        borderRadius: "0px",
                        duration: 1,
                    }, "<"
                )
            });
            mm.add("(max-width: 767.99px)", () => {
                tl.fromTo("#imgZoom",
                    {
                        width: `${circleHeight - 710}px`,
                        height: `${circleHeight - 710}px`,
                        borderRadius: "9999px",
                    },
                    {
                        width: `${circleWidth - 40}px`,
                        height: `${circleHeight - 0}px`,
                        borderRadius: "0px",
                        duration: 1,
                    }, "<"
                )
            });

            tl.to("#zoomImgEffect", {
                backgroundColor: "#E8E2DA",
            }, "<")
                .to("body", {
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
        <div id='zoomImgEffect' className='h-[100vh] bg-[#2E2A27] z-[2] sm:px-10 px-4 flex justify-center items-center overflow-hidden relative'>
            <div id='imgZoom' className='mx-auto overflow-hidden w-full h-full flex items-center justify-center'>
                <div id='imgZoom' className="rounded-full overflow-hidden bg-no-repeat  bg-center image-wrapper bg-zoom-img"></div>
            </div>
        </div>
    )
}

export default ZoomImageSection