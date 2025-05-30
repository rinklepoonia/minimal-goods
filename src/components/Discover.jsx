"use client"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useLayoutEffect } from 'react'
gsap.registerPlugin(ScrollTrigger);


const Discover = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()
      ScrollTrigger.create({
        trigger: "#discoverParent",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: true,
        toggleActions: "play none none none",
        duration: 2,
        pin: true,
        pinSpacer: false,
        pinSpacing: false,
        animation: tl,
      })
      tl.to("#textOne", {
        y: 200
      })
      tl.to("#textTwo", {
        y: 200
      })
      tl.to("#textThree", {
        y: 200
      })
      tl.to("#textFour", {
        y: 200
      })
    })
    return () => ctx.revert();
  }, [])
  return (
    <div id='discoverParent' className=' bg-[#2E2A27] flex flex-col justify-center items-center pt-2 min-h-screen'>
      <div className='container max-w-[1380px] mx-auto px-3 text-center'>
        <div>
          <h2 id='textOne' className='text-[120px] leading-normal text-white'>Discover</h2>
        </div>
        <div className='bg-[#2E2A27] relative z-10'>
          <h2 id='textTwo' className='text-[120px] leading-normal text-white'>the best in</h2>
        </div>
        <div className='bg-[#2E2A27] relative z-10'>
          <h2 id='textThree' className='text-[120px] leading-normal text-white'>minimal</h2>
        </div>
        <div id='textFour' className='bg-[#2E2A27] relative z-20'>
          <h2 className='text-[120px] leading-normal text-white'>design</h2>
        </div>
      </div>
    </div>
  )
}

export default Discover