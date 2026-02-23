import type { ArticleCardProps } from "@/types/types";
import style from "./TrendingTopics.module.scss";

type ArticleCardComponentProps = {
  article: ArticleCardProps;
};

const TrendingTopicCard = ({ article }: ArticleCardComponentProps) => {
  return (
    <div className={style.articleCard}>
      <img
        src={article.image}
        alt={article.title}
        className={style.articleImage}
      />

      <div className={style.articleText}>
        <span className={style.articleCategory}>{article.category}</span>

        <h4 className={style.articleTitle}>{article.title}</h4>

        <p className={style.articleContext}>
          {article.context.slice(0, 150)}...
        </p>

        <div className={style.articleMeta}>
          <img
            src="/icons/trendingTopics/article-icon-user.svg"
            alt="User Image"
            className={style.articleIconUser}
          />
          <span className={style.authorName}>By Morgan Goldberg</span>
          <span className={style.publishDate}>Friday, 1 April 2022</span>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopicCard;
