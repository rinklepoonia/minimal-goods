'use client'

import BackgroundScene from '@/components/background-animation/BackgroundScene'
import SmoothScroll from '@/components/background-animation/SmoothScroll'
import Hero from '@/components/background-animation/Hero'
import ContentSection from '@/components/background-animation/ContentSection'
import ParallaxText from '@/components/background-animation/ParallaxText'
import MouseFollower from '@/components/background-animation/MouseFollower'
import LoadingScreen from '@/components/background-animation/LoadingScreen'
import AnimatedBackground from '@/components/background-animation/AnimatedBackground'

export default function Page() {
  const sections = [
    {
      title: 'Cinematic Motion',
      description: 'Experience fluid animations powered by GSAP and ScrollTrigger, creating seamless transitions that respond to every scroll and interaction.'
    },
    {
      title: 'WebGL Excellence',
      description: 'Immerse yourself in a 3D environment built with Three.js and React Three Fiber, featuring dynamic lighting and real-time rendering.'
    },
    {
      title: 'Smooth Interactions',
      description: 'Lenis smooth scrolling combined with mouse-reactive elements creates an intuitive and premium user experience.'
    },
    {
      title: 'Performance First',
      description: 'Optimized for all devices with responsive design, efficient rendering, and smooth 60fps animations across desktop and mobile.'
    }
  ]

  return (
    <>
      <LoadingScreen />
      <AnimatedBackground />
      <SmoothScroll>
        <div className="relative">
          <BackgroundScene />
          <MouseFollower />

          <main className="relative z-10">
            <Hero />

            <ParallaxText text="PREMIUM • DESIGN • EXPERIENCE •" speed={1} />

            {sections.map((section, index) => (
              <ContentSection
                key={index}
                title={section.title}
                description={section.description}
                index={index + 1}
              />
            ))}

            <ParallaxText text="CRAFTED • WITH • PASSION •" speed={-1} />

            {/* Footer */}
            <footer className="relative min-h-[50vh] flex items-center justify-center px-6">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-white mb-4">
                  Ready to Create?
                </h3>
                <p className="text-gray-400">
                  Premium animated experiences for modern web
                </p>
              </div>
            </footer>
          </main>
        </div>
      </SmoothScroll>
    </>
  )
}