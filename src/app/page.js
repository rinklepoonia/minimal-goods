import NavBar from "@/components/common/NavBar";
import Discover from "@/components/Discover";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <NavBar />
      <Discover/>
      <Discover/>
    </>
  );
}
