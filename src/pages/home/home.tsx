
import Benefits from "@/components/welcome/benefitsd";
import Hero from "@/components/HomeHeroSection/HomeHeroSection";
import PopularProducts from "@/components/PopularProducts/PopularProducts";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import Article from "@/components/Article/Article.tsx";
import AboutUsHero from "@/components/AboutUsHero/AboutUsHero";

function Home() {

  return (
    <>
    <Hero />
    <Benefits />
    <PopularProducts />
    <TestimonialsSection />
    <Article />
    <AboutUsHero/>

  
  </>
  );
}

export default Home;
