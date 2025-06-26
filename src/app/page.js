import Footer from "@/components/common/Footer";
import FooterBootom from "@/components/common/FooterBootom";
import NavBar from "@/components/common/NavBar";
import UseLenis from "@/components/common/UseLenis";
import Discover from "@/components/Discover";
import Furniture from "@/components/Furniture";
import ManyOptions from "@/components/ManyOptions";
import ZoomImageSection from "@/components/ZoomImageSection";

export default function Home() {
  return (
    <div className="overflow-x-clip">
      <UseLenis />
      <NavBar />
      <Discover />
      <ZoomImageSection />
      <ManyOptions />
      <Furniture />
      <Footer />
      <FooterBootom />
    </div>
  );
}
