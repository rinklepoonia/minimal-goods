"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useLayoutEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const imageGroups = [
    [
        { src: "/assets/images/webp/white-window.webp", width: 334, height: 438, className: "w-[24%] mr-[9%] mt-0", imageHeight: "h-[438px]", alt: "white-window" },
        { src: "/assets/images/webp/study-table.webp", width: 248, height: 325, className: "w-[19%] mr-5 mt-[20%]", imageHeight: "h-[325px]", alt: "study-table" },
        { src: "/assets/images/webp/white-cahir.webp", width: 161, height: 212, className: "w-[12%] mt-4", imageHeight: "h-[212px]", alt: "white-chair" },
        { src: "/assets/images/webp/single-chair.webp", width: 420, height: 551, className: "w-[31%] mt-[24%]", imageHeight: "h-[551px]", alt: "single-chair" },
    ],
    [
        { src: "/assets/images/webp/white-masrum.webp", width: 334, height: 438, className: "w-[24%] mr-[9%] mt-0", imageHeight: "h-[438px]", alt: "white-masrum" },
        { src: "/assets/images/webp/white-lalten.webp", width: 248, height: 325, className: "w-[19%] mr-5 mt-[20%]", imageHeight: "h-[325px]", alt: "white-lalten" },
        { src: "/assets/images/webp/night-view.webp", width: 161, height: 212, className: "w-[12%] mt-4", imageHeight: "h-[212px]", alt: "night-view" },
        { src: "/assets/images/webp/white-big-bulb.webp", width: 420, height: 551, className: "w-[31%] mt-[24%]", imageHeight: "h-[551px]", alt: "white-big-bulb" },
    ],
    [
        { src: "/assets/images/webp/library-bulb.webp", width: 420, height: 551, className: "w-[31%] mr-[6%] mt-[-13%]", imageHeight: "h-[551px]", alt: "library-bulb" },
        { src: "/assets/images/webp/green-plant.webp", width: 334, height: 438, className: "w-[25%] mr-5 mt-[5%]", imageHeight: "h-[438px]", alt: "green-plant" },
    ],
    [
        { src: "/assets/images/webp/office-light.webp", width: 334, height: 438, className: "w-[24%] mr-[9%] mt-0", imageHeight: "h-[438px]", alt: "office-light" },
        { src: "/assets/images/webp/two-chairs.webp", width: 248, height: 325, className: "w-[19%] mr-5 mt-[20%]", imageHeight: "h-[325px]", alt: "two-chair" },
        { src: "/assets/images/webp/gold-biskuts.webp", width: 161, height: 212, className: "w-[12%] mt-4", imageHeight: "h-[212px]", alt: "gold-biskuts" },
        { src: "/assets/images/webp/chair-table-laptop.webp", width: 420, height: 551, className: "w-[31%] mt-[24%]", imageHeight: "h-[551px]", alt: "chair-table-laptop" },
    ],
    [
        { src: "/assets/images/webp/less-more.webp", width: 334, height: 438, className: "w-[24%] mr-[9%] mt-0", imageHeight: "h-[438px]", alt: "less-more" },
        { src: "/assets/images/webp/tech-5.webp", width: 248, height: 325, className: "w-[19%] mr-5 mt-[20%]", imageHeight: "h-[325px]", alt: "tech-5" },
        { src: "/assets/images/webp/camera.webp", width: 161, height: 212, className: "w-[12%] mt-4", imageHeight: "h-[212px]", alt: "camera" },
        { src: "/assets/images/webp/digital-watch.webp", width: 420, height: 551, className: "w-[31%] mt-[24%]", imageHeight: "h-[551px]", alt: "digital-watch" },
    ],
    [
        { src: "/assets/images/webp/cycle.webp", width: 420, height: 551, className: "w-[31%] mr-[6%] mt-[-13%]", imageHeight: "h-[551px]", alt: "cycle" },
        { src: "/assets/images/webp/bony.webp", width: 334, height: 438, className: "w-[25%] mr-5 mt-[5%]", imageHeight: "h-[438px]", alt: "bony" },
    ],
];

const Furniture = () => {
    const [bgColor, setBgColor] = useState('#fff');
    const [textColor, setTextColor] = useState('#000');
    const [displayText, setDisplayText] = useState('');
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Pin the section
            ScrollTrigger.create({
                trigger: "#furniture",
                start: "top top",
                endTrigger: "#next",
                end: "top top",
                pin: true,
                pinSpacing: false,
                pinSpacer: false,
                markers: false, // Set to true for debugging
                onUpdate: (self) => {
                    console.log("Current Progress:", self.progress);
                    if (self.progress > 0.15 && self.progress < 0.16666666) {
                        setDisplayText("Furniture");
                        setBgColor('#2E2A27');
                        setTextColor('#fff');
                    }
                    // ===blackdecor
                    else if (self.progress > 0.17 && self.progress < 0.29999999) {
                        setDisplayText("Decor");
                        setBgColor('#2E2A27');
                        setTextColor('#fff');
                    }
                    // ==whitedecor
                    else if (self.progress > 0.3 && self.progress < 0.34444444) {
                        setDisplayText("Decor");
                        setBgColor('#E8E2DA');
                        setTextColor('#000');
                    }
                    // ===blackOffice
                    else if (self.progress > 0.35 && self.progress < 0.49999999) {
                        setDisplayText("Office");
                        setBgColor('#2E2A27');
                        setTextColor('#fff');
                    }
                    // ===whiteOffice
                    else if (self.progress > 0.5 && self.progress < 0.79999999) {
                        setDisplayText("Office");
                        setBgColor('#E8E2DA');
                        setTextColor('#000');
                    }
                    else if (self.progress > 0.8) {
                        setDisplayText("Tech");
                        setBgColor('#010101');
                        setTextColor('#fff');
                    }
                    else {
                        setDisplayText("Furniture");
                        setBgColor('#E8E2DA');
                        setTextColor('#000');
                    }
                },
            });
            // Parallax effect for images
            const images = document.querySelectorAll('.parallax-img');

            images.forEach((img, index) => {
                gsap.to(img, {
                    yPercent: -100, // Move up by 12px at most
                    ease: "linear",
                    scrollTrigger: {
                        trigger: img,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 5, // Lower values = smoother, more responsive
                        id: `${index + 1}th image`,
                        invalidateOnRefresh: true,
                        markers: true, // Set to true for debugging
                        pinSpacing: false,
                        pinSpacer: false,
                    }
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div>
            <div style={{ background: bgColor, color: textColor, }} className=" bg-[#E8E2DA] flex flex-col justify-end transition-all ease-linear duration-300">
                <div id="furniture" className="h-screen w-screen flex justify-start items-end  px-10">
                    <p className="xl:text-[250px] text-[100px] font-bold  text-start">
                        {displayText}
                    </p>
                </div>
                {imageGroups.map((group, index) => (
                    <div
                        key={index}
                        className={`flex flex-row justify-start relative z-2 px-10  ${index === 2 || index === 5 ? "mt-[-13%]" : "mt-32"
                            }`}
                    >
                        {group.map((item, i) => (
                            <div key={i} className={item.className}>
                                <div className={`${item.imageHeight} `}>
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
            <div id="next" className="min-h-screen"></div>
        </div>
    );
};

export default Furniture;