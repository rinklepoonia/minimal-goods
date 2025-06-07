"use client";
import { OPTIONS_DATA_LIST } from "@/utils/helper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useLayoutEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const imageGroups = [
    [
        { src: "/assets/images/webp/white-window.webp", width: 334, height: 438, className: "w-[24%] mr-[6.25%] mt-0 h-[438px]", imageHeight: "h-[438px]", alt: "white-window" },
        { src: "/assets/images/webp/study-table.webp", width: 248, height: 325, className: "w-[19%] mr-[6.25%] mt-[20%] h-[325px]", imageHeight: "h-[325px]", alt: "study-table" },
        { src: "/assets/images/webp/white-cahir.webp", width: 161, height: 212, className: "w-[12%] mt-[4%] h-[212px]", imageHeight: "h-[212px]", alt: "white-chair" },
        { src: "/assets/images/webp/single-chair.webp", width: 420, height: 551, className: "w-[31%] mt-[24%] max-h-[551px]", imageHeight: "max-h-[551px]", alt: "single-chair" },
    ],
    [
        { src: "/assets/images/webp/white-masrum.webp", width: 334, height: 438, className: "w-[24%] mr-[6.25%] mt-0", imageHeight: "h-[438px]", alt: "white-masrum" },
        { src: "/assets/images/webp/white-lalten.webp", width: 248, height: 325, className: "w-[19%] mr-[6.25%] mt-[20%]", imageHeight: "h-[325px]", alt: "white-lalten" },
        { src: "/assets/images/webp/night-view.webp", width: 161, height: 212, className: "w-[12%] mt-[4%]", imageHeight: "h-[212px]", alt: "night-view" },
        { src: "/assets/images/webp/white-big-bulb.webp", width: 420, height: 551, className: "w-[31%] mt-[24%]", imageHeight: "h-[551px]", alt: "white-big-bulb" },
    ],
    [
        { src: "/assets/images/webp/library-bulb.webp", width: 420, height: 551, className: "w-[31%] mr-[6.25%] mt-[-13%]", imageHeight: "h-[551px]", alt: "library-bulb" },
        { src: "/assets/images/webp/green-plant.webp", width: 334, height: 438, className: "w-[25%] mr-[25%] mt-[-8%]", imageHeight: "h-[438px]", alt: "green-plant" },
    ],
    [
        { src: "/assets/images/webp/office-light.webp", width: 334, height: 438, className: "w-[24%] mr-[6.25%] mt-0", imageHeight: "h-[438px]", alt: "office-light" },
        { src: "/assets/images/webp/two-chairs.webp", width: 248, height: 325, className: "w-[19%] mr-[6.25%] mt-[20%]", imageHeight: "h-[325px]", alt: "two-chair" },
        { src: "/assets/images/webp/gold-biskuts.webp", width: 161, height: 212, className: "w-[12%] mt-[4%]", imageHeight: "h-[212px]", alt: "gold-biskuts" },
        { src: "/assets/images/webp/chair-table-laptop.webp", width: 420, height: 551, className: "w-[31%] mt-[24%]", imageHeight: "h-[551px]", alt: "chair-table-laptop" },
    ],
    [
        { src: "/assets/images/webp/less-more.webp", width: 334, height: 438, className: "w-[24%] mr-[6.25%] mt-0", imageHeight: "h-[438px]", alt: "less-more" },
        { src: "/assets/images/webp/tech-5.webp", width: 248, height: 325, className: "w-[19%] mr-[6.25%] mt-[20%]", imageHeight: "h-[325px]", alt: "tech-5" },
        { src: "/assets/images/webp/camera.webp", width: 161, height: 212, className: "w-[12%] mt-[4%]", imageHeight: "h-[212px]", alt: "camera" },
        { src: "/assets/images/webp/digital-watch.webp", width: 420, height: 551, className: "w-[31%] mt-[24%]", imageHeight: "h-[551px]", alt: "digital-watch" },
    ],
    [
        { src: "/assets/images/webp/cycle.webp", width: 420, height: 551, className: "w-[31%] mr-[6.25%] mt-[-13%]", imageHeight: "h-[551px]", alt: "cycle" },
        { src: "/assets/images/webp/bony.webp", width: 334, height: 438, className: "w-[25%] mr-5 mt-[-8%]", imageHeight: "h-[438px]", alt: "bony" },
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
                    }
                    // ===blackdecor
                    else if (self.progress > 0.2 && self.progress < 0.3666666) {
                        setDisplayText("Decor");
                        setBgColor('#2E2A27');
                        setTextColor('#fff');
                    }
                    // ==whitedecor
                    else if (self.progress > 0.3666666 && self.progress < 0.444444) {
                        setDisplayText("Decor");
                        setBgColor('#E8E2DA');
                        setTextColor('#000');
                    }
                    // ===whiteOffice
                    else if (self.progress > 0.444444 && self.progress < 0.59999999) {
                        setDisplayText("Office");
                        setBgColor('#E8E2DA');
                        setTextColor('#000');

                    }
                    // ===blackOffice
                    else if (self.progress > 0.6 && self.progress < 0.79999999) {
                        setDisplayText("Office");
                        setBgColor('#2E2A27');
                        setTextColor('#fff');
                    }
                    // ======blackTech
                    else if (self.progress > 0.8 && self.progress < 0.8999999) {
                        setDisplayText("Tech");
                        setBgColor('#2E2A27');
                        setTextColor('#fff');
                    }
                    // whiteTech
                    else if (self.progress >= 0.8999999) {
                        setDisplayText("Tech");
                        setBgColor('#E8E2DA');
                        setTextColor('#000');
                    }
                    else {
                        setDisplayText("Furniture");
                        setBgColor('#E8E2DA');
                        setTextColor('#000');
                    }
                },
            });
            // gsap.fromTo("#manyOption", {
            //     y: 0
            // }, {
            //     y: -600
            // })
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
                        markers: true,
                    }
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div style={{ background: bgColor, color: textColor, }} className=" bg-[#E8E2DA] flex flex-col justify-end transition-all ease-linear duration-300 relative z-[2]">
                <div style={{ background: bgColor }} id="furniture" className="h-screen w-screen flex flex-col justify-start items-end  px-10">
                    <div id="manyOption" className='flex items-center gap-2.5 flex-wrap justify-center mt-80 max-w-[1200px] mx-auto'>
                        {OPTIONS_DATA_LIST.map((obj, i) => (
                            <div key={i}>
                                <p className='text-[#2e2a27] text-6xl leading-[70%] font-normal border border-solid border-[#2E2A27]/35 rounded-full w-fit px-5 py-3'>{obj}</p>
                            </div>
                        ))}
                    </div>
                    <p className="xl:text-[250px] text-[100px] font-bold  !text-start">
                        {displayText}
                    </p>
                </div>
                {imageGroups.map((group, index) => (
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