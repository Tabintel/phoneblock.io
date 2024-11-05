import Hero from "./(landing_pages)/_components/Hero";
import Community from "./(landing_pages)/_components/Community";
import WhyChoose from "./(landing_pages)/_components/WhyChoose";
import Newsletter from "../components/common/Newsletter";
// Newsletter
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SmoothScroll from "@/constants/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <Hero />
      <Community />
     
      <WhyChoose />
      <Newsletter />
      <Footer />
    </SmoothScroll>
  );
}
