import Hero from "./(landing_pages)/_components/Hero";
import About from "./(landing_pages)/_components/About";
import TopCompanies from "./(landing_pages)/_components/TopCompanies";
import Achievement from "./(landing_pages)/_components/Achievement";
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
      <About />
      <TopCompanies />
      <Community />
      <WhyChoose />
      <Achievement />
      <Newsletter />
      <Footer />
    </SmoothScroll>
  );
}
