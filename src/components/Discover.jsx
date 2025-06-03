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
        start: "-25% top",
        end: "bottom top",
        scrub: 1,
        markers: false,
        animation: tl,
        toggleActions: "play none none none",
      })
      tl.to("#textOne", {
        y: 200
      })
        .to("#textTwo", {
          y: 200
        })
        .to("#textThree", {
          y: 200
        })
        .to("#textFour", {
          y: 200
        })
    })
    return () => ctx.revert();
  }, [])
  return (
    <div id='discoverParent' className=' bg-[#2E2A27] flex flex-col justify-center items-center pt-20 mb-[-1px]'>
      <div className='container max-w-[1180px] mx-auto px-4 text-center'>
        <div className='relative overflow-hidden'>
          <div id='textOne' className=''>
            <h2 className='text-[173px] leading-[80%] text-white'>Discover</h2>
          </div>
        </div>
        <div className='relative overflow-hidden'>
          <div id='textTwo' className=''>
            <h2 className='text-[173px] leading-[80%] text-white'>the best in</h2>
          </div>
        </div>
        <div className='relative overflow-hidden'>
          <div id='textThree' className=''>
            <h2 className='text-[173px] leading-[80%] text-white'>minimal</h2>
          </div>
        </div>
        <div className='relative overflow-hidden'>
          <div id='textFour' className=''>
            <h2 className='text-[173px] leading-[80%] text-white'>design</h2>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Discover