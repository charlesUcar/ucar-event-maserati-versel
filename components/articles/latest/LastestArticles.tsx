import Image from 'next/image';
import { useState } from 'react';
import styles from './LastestArticles.module.scss';

export interface ILastestArticles {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
}

const LastestArticles: React.FC = () => {
  const [articles, setArticles] = useState([
    { title: '海王星特調Espresso–Maserati Grecale Trofeo義大利羅馬試駕' },
    {
      title:
        '[U-EV]只有純電版、馬力上看760匹，Maserati將在2025年推出下一代Levante',
    },
    {
      title: '全臺限量3輛、售價668萬，Maserati Levante Modena Trofeo Line上市',
    },
    {
      title:
        '搭載可變色玻璃電動硬頂、2023下半年導入，Maserati正式發表MC20 Cielo',
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchMoreArticles = () => {
    setIsLoading(true);
    setTimeout(() => {
      setArticles([
        ...articles,
        { title: '44444' },
        { title: '55555' },
        { title: '66666' },
        { title: '77777' },
      ]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section id={styles.lastestArticles}>
      <div className={styles.container}>
        <div id="firstMainTitle" className={styles.mainTitle}>
          最新內容
        </div>
        <div className={styles.firstArticleContainer}>
          <div className={styles.imgBox}>
            <Image
              src="https://image.u-car.com.tw/cartitleimage_73948.jpg"
              width={585}
              height={390}
              alt="cover"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.desc}>
            Maserati
            Ghibli的車系歷史悠久，在每個世代裡都代表著非凡意義，身為第三代的現行車款是在2013年問世，其歷史定位就是成為當代最優美也最狂野的豪華跑房車，而擁有Maserati更是一種時尚潮流的象徵，現在坐擁全新18年式Ghibili
            GranSport，你就能成為仕紳名流。
          </div>
        </div>
        <div className={styles.articlesContainer}>
          {articles.map((article) => {
            return (
              <div className={styles.articleBox} key={article.title}>
                <Image
                  src="https://image.cache.u-car.com.tw/articleimage_1155148.jpg"
                  width={60}
                  height={40}
                  alt="cover"
                />
                <div className={styles.title}>{article.title}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.loadMoreBtn}>
          <button onClick={fetchMoreArticles}>
            {isLoading ? '載入中...' : '載入更多'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LastestArticles;
