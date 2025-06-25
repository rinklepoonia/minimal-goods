import Footer from "@/components/common/Footer";
import FooterBootom from "@/components/common/FooterBootom";
import NavBar from "@/components/common/NavBar";
import Discover from "@/components/Discover";
import Furniture from "@/components/Furniture";
import ManyOptions from "@/components/ManyOptions";
import SectionTwo from "@/components/SectionTwo";
import ZoomImageSection from "@/components/ZoomImageSection";
import Image from "next/image";

export default function Home() {
  return (

    <div className="overflow-x-clip">
      <NavBar />
      <Discover />
      <ZoomImageSection />
      <ManyOptions />
      <Furniture />
      <Footer />
      <FooterBootom/>
    </div>

  );
}
