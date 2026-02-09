import React, { useState, useMemo } from 'react';
import type { ArticleCardProps } from "@/types/types";
import { useData } from "@/hooks/useData";
import style from "./TrendingTopics.module.scss";

const TrendingTopicsSection = () => {
  const { data, isLoading, error } = useData<ArticleCardProps[]>({
    endpoint: "articles",
  });

  const [activeTab, setActiveTab] = useState("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const categories = useMemo(() => {
    if (!data) return [];
    const uniqueCategories = Array.from(new Set(data.map((item) => item.category)));
    return ["All", ...uniqueCategories];
  }, [data]);

  const filteredSortedData = useMemo(() => {
    if (!data) return [];

    // Önce filtrele
    let filtered = data.filter(article => activeTab === "All" ? true : article.category === activeTab);

    // Sonra sıralama uygula
    if (sortOrder === "asc") {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "desc") {
      filtered = [...filtered].sort((a, b) => b.title.localeCompare(a.title));
    }

    return filtered;
  }, [data, activeTab, sortOrder]);

  if (isLoading) return <div>Yükleniyor…</div>;
  if (error) return <div>Hata: {error}</div>;

  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <p className={style.TrendingTopicsTitle}>Trending Topics</p>
        <h3 className={style.PopularLastWeek}>Popular last week</h3>

        <div className={style.buttonContainer}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`${style.button} ${activeTab === category ? style.activeTab : style.inactiveTab}`}
            >
              {category}
            </button>
          ))}

          {/* Sıralama butonu */}
          <button
            className={style.exploreButton}
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          >
            {sortOrder === "asc" ? "Sort: A-Z" : sortOrder === "desc" ? "Sort: Z-A" : "Filter"}
          </button>
        </div>

        <div className={style.articlesContainer}>
          {filteredSortedData.map(article => (
            <div key={article.id} className={style.articleCard}>
              <img src={article.image} alt={article.title} className={style.articleImage} />
              <div className={style.articleText}>
                <h4 className={style.articleTitle}>{article.title}</h4>
                <p className={style.articleContext}>{article.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTopicsSection;
