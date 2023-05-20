import videoArticles from '../../../stores/videoArticles';
import styles from './VideoArticles.module.scss';

export interface IVideoArticles {
  mainTitle?: string;
  articles?: {
    id: number;
    title: string;
    summary: string;
    ytId: string;
    date: string;
  }[];
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
  return (
    <section id={styles.videoArticles} className="videoArticles">
      <div className={styles.container}>
        <div className={styles.mainTitle}>Maserati 影音報導</div>
        <div className={styles.articlesContainer}>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            effect={'cards'}
            grabCursor={false}
            modules={[EffectCards, Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation={true}
            className="mySwiper"
          >
            {videoArticles.map((article) => {
              return (
                <SwiperSlide key={article.title}>
                  <div className={styles.articleBox}>
                    <iframe
                      width="700"
                      height="450"
                      src={`https://www.youtube.com/embed/${article.ytId}?rel=0&modestbranding=1&showinfo=0`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
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
