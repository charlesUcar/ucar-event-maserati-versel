import Image from 'next/image';
import styles from './SlideArticles.module.scss';

export interface ISlideArticles {
  mainTitle: string;
  articles: {
    id: number;
    title: string;
    summary: string;
    category: number;
    date: string;
  }[];
}

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

// import required modules
import Link from 'next/link';
import { FreeMode, Keyboard, Mousewheel, Scrollbar } from 'swiper';

const SlideArticles: React.FC<ISlideArticles> = ({ mainTitle, articles }) => {
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
            mousewheel={true}
            keyboard={{
              enabled: true,
            }}
            modules={[Scrollbar, FreeMode, Mousewheel, Keyboard]}
            className="slideArticle-swiper"
          >
            {articles?.map((article) => {
              return (
                <SwiperSlide key={article.id}>
                  <Link
                    href={`/article/${article.category}/${article.id}`}
                    className={styles.articleBox}
                  >
                    <Image
                      src={`https://image.cache.u-car.com.tw/articlethumb_1_${article.id}.jpg`}
                      width={300}
                      height={200}
                      alt="cover"
                    />
                    <div className={styles.title}>{article.title}</div>
                  </Link>
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
