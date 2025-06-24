"use client";
import { FURNITURE_IMAGES_DATA_LIST, OPTIONS_DATA_LIST } from "@/utils/helper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useLayoutEffect, useState, useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Furniture = () => {
    const [bgColor, setBgColor] = useState('#E8E2DA');
    const [textColor, setTextColor] = useState('#000');
    const [displayText, setDisplayText] = useState('furniture');
    const textRef = useRef(null);

    // Function to get responsive progress thresholds
    const getResponsiveProgress = () => {
        const isMobile = window.innerWidth < 540;

        if (isMobile) {
            return {
                blackFurniture: { min: 0.15, max: 0.28 },
                blackDecor: { min: 0.28, max: 0.35 },
                whiteDecor: { min: 0.35, max: 0.52 },
                whiteOffice: { min: 0.52, max: 0.53 },
                blackOffice: { min: 0.53, max: 0.72 },
                blackTech: { min: 0.72, max: 0.82 },
                whiteTech: { min: 0.82, max: 1.0 }
            };
        } else {
            return {
                blackFurniture: { min: 0.18, max: 0.1999999 },
                blackDecor: { min: 0.2, max: 0.3666666 },
                whiteDecor: { min: 0.3666666, max: 0.444444 },
                whiteOffice: { min: 0.444444, max: 0.59999999 },
                blackOffice: { min: 0.6, max: 0.79999999 },
                blackTech: { min: 0.8, max: 0.8999999 },
                whiteTech: { min: 0.8999999, max: 1.0 }
            };
        }
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Pin the section
            const scrollTrigger = ScrollTrigger.create({
                trigger: "#furniture",
                start: "top top",
                endTrigger: "#footer",
                end: "top bottom",
                pin: true,
                pinSpacing: false,
                pinSpacer: false,
                markers: false,
                duration: 2,
                ease: "power2.inOut",
                delay: "1",
                onUpdate: (self) => {
                    console.log("Current Progress:", self.progress);
                    const progressThresholds = getResponsiveProgress();

                    // ====blackFurniture
                    if (self.progress > progressThresholds.blackFurniture.min && self.progress < progressThresholds.blackFurniture.max) {
                        setDisplayText("Furniture");
                        setBgColor('#2E2A27');
                        setTextColor('#fff');
                        gsap.to("#stickyNav", { backgroundColor: '#2E2A27' });
                        gsap.to("#navLinks", { color: "#fff", }, "<")
                        gsap.to("#logoPath", { fill: "#fff", }, "<")
                        gsap.to("#borderBottom", { borderBottomColor: "#fff", }, "<")
                    }
                    // ===blackdecor
                    else if (self.progress > progressThresholds.blackDecor.min && self.progress < progressThresholds.blackDecor.max) {
                        setDisplayText("Decor");
                        setBgColor('#2E2A27');
                        setTextColor('#fff');
                        gsap.to("#stickyNav", { backgroundColor: '#2E2A27' });
                        gsap.to("#navLinks", { color: "#fff", }, "<")
                        gsap.to("#logoPath", { fill: "#fff", }, "<")
                        gsap.to("#borderBottom", { borderBottomColor: "#fff", }, "<")
                    }
                    // ==whitedecor
                    else if (self.progress > progressThresholds.whiteDecor.min && self.progress < progressThresholds.whiteDecor.max) {
                        setDisplayText("Decor");
                        setBgColor('#E8E2DA');
                        setTextColor('#000');
                        gsap.to("#stickyNav", { backgroundColor: '#E8E2DA' });
                        gsap.to("#navLinks", { color: "#000", }, "<")
                        gsap.to("#logoPath", { fill: "#000", }, "<")
                        gsap.to("#borderBottom", { borderBottomColor: "#000", }, "<")
                    }
                    // ===whiteOffice
                    else if (self.progress > progressThresholds.whiteOffice.min && self.progress < progressThresholds.whiteOffice.max) {
                        setDisplayText("Office");
                        setBgColor('#E8E2DA');
                        setTextColor('#000');
                        gsap.to("#stickyNav", { backgroundColor: '#E8E2DA' });
                        gsap.to("#stickyNav", { backgroundColor: '#E8E2DA' });
                        gsap.to("#navLinks", { color: "#000", }, "<")
                        gsap.to("#logoPath", { fill: "#000", }, "<")
                        gsap.to("#borderBottom", { borderBottomColor: "#000", }, "<")
                    }
                    // ===blackOffice
                    else if (self.progress > progressThresholds.blackOffice.min && self.progress < progressThresholds.blackOffice.max) {
                        setDisplayText("Office");
                        setBgColor('#2E2A27');
                        setTextColor('#fff');
                        gsap.to("#stickyNav", { backgroundColor: '#2E2A27' });
                        gsap.to("#stickyNav", { backgroundColor: '#2E2A27' });
                        gsap.to("#navLinks", { color: "#fff", }, "<")
                        gsap.to("#logoPath", { fill: "#fff", }, "<")
                        gsap.to("#borderBottom", { borderBottomColor: "#fff", }, "<")
                    }
                    // ======blackTech
                    else if (self.progress > progressThresholds.blackTech.min && self.progress < progressThresholds.blackTech.max) {
                        setDisplayText("Tech");
                        setBgColor('#2E2A27');
                        setTextColor('#fff');
                        gsap.to("#stickyNav", { backgroundColor: '#2E2A27' });
                        gsap.to("#stickyNav", { backgroundColor: '#2E2A27' });
                        gsap.to("#stickyNav", { backgroundColor: '#2E2A27' });
                        gsap.to("#navLinks", { color: "#fff", }, "<")
                        gsap.to("#logoPath", { fill: "#fff", }, "<")
                        gsap.to("#borderBottom", { borderBottomColor: "#fff", }, "<")
                    }
                    // whiteTech
                    else if (self.progress >= progressThresholds.whiteTech.min) {
                        setDisplayText("Tech");
                        setBgColor('#E8E2DA');
                        setTextColor('#000');
                        gsap.to("#stickyNav", { backgroundColor: '#E8E2DA' });
                        gsap.to("#stickyNav", { backgroundColor: '#E8E2DA' });
                        gsap.to("#navLinks", { color: "#000", }, "<")
                        gsap.to("#logoPath", { fill: "#000", }, "<")
                        gsap.to("#borderBottom", { borderBottomColor: "#000", }, "<")
                    }
                    else {
                        setDisplayText("Furniture");
                        setBgColor('#E8E2DA');
                        setTextColor('#000');
                        gsap.to("#stickyNav", { backgroundColor: '#E8E2DA' });
                        gsap.to("#stickyNav", { backgroundColor: '#E8E2DA' });
                        gsap.to("#navLinks", { color: "#000", }, "<")
                        gsap.to("#logoPath", { fill: "#000", }, "<")
                        gsap.to("#borderBottom", { borderBottomColor: "#000", }, "<")
                    }
                },
            });

            // Handle resize events to update ScrollTrigger
            const handleResize = () => {
                scrollTrigger.refresh();
            };

            window.addEventListener('resize', handleResize);

            // Parallax effect for images
            const images = document.querySelectorAll('.parallax-img');
            images.forEach((img, index) => {
                gsap.to(img, {
                    yPercent: -100,
                    ease: "linear",
                    scrollTrigger: {
                        trigger: img,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 5,
                        id: `${index + 1}th image`,
                        invalidateOnRefresh: true,
                        markers: false,
                    }
                });
            });

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        });

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (textRef.current) {
            gsap.fromTo(
                textRef.current,
                { opacity: 0, color: '#ff' },
                { opacity: 1, color: textColor, duration: 0.7 }
            );
        }
    }, [displayText, textColor]);

    return (
        <>
            <div style={{ background: bgColor, color: textColor, }} className=" bg-[#E8E2DA] flex flex-col justify-end transition-all ease-linear duration-300 relative z-[2]">
                <div style={{ background: bgColor }} id="furniture" className="h-screen w-screen flex  justify-start items-end  lg:px-10 px-4">
                    <p
                        ref={textRef}
                        className="xl:text-[250px] sm:text-[100px] text-[70px] font-bold  !text-start"
                        style={{ willChange: 'opacity, transform, color' }}
                    >
                        {displayText}
                    </p>
                </div>
                {FURNITURE_IMAGES_DATA_LIST.map((group, index) => (
                    <div
                        key={index}
                        className={`flex flex-row lg:justify-start justify-between relative z-2 sm:px-10 px-4  max-lg:mt-10`}
                    >
                        {group.map((item, i) => (
                            <div key={i} className={item.className}>
                                <div id="triggerImg" className={`${item.imageHeight} `}>
                                    <Image
                                        className="parallax-img object-cover w-full lg:h-full max-lg:max-w-full"
                                        width={item.width}
                                        height={item.height}
                                        src={item.src}
                                        alt={item.alt}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Furniture;