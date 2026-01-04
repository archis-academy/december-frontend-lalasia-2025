"use server"

import { useData } from "@/hooks/useData";
import Welcome from "@components/welcome/welcome";
import { use } from "react";
import Article from "@/components/Article/Article";

function Home() {

  const { data } = useData({ endpoint: "products" });


  console.log(data);


  return <div>
    Home page
    <Article />
  </div>;
}

export default Home;
