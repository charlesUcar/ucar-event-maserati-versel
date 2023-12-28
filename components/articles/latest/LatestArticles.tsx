import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import latestArticles from '../../../stores/latestArticles';
import styles from './LatestArticles.module.scss';

export interface ILatestArticles {
  id: number;
  title: string;
  summary: string;
  category: number;
  date: string;
  youtubeId?: string;
  youtubeUrl?: string;
  youtubeCover?: string;
}

const LatestArticles: React.FC = () => {
  const [articles, setArticles] = useState<ILatestArticles[]>([]);
  const [articlesLength] = useState(latestArticles.length);
  const [isFetchMoreBtnShow, setIsFetchMoreBtnShow] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (articlesLength > 5) {
      let top5 = [];
      for (let i = 0; i < 5; i++) {
        top5.push(latestArticles[i]);
      }
      setArticles(top5);
      return;
    }
    if (latestArticles.length <= 5) {
      setArticles(latestArticles);
      return;
    }
  }, []);

  useEffect(() => {
    if (articles.length === articlesLength) {
      setIsFetchMoreBtnShow(false);
    }
  }, [articles, articlesLength]);

  const fetchMoreArticles = () => {
    setIsLoading(true);
    setTimeout(() => {
      let appendArticles = [];
      for (let i = articles.length; i < articlesLength; i++) {
        appendArticles.push(latestArticles[i]);
      }
      setArticles([...articles, ...appendArticles]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section id={styles.latestArticles}>
      <div className={styles.container}>
        <div id="firstMainTitle" className={styles.mainTitle}>
          最新內容
        </div>
        {articles[0]?.category === 10 ? (
          <div
            className={`${styles.firstArticleContainer} ${styles.youtubeIframeContainer}`}
          >
            <div className={styles.imgBox}>
              <iframe
                width="585"
                height="329"
                src={`https://www.youtube.com/embed/${articles[0].youtubeId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.desc}>{latestArticles[0].summary}</div>
          </div>
        ) : (
          ''
        )}

        {articles[0]?.category !== 10 ? (
          <Link
            href={`/article/${latestArticles[0].category}/${latestArticles[0].id}`}
            className={styles.firstArticleContainer}
          >
            <div className={styles.imgBox}>
              <Image
                src={
                  latestArticles[0].category === 1
                    ? `https://image.u-car.com.tw/carsummaryimage7_${latestArticles[0].id}.jpg`
                    : `https://image.u-car.com.tw/cartitleimage_${latestArticles[0].id}.jpg`
                }
                width={585}
                height={390}
                alt="cover"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.desc}>{latestArticles[0].summary}</div>
          </Link>
        ) : (
          ''
        )}

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
        {!isFetchMoreBtnShow ? null : (
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

export default LatestArticles;
