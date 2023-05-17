import Image from 'next/image';
import { useState } from 'react';
import styles from './StoryArticles.module.scss';

export interface IStoryArticles {
  mainTitle?: string;
}

const StoryArticles: React.FC<IStoryArticles> = () => {
  const [articles, setArticles] = useState([
    {
      title:
        '[U-EV]2025全車系皆有純電、純電GranTurismo馬力超過1,200匹，Maserati Folgore純電計畫訪談',
    },
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
    {
      title: '全臺限量3輛、售價668萬，Maserati Levante Modena Trofeo Line上市',
    },
    {
      title:
        '搭載可變色玻璃電動硬頂、2023下半年導入，Maserati正式發表MC20 Cielo',
    },
  ]);

  return (
    <section id={styles.storyArticles}>
      <div className={styles.container}>
        <div className={styles.mainTitle}>Maserati 品牌故事</div>
        <div className={styles.firstArticleContainer}>
          <div className={styles.imgBox}>
            <Image
              src="https://image.cache.u-car.com.tw/articleimage_1080115.jpg"
              width={585}
              height={390}
              alt="cover"
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.subtitle}>{articles[0].title}</div>
          </div>
          <div className={styles.otherArticles}>
            <ul>
              {articles.map((article) => {
                return (
                  <li key={article.title}>
                    <Image
                      src="https://image.cache.u-car.com.tw/articleimage_1080115.jpg"
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
