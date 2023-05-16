import Image from 'next/image';
import { useState } from 'react';
import styles from './SlideArticles.module.scss';

export interface ISlideArticles {
  mainTitle: string;
}

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

// import required modules
import { FreeMode, Scrollbar } from 'swiper';

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
    {
      title: '全臺限量3輛、售價668萬，Maserati Levante Modena Trofeo Line上市',
    },
    {
      title:
        '搭載可變色玻璃電動硬頂、2023下半年導入，Maserati正式發表MC20 Cielo',
    },
  ]);

  const breakpoints = {
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  return (
    <section id={styles.slideArticles}>
      <div className={styles.container}>
        <div className={styles.mainTitle}>{mainTitle}</div>
        <div className={styles.articlesContainer}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={breakpoints}
            scrollbar={{
              hide: false,
            }}
            freeMode={true}
            modules={[Scrollbar, FreeMode]}
            className="mySwiper"
          >
            {articles.map((article) => {
              return (
                <SwiperSlide key={article.title}>
                  <div className={styles.articleBox}>
                    <Image
                      src="https://image.cache.u-car.com.tw/articleimage_1155148.jpg"
                      width={300}
                      height={200}
                      alt="cover"
                    />
                    <div className={styles.title}>{article.title}</div>
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

export default SlideArticles;
