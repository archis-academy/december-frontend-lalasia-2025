import React from "react";
import "./SimilarArticles.scss";
import { Article } from "../../types/article";
import ArticleCard from "../ArticleCard/ArticleCard";

interface SimilarArticlesProps {
  currentArticle: Article;
  articles: Article[];
}

const SimilarArticles: React.FC<SimilarArticlesProps> = ({
  currentArticle,
  articles,
}) => {
  const similarArticles = articles
    .filter(
      (article) =>
        article.category === currentArticle.category &&
        article.id !== currentArticle.id
    )
    .slice(0, 3); 

  if (similarArticles.length === 0) return null;

  return (
    <section className="similar-articles">
      <div className="container">
        <p className="similar-articles__subtitle">Similar Topics</p>
        <h2 className="similar-articles__title">
          Maybe you're interested
        </h2>

        <div className="similar-articles__grid">
          {similarArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarArticles;