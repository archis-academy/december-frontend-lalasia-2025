import React, { useState, useMemo } from 'react';
import styles from './ArticleCarousel.module.scss';
import { useData } from '@/hooks/useData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  image: string;
  category: string;
  autherId: number;
  date: string;
}

interface User {
  id: number;
  image: string;
  name?: string;
}

const ArticleCarousel = () => {
  const { data: articles, isLoading } = useData<Article[]>({
    endpoint: 'articles',
  });

  const { data: users } = useData<User[]>({
    endpoint: 'users',
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const userMap = useMemo(() => {
    if (!users) return {};
    return users.reduce<Record<number, User>>((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});
  }, [users]);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });


  if (isLoading) {
    return <div className={styles.loader}>Yükleniyor...</div>;
  }

  if (!articles || articles.length === 0) return null;

  const current = articles[currentIndex];
  const author = userMap[current.autherId];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? articles.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === articles.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className={styles.carousel}>
      <header className={styles.header}>
        <h2 className={styles.mainTitle}>Article</h2>
        <p className={styles.description}>
          We display products based on the latest products we have,
          if you want to see our old products please enter the name
          of the item
        </p>
      </header>

      <div className={styles.body}>
        <div className={styles.imageContainer}>
          <img
            src={current.image}
            alt={current.title}
            className={styles.image}
          />

          <button
            className={`${styles.navBtn} ${styles.prev}`}
            onClick={handlePrev}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className={`${styles.navBtn} ${styles.next}`}
            onClick={handleNext}
          >
            <ChevronRight size={24} />
          </button>

          <div className={styles.dots}>
            {articles.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.active : ''
                  }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <span className={styles.category}>{current.category}</span>
          <h3 className={styles.title}>{current.title}</h3>
         
          <div className={styles.footer}>
            <div className={styles.avatar}>
              {author?.image ? (
                <img src={author.image} alt="Author" />
              ) : (
                <div className={styles.avatarFallback} />
              )}
            </div>

            <span className={styles.authorLabel}>
              {author?.name || 'Author'}
            </span>
            <span className={styles.date}>
              {formatDate(current.date)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleCarousel;