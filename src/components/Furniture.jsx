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
            <div className='min-h-screen bg-[#E8E2DA] flex flex-col justify-end px-10'>
                <div id='furniture'>
                    <p className='xl:text-[250px] text-[100px] font-bold text-black px-10 text-start'>Furniture</p>
                </div>

                <div className='flex flex-row justify-start relative z-2'>
                    <div className='w-[24%] mr-[9%]'>
                        <div className=' h-[438px]'>
                            <Image className='absolute  h-[438px] object-cover' width={334} height={438} src="/assets/images/webp/white-window.webp" alt='white-window' />
                        </div>
                    </div>
                    <div className='w-[19%] mr-5 mt-[20%]'>
                        <div className=' h-[325px]'>
                            <Image className='absolute  h-[325px] object-cover' width={248} height={325} src="/assets/images/webp/study-table.webp" alt='study-table' />
                        </div>
                    </div>
                    <div className='w-[12%] mt-4'>
                        <div className=' h-[212px]'>
                            <Image className='absolute  h-[212px] object-cover' width={161} height={212} src="/assets/images/webp/white-cahir.webp" alt='white-chair' />
                        </div>
                    </div>
                    <div className='w-[31%] mt-[24%]'>
                        <div className=' h-[551px]'>
                            <Image className='absolute  h-[551px] object-cover' width={420} height={551} src="/assets/images/webp/single-chair.webp" alt='single-chair' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-start relative z-2 mt-32'>
                    <div className='w-[24%] mr-[9%]'>
                        <div className=' h-[438px]'>
                            <Image className='absolute  h-[438px] object-cover' width={334} height={438} src="/assets/images/webp/white-masrum.webp" alt='white-window' />
                        </div>
                    </div>
                    <div className='w-[19%] mr-5 mt-[20%]'>
                        <div className=' h-[325px]'>
                            <Image className='absolute  h-[325px] object-cover' width={248} height={325} src="/assets/images/webp/white-lalten.webp" alt='study-table' />
                        </div>
                    </div>
                    <div className='w-[12%] mt-4'>
                        <div className=' h-[212px]'>
                            <Image className='absolute  h-[212px] object-cover' width={161} height={212} src="/assets/images/webp/night-view.webp" alt='white-chair' />
                        </div>
                    </div>
                    <div className='w-[31%] mt-[24%]'>
                        <div className=' h-[551px]'>
                            <Image className='absolute  h-[551px] object-cover' width={420} height={551} src="/assets/images/webp/white-big-bulb.webp" alt='single-chair' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-start relative z-2 mt-[-13%]'>
                    <div className='w-[31%] mr-[6%]'>
                        <div className=' h-[551px]'>
                            <Image className='absolute  h-[551px] object-cover' width={420} height={551} src="/assets/images/webp/library-bulb.webp" alt='library-bulb' />
                        </div>
                    </div>
                    <div className='w-[25%] mr-5 mt-[5%]'>
                        <div className=' h-[438px]'>
                            <Image className='absolute  h-[438px] object-cover' width={334} height={438} src="/assets/images/webp/green-plant.webp" alt='green-plant' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-start relative z-2 mt-32'>
                    <div className='w-[24%] mr-[9%]'>
                        <div className=' h-[438px]'>
                            <Image className='absolute  h-[438px] object-cover' width={334} height={438} src="/assets/images/webp/office-light.webp" alt='office-light' />
                        </div>
                    </div>
                    <div className='w-[19%] mr-5 mt-[20%]'>
                        <div className=' h-[325px]'>
                            <Image className='absolute  h-[325px] object-cover' width={248} height={325} src="/assets/images/webp/two-chairs.webp" alt='two-chair' />
                        </div>
                    </div>
                    <div className='w-[12%] mt-4'>
                        <div className=' h-[212px]'>
                            <Image className='absolute  h-[212px] object-cover' width={161} height={212} src="/assets/images/webp/gold-biskuts.webp" alt='gold-biskuts' />
                        </div>
                    </div>
                    <div className='w-[31%] mt-[24%]'>
                        <div className=' h-[551px]'>
                            <Image className='absolute  h-[551px] object-cover' width={420} height={551} src="/assets/images/webp/chair-table-laptop.webp" alt='single-chair' />
                        </div>
                    </div>

                </div>
                <div className='flex flex-row justify-start relative z-2 mt-32'>
                    <div className='w-[24%] mr-[9%]'>
                        <div className=' h-[438px]'>
                            <Image className='absolute  h-[438px] object-cover' width={334} height={438} src="/assets/images/webp/less-more.webp" alt='less-more' />
                        </div>
                    </div>
                    <div className='w-[19%] mr-5 mt-[20%]'>
                        <div className=' h-[325px]'>
                            <Image className='absolute  h-[325px] object-cover' width={248} height={325} src="/assets/images/webp/tech-5.webp" alt='tech-5' />
                        </div>
                    </div>
                    <div className='w-[12%] mt-4'>
                        <div className=' h-[212px]'>
                            <Image className='absolute  h-[212px] object-cover' width={161} height={212} src="/assets/images/webp/camera.webp" alt='camera' />
                        </div>
                    </div>
                    <div className='w-[31%] mt-[24%]'>
                        <div className=' h-[551px]'>
                            <Image className='absolute  h-[551px] object-cover' width={420} height={551} src="/assets/images/webp/digital-watch.webp" alt='digital-watch' />
                        </div>
                    </div>

                </div>
                <div className='flex flex-row justify-start relative z-2 mt-[-13%]'>
                    <div className='w-[31%] mr-[6%]'>
                        <div className=' h-[551px]'>
                            <Image className='absolute  h-[551px] object-cover' width={420} height={551} src="/assets/images/webp/cycle.webp" alt='cycle' />
                        </div>
                    </div>
                    <div className='w-[25%] mr-5 mt-[5%]'>
                        <div className=' h-[438px]'>
                            <Image className='absolute  h-[438px] object-cover' width={334} height={438} src="/assets/images/webp/bony.webp" alt='bony' />
                        </div>
                    </div>
                </div>


            </div>
            <div id='next' className='min-h-screen'></div>
        </div>
    )
}

export default Furniture