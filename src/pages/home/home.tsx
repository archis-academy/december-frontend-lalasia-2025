import Welcome from "@components/welcome/welcome";
import ArticleCard from "@/components/Article/ArticleCard";
import { articleCards } from "@/constants/constants";

function Home() {
  return <div>
    {articleCards.map((card, index) => <ArticleCard key={index} {...card} />)}
  </div>;
}

export default Home;
