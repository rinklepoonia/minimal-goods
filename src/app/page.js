import NavBar from "@/components/common/NavBar";
import Discover from "@/components/Discover";
import Hero from "@/components/Hero";
import ManyOptions from "@/components/ManyOptions";
import SectionTwo from "@/components/SectionTwo";
import ZoomImageSection from "@/components/ZoomImageSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <NavBar />
      <Discover />
      <ZoomImageSection />
      {/* <ManyOptions/>  */}
      {/* <SectionTwo /> */}
    </>
  );
}
