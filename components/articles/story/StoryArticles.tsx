import Image from 'next/image';
import Link from 'next/link';
import storyArticles from '../../../stores/storyArticles';
import styles from './StoryArticles.module.scss';

export interface IStoryArticles {
  mainTitle?: string;
  articles: {
    id: number;
    title: string;
    summary: string;
    category: number;
    date: string;
  };
}

const StoryArticles: React.FC<IStoryArticles> = () => {
  return (
    <section id={styles.storyArticles}>
      <div className={styles.container}>
        <div className={styles.mainTitle}>Maserati 品牌故事</div>
        <div className={styles.firstArticleContainer}>
          <Link
            href={`/article/${storyArticles[0].category}/${storyArticles[0].id}`}
            className={styles.imgBox}
          >
            <Image
              src={`https://image.u-car.com.tw/carsummaryimage7_${storyArticles[0].id}.jpg`}
              width={585}
              height={390}
              alt="cover"
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.subtitle}>{storyArticles[0].title}</div>
          </Link>
          <div className={styles.otherArticles}>
            <ul>
              {storyArticles.map((article) => {
                if (article.id === storyArticles[0].id) {
                  return;
                }
                return (
                  <Link
                    href={`/article/${article.category}/${article.id}`}
                    key={article.id}
                  >
                    <li>
                      <Image
                        src={`https://image.cache.u-car.com.tw/articlethumb_1_${article.id}.jpg`}
                        width={585}
                        height={390}
                        alt="cover"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className={styles.desc}>{article.title}</div>
                      <span className={styles.arrow}>
                        <svg
                          width="34"
                          height="10"
                          viewBox="0 0 34 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 9.33084C19.1357 9.33084 32 9.33084 32 9.33084L22.5 0.669189"
                            stroke="#1A3B70"
                          />
                        </svg>
                      </span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryArticles;
