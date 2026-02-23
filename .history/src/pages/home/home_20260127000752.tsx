
import Benefits from "@/components/welcome/benefitsd";


"use client";

import { useData } from "@/hooks/useData";

import Welcome from "@components/welcome/welcome";
import { use } from "react";
import Article from "@/components/Article/Article.tsx";
import Footer from "@/components/Footer/Footer";


function Home() {

  return <div>Home page
  


 
    <Article />
 <Benefits/>
 <Footer/>

  </div>;
}
export default Home;


