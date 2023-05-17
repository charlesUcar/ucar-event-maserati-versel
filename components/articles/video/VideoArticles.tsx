import Image from 'next/image';
import { useState } from 'react';
import styles from './VideoArticles.module.scss';

export interface IVideoArticles {
  mainTitle?: string;
}

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectCards, Navigation, Pagination } from 'swiper';

const VideoArticles: React.FC<IVideoArticles> = () => {
  const [articles, setArticles] = useState([
    {
      title:
        '【試駕】Maserati Levante Modena試駕：原來Trofeo Line才是為揚心目中的完美型態｜新車試駕',
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
    <section id={styles.videoArticles} className="videoArticles">
      <div className={styles.container}>
        <div className={styles.mainTitle}>Maserati 影音報導</div>
        <div className={styles.articlesContainer}>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Pagination, Navigation]}
            pagination={true}
            navigation={true}
            className="mySwiper"
          >
            {articles.map((article) => {
              return (
                <SwiperSlide key={article.title}>
                  <div className={styles.articleBox}>
                    <Image
                      src="https://i3.ytimg.com/vi/pX-z8GgDWM8/maxresdefault.jpg"
                      width={300}
                      height={200}
                      alt="cover"
                    />
                    <div className={`${styles.title} videoArticles-title`}>
                      {article.title}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default VideoArticles;
