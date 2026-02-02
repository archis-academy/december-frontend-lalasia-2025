import React, { useState } from 'react'
import type { ArticleCardProps } from "@/types/types";
import { useData } from "@/hooks/useData";
import style from "./TrendingTopics.module.scss";

const TrendingTopicsSection = () => {
  const { data, isLoading, error } = useData<ArticleCardProps[]>({
    endpoint: "articles",
  });

  const [activeTab, setactiveTab] = useState("All");

  const categories = React.useMemo(() => {
    if (!data) return [];
    const uniqueCategories = Array.from(
      new Set(data.map((item) => item.category))
    );
    return ["All", ...uniqueCategories];
  }, [data]);

  console.log("categories", categories);

  if (isLoading) return <div>Yükleniyor…</div>;
  if (error) return <div>Hata: {error}</div>;

  return (
    <div>
      <p className={style.TrendingTopicsTitle}>Trending Topics</p>
      <h3 className={style.PopularLastWeek}>Popular last week</h3>

      <div className={style.buttonContainer}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setactiveTab(category)}
            className={`${style.button} ${
              activeTab === category ? style.activeTab : style.inactiveTab
            }`}
          >
            {category}
          </button>
        ))}
        <button className={style.exploreButton}>Filter</button>
      </div>

      <div className={style.articlesContainer}>
        {data
          ?.filter((article) =>
            activeTab === "All" ? true : article.category === activeTab
          )
          .map((article) => (
            <div key={article.id} className={style.articleCard}>
              <img
                src={article.image}
                alt={article.title}
                className={style.articleImage}
              />
              <h4 className={style.articleTitle}>{article.title}</h4>
              <p className={style.articleContext}>{article.context}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrendingTopicsSection;
