import Benefits from "@/components/welcome/benefitsd";

("use client");

import { useData } from "@/hooks/useData";

import Welcome from "@components/welcome/welcome";
import { use } from "react";
import Article from "@/components/Article/Article.tsx";
import TopArticles from "@/components/TopArticles/TopHeadlines.tsx";

function Home() {
  return (
    <div>
      Home page
      <Article />
      {/* Top Articles */}
      <TopArticles />
      {/* Benefits */}
      <Benefits />
    </div>
  );
}
export default Home;
