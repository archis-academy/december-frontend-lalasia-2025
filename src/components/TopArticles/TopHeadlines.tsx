import React from "react";
import "./TopArticles.scss";
import ArticleCard from "../ArticleCard/ArticleCard";

export interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  category: string;
}
  
interface TopArticlesProps {
  articles: Article[];
}

const TopArticles: React.FC<TopArticlesProps> = ({ articles }) => {
  return (
    <section className="top-articles">
      <div className="top-articles__container">
        <div className="top-articles__header">
          <span className="top-articles__label">Daily News</span>
          <h2 className="top-articles__title">Today top headlines</h2>
        </div>

        <div className="top-articles__grid">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopArticles;