import React from "react";
import "./TopHeadlines.scss";
import ArticleCard from "../Article/ArticleCard";
import { useData } from "@/hooks/useData";

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  context: string;
  image: string;
  authorId: number;
  category: string;
}

const TopArticles = () => {
  const { data: articles } = useData<Article[]>({ endpoint: "articles" });

  return (
    <section className="top-articles">
      <div className="top-articles__container">
        <div className="top-articles__header">
          <span className="top-articles__label">Daily News</span>
          <h2 className="top-articles__title">Today top headlines</h2>
        </div>

        <div className="top-articles__grid">
          {articles &&
            articles
              .slice(0, 4)
              .map((article: Article) => (
                <ArticleCard
                  key={article.id}
                  image={article.image}
                  title={article.title}
                  context={article.context}
                  category={article.category}
                  autherId={article.authorId}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default TopArticles;
