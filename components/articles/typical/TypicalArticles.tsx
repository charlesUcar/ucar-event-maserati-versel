import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './TypicalArticles.module.scss';

export interface ITypicalArticles {
  mainTitle?: string;
  articles?: {
    id: number;
    title: string;
    summary: string;
    category: number;
    date: string;
  }[];
}

const TypicalArticles: React.FC<ITypicalArticles> = ({ mainTitle }) => {
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

  return (
    <section id={styles.typicalArticles}>
      <div className={styles.container}>
        <div className={styles.mainTitle}>{mainTitle}</div>
        <div className={styles.articlesContainer}>
          {articles.map((article) => {
            return (
              <Link
                href="/article/4/68523"
                className={styles.articleBox}
                key={article.title}
              >
                <Image
                  src="https://image.cache.u-car.com.tw/articleimage_1155148.jpg"
                  width={300}
                  height={200}
                  alt="cover"
                />
                <div className={styles.title}>{article.title}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TypicalArticles;
