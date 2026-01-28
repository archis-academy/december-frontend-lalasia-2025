
import Benefits from "@/components/welcome/benefitsd";

"use client";

import { useData } from "@/hooks/useData";

import Welcome from "@components/welcome/welcome";
import { use } from "react";
import Article from "@/components/Article/Article.tsx";
import PopularProducts from "@/components/PopularProducts/PopularProducts";


function Home() {

  return <div>Home page




    <Article />
    <Benefits />
    <PopularProducts />

  </div>;
}
export default Home;


