import HeroSection from "@/components/Hero";
import BrowseSection from "@/components/Browse";
import ProductSection from "@/components/Product";
import InspirationSection from "@/components/Inspiration";
import Setup from "@/components/Setup";
import NavBar from "@/components/NavBar";
import InfoSection from "@/components/Info";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="font-sans text-gray-600">
      {/* Header */}
      <NavBar />
      {/* HeroSection */}
      <HeroSection />
      {/* browse section */}
      <BrowseSection />
      {/* product section */}
      <ProductSection />
      {/* inspiration section */}
      <InspirationSection />
      {/* set up */}
      <Setup />
      {/* info */}
      <InfoSection />
      {/* footer */}
      <Footer />
    </div>
  );
}
