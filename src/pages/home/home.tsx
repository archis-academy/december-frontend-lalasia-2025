import Benefits from "@/components/welcome/benefitsd";
("use client");
import Hero from "@/components/HomeHeroSection/HomeHeroSection";
import Article from "@/components/Article/Article.tsx";
import Footer from "@/components/Footer/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Article />
      <Benefits />
      <Footer />
    </div>
  );
}
export default Home;
