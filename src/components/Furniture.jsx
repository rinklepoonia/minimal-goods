"use client"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, { useLayoutEffect } from 'react'
gsap.registerPlugin(ScrollTrigger);

const Furniture = () => {
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let tl = gsap.timeline()
            ScrollTrigger.create({
                trigger: "#furniture",
                start: "top top",
                endTrigger: "#next",
                end: "top top",
                scrub: 1,
                markers: true,
                animation: tl,
                toggleActions: "play none none none",
                pin: true,
            })
            // tl.to("#scrollImg", {
            //     y: -600
            // })
        })
        return () => ctx.revert();
    }, [])
    return (
        <div>
            <div className='min-h-screen bg-[#E8E2DA] flex flex-col justify-end'>
                <div id='furniture'>
                    <p className='text-[250px] font-bold text-black'>Furniture</p>
                </div>

                <div id='scrollImg' className='flex flex-row justify-center relative z-2'>
                    <div className='w-[24%] mr-5'>
                        <div className=' h-[438px]'>
                            <Image className='absolute  h-[438px] object-cover' width={334} height={438} src="/assets/images/webp/white-window.webp" alt='white-window' />
                        </div>
                    </div>
                    <div className='w-[19%] mr-5 mt-[20%]'>
                        <div className=' h-[438px]'>
                            <Image className='absolute  h-[438px] object-cover' width={248} height={325} src="/assets/images/webp/study-table.webp" alt='study-table' />
                        </div>
                    </div>
                    <div className='w-[12%] mt-4'>
                        <div className=' h-[212px]'>
                            <Image className='absolute  h-[212px] object-cover' width={161} height={212} src="/assets/images/webp/white-cahir.webp" alt='white-chair' />
                        </div>
                    </div>
                    <div className='w-[31%] mt-[24%]'>
                        <div className=' h-[438px]'>
                            <Image className='absolute  h-[438px] object-cover' width={420} height={551} src="/assets/images/webp/single-chair.webp" alt='single-chair' />
                        </div>
                    </div>
                </div>

            </div>
            <div id='next' className='min-h-screen'></div>
        </div>
    )
}

export default Furniture