"use client";

import { useData } from "@/hooks/useData";
import Welcome from "@components/welcome/welcome";
import { use } from "react";
import Article from "@/components/Article/Article";
import ProductList from "@/components/ProductList/ProductList";

function Home() {

  return <div>
    Home page
    <Article />
    <ProductList />
  </div>;
}

export default Home;
