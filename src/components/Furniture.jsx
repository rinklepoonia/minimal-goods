"use client";
import { FURNITURE_IMAGES_DATA_LIST, OPTIONS_DATA_LIST } from "@/utils/helper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useLayoutEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);



const Furniture = () => {
    const [bgColor, setBgColor] = useState('#E8E2DA');
    const [textColor, setTextColor] = useState('#000');
    const [displayText, setDisplayText] = useState('furniture');
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Pin the section
            ScrollTrigger.create({
                trigger: "#furniture",
                start: "top top",
                endTrigger: "#footer",
                end: "top bottom",
                pin: true,
                pinSpacing: false,
                pinSpacer: false,
                markers: false,
                onUpdate: (self) => {
                    console.log("Current Progress:", self.progress);
                    // ====blackFurniture
                    if (self.progress > 0.18 && self.progress < 0.1999999) {
                        setDisplayText("Furniture");
                        setBgColor('#2E2A27');
                        setTextColor('#fff');
                        gsap.to("#stickyNav", { backgroundColor: '#2E2A27' });
                        gsap.to("#navLinks", { color: "#fff", }, "<")
                        gsap.to("#logoPath", { fill: "#fff", }, "<")
                        gsap.to("#borderBottom", { borderBottomColor: "#fff", }, "<")
                    }
                    // ===blackdecor
                    else if (self.progress > 0.2 && self.progress < 0.3666666) {
                        setDisplayText("Decor");
                        setBgColor('#2E2A27');
                        setTextColor('#fff');
                        gsap.to("#stickyNav", { backgroundColor: '#2E2A27' });
                        gsap.to("#navLinks", { color: "#fff", }, "<")
                        gsap.to("#logoPath", { fill: "#fff", }, "<")
                        gsap.to("#borderBottom", { borderBottomColor: "#fff", }, "<")
                    }
                    // ==whitedecor
                    else if (self.progress > 0.3666666 && self.progress < 0.444444) {
                        setDisplayText("Decor");
                        setBgColor('#E8E2DA');
                        setTextColor('#000');
                        gsap.to("#stickyNav", { backgroundColor: '#E8E2DA' });
                        gsap.to("#navLinks", { color: "#000", }, "<")
                        gsap.to("#logoPath", { fill: "#000", }, "<")
                        gsap.to("#borderBottom", { borderBottomColor: "#000", }, "<")
                    }
                    // ===whiteOffice
                    else if (self.progress > 0.444444 && self.progress < 0.59999999) {
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
                    else if (self.progress > 0.6 && self.progress < 0.79999999) {
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
                    else if (self.progress > 0.8 && self.progress < 0.8999999) {
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
                    else if (self.progress >= 0.8999999) {
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
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div style={{ background: bgColor, color: textColor, }} className=" bg-[#E8E2DA] flex flex-col justify-end transition-all ease-linear duration-300 relative z-[2]">
                {/* <p className="xl:text-[250px] text-[100px] font-bold  !text-start absolute top-[10%] left-0">
                    {displayText}
                </p> */}
                <div style={{ background: bgColor }} id="furniture" className="h-screen w-screen flex  justify-start items-end  px-10">
                    <p className="xl:text-[250px] text-[100px] font-bold  !text-start">
                        {displayText}
                    </p>
                </div>
                {FURNITURE_IMAGES_DATA_LIST.map((group, index) => (
                    <div
                        key={index}
                        className={`flex flex-row justify-start relative z-2 px-10  `}
                    >
                        {group.map((item, i) => (
                            <div key={i} className={item.className}>
                                <div id="triggerImg" className={`${item.imageHeight} `}>
                                    <Image
                                        className="parallax-img object-cover w-full h-full"
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