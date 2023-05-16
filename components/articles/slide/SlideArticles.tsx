import { useState } from 'react';
import styles from './SlideArticles.module.scss';

export interface ISlideArticles {
  mainTitle: string;
}

const SlideArticles: React.FC<ISlideArticles> = ({ mainTitle }) => {
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
    <section id={styles.slideArticles}>
      <div className={styles.container}>
        <div className={styles.mainTitle}>{mainTitle}</div>
      </div>
    </section>
  );
};

export default SlideArticles;
