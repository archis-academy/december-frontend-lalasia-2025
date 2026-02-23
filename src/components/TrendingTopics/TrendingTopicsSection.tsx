import { useState, useMemo, useRef, useEffect } from "react";
import type { ArticleCardProps } from "@/types/types";
import { useData } from "@/hooks/useData";
import style from "./TrendingTopics.module.scss";
import TrendingTopicCard from "./TrendingTopicCard";





const TrendingTopicsSection = () => {
  const { data, isLoading, error } = useData<ArticleCardProps[]>({
    endpoint: "articles",
  });

  const [activeTab, setActiveTab] = useState("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Dışarı tıklayınca dropdown kapanması
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const categories = useMemo(() => {
    if (!data) return [];
    const uniqueCategories = Array.from(
      new Set(data.map((item) => item.category))
    );
    return ["All", ...uniqueCategories];
  }, [data]);

  const filteredSortedData = useMemo(() => {
    if (!data) return [];

    let filtered =
      activeTab === "All"
        ? data
        : data.filter((article) => article.category === activeTab);

    if (sortOrder === "asc") {
      filtered = [...filtered].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else if (sortOrder === "desc") {
      filtered = [...filtered].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
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
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`${style.button} ${
                activeTab === category
                  ? style.activeTab
                  : style.inactiveTab
              }`}
            >
              {category}
            </button>
          ))}

          {/* SORT DROPDOWN */}
          <div className={style.sortWrapper} ref={dropdownRef}>
            <button
              className={style.exploreButton}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <img
                src="/icons/trendingTopics/filter-icon.svg"
                alt="filter"
                className={style.filterIcon}
              />
              {sortOrder === "asc"
                ? "A-Z"
                : sortOrder === "desc"
                ? "Z-A"
                : "Filter"}
            </button>

            {isOpen && (
              <div className={style.dropdown}>
                <button
                  onClick={() => {
                    setSortOrder("asc");
                    setIsOpen(false);
                  }}
                  className={
                    sortOrder === "asc" ? style.activeOption : ""
                  }
                >
                  A-Z
                </button>

                <button
                  onClick={() => {
                    setSortOrder("desc");
                    setIsOpen(false);
                  }}
                  className={
                    sortOrder === "desc" ? style.activeOption : ""
                  }
                >
                  Z-A
                </button>
              </div>
            )}
          </div>
        </div>

        <div className={style.articlesContainer}>
          {filteredSortedData.map((article) => (
            <TrendingTopicCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTopicsSection;