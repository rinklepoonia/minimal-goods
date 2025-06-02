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
        end: "+1000",
        scrub: 1,
        markers: false,
        pin: true,
        pinSpacing: false,
        pinSpacer: false,
        animation: tl,
        duration: 10,
        toggleActions: "play none none none",
      })
      tl.to("#textOne", {
        y: 300
      })
      tl.to("#textTwo", {
        y: 450
      })
      tl.to("#textThree", {
        y: 350
      })
      tl.to("#textFour", {
        y: 250
      })
    })
    return () => ctx.revert();
  }, [])
  return (
    <div id='discoverParent' className=' bg-[#2E2A27] flex flex-col justify-center items-center pt-2 min-h-screen pb-40'>
      <div className='container max-w-[1380px] mx-auto px-3 text-center'>
        <div>
          <h2 id='textOne' className='text-[120px] leading-[128%] text-white'>Discover</h2>
        </div>
        <div className='bg-[#2E2A27] relative z-10'>
          <h2 id='textTwo' className='text-[120px] leading-[128%] text-white'>the best in</h2>
        </div>
        <div className='bg-[#2E2A27] relative z-10'>
          <h2 id='textThree' className='text-[120px] leading-[128%] text-white'>minimal</h2>
        </div>
        <div id='textFour' className='bg-[#2E2A27] relative z-20'>
          <h2 className='text-[120px] leading-[128%] text-white'>design</h2>
        </div>
        <div className='h-[300px] bg-[#2E2A27] z-20 relative'></div>
      </div>
    </div>
  )
}

export default Discover