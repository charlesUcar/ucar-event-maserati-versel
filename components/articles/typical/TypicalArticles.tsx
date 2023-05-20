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
    {
      id: 74325,
      title: '[捉對]豪華中型SUV巔峰之戰—Maserati Grecale GT vs. Porsche Macan',
      summary:
        'Macan不但是國內許多豪華品牌車主換購中型SUV時、腦海中第一個浮出來的選項，也實現了不少車迷想入主跑車品牌的夢想；不過，當已經成功進軍SUV戰場的Maserati，也在2022年3月挾著超強的競爭力、帶來品牌第二款SUV：Grecale後，Macan還能獨享這樣的光環嗎？',
      category: 3,
      date: '2023/03/24',
    },
    {
      id: 74118,
      title: '殺進豪華主戰場─Maserati Grecale GT試駕',
      summary:
        '雖然試車組已經在義大利領教過Grecale Trofeo與「海王星」引擎搭配的魅力，但是要想在豪華中型SUV市場裡開疆闢土，真正的關鍵X因子、其實還是得看建議售價新臺幣359萬元、擔綱入門主力的Grecale GT有幾斤實力；所以回國之後，我們馬上便和總代理臺灣蒙地拿敲定了這場約會……',
      category: 3,
      date: '2023/03/07',
    },
    {
      id: 74023,
      title: '海王星特調Espresso–Maserati Grecale Trofeo義大利羅馬試駕',
      summary:
        '就像是最能夠代表義大利的Espresso一樣，Grecale雖然車身尺碼比自家休旅兄弟小了一號，但是它不只濃縮了整個Stellantis集團的精華，也保留這個百年品牌的傳統與優雅、性能表現濃烈卻不矯情，並為駕駛人們準備了這款搭載「海王星」引擎的Double Espresso：Grecale Trofeo！',
      category: 3,
      date: '2023/02/22',
    },
    {
      id: 70198,
      title: '波賽頓的黃金戰車—Maserati MC20試駕',
      summary:
        '彷彿就像是希臘神話裡，總是忠實地伴隨海神出征的黃金戰車一樣，擁有630匹 (CV) 馬力、即將帶領Maserati重返賽道的MC20，靜的時候不但能立刻撫平愛琴海的大浪，給予乘客舒適且寧靜的行路質感，動起來還可以輕易地在岸邊掀起滔天巨浪，以強悍且直接的性能表現、回擊對手的無理挑釁！',
      category: 3,
      date: '2022/05/04',
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
                href={`/article/${article.category}/${article.id}`}
                className={styles.articleBox}
                key={article.id}
              >
                <Image
                  src={`https://image.cache.u-car.com.tw/articlethumb_1_${article.id}.jpg`}
                  width={600}
                  height={400}
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
