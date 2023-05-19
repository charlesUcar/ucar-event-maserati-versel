import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import lastestArticles from '../../../stores/lastestArticles';
import styles from './LastestArticles.module.scss';

export interface ILastestArticles {
  id: number;
  title: string;
  summary: string;
  category: number;
  date: string;
}

const LastestArticles: React.FC = () => {
  const [articles, setArticles] = useState<ILastestArticles[]>([]);
  const [articlesLength] = useState(lastestArticles.length);

  useEffect(() => {
    if (articlesLength > 5) {
      let top5 = [];
      for (let i = 0; i < 5; i++) {
        top5.push(lastestArticles[i]);
      }
      setArticles(top5);
      return;
    }
    if (lastestArticles.length <= 5) {
      setArticles(lastestArticles);
      return;
    }
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const fetchMoreArticles = () => {
    setIsLoading(true);
    setTimeout(() => {
      let appendArticles = [];
      for (let i = articles.length; i < articlesLength; i++) {
        appendArticles.push(lastestArticles[i]);
      }
      setArticles([...articles, ...appendArticles]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section id={styles.lastestArticles}>
      <div className={styles.container}>
        <div id="firstMainTitle" className={styles.mainTitle}>
          最新內容
        </div>
        <Link
          href={`/article/${lastestArticles[0].category}/${lastestArticles[0].id}`}
          className={styles.firstArticleContainer}
        >
          <div className={styles.imgBox}>
            <Image
              src={`https://image.u-car.com.tw/cartitleimage_${lastestArticles[0].id}.jpg`}
              width={585}
              height={390}
              alt="cover"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.desc}>{lastestArticles[0].summary}</div>
        </Link>
        <div className={styles.articlesContainer}>
          {articles?.map((article) => {
            if (article.id === articles[0].id) {
              return;
            }
            return (
              <Link
                href={`/article/${article.category}/${article.id}`}
                className={styles.articleBox}
                key={article.id}
              >
                <Image
                  src={`https://image.cache.u-car.com.tw/articlethumb_1_${article.id}.jpg`}
                  width={300}
                  height={200}
                  alt="cover"
                />
                <div className={styles.title}>{article.title}</div>
              </Link>
            );
          })}
        </div>
        {articlesLength < 6 ? null : (
          <div className={styles.loadMoreBtn}>
            <button onClick={fetchMoreArticles}>
              {isLoading ? '載入中...' : '載入更多'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LastestArticles;
