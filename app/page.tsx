import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
  <>
  <HeroSection />
  <FeaturesSection />
  <Testimonials />
  </>
  );
}
