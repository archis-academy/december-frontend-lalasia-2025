"use server"

import { useData } from "@/hooks/useData";
import Welcome from "@components/welcome/welcome";
import { use } from "react";

function Home() {

  const { data } = useData({ endpoint: "products" });


  console.log(data);


  return <div>Home page</div>;
}

export default Home;
