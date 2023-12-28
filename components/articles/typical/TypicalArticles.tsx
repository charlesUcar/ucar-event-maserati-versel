import Image from 'next/image';
import Link from 'next/link';
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

const TypicalArticles: React.FC<ITypicalArticles> = ({
  mainTitle,
  articles,
}) => {
  return (
    <section id={styles.typicalArticles}>
      <div className={styles.container}>
        <div className={styles.mainTitle}>{mainTitle}</div>
        <div className={styles.articlesContainer}>
          {articles?.map((article) => {
            if (article.category !== 10) {
              return (
                <Link
                  href={`/article/${article.category}/${article.id}`}
                  className={styles.articleBox}
                  key={article.title}
                >
                  <Image
                    src={
                      article.category === 1
                        ? `https://image.u-car.com.tw/carsummaryimage7_${article.id}.jpg`
                        : `https://image.u-car.com.tw/cartitleimage_${article.id}.jpg`
                    }
                    width={300}
                    height={200}
                    alt="cover"
                  />
                  <div className={styles.title}>{article.title}</div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default TypicalArticles;
