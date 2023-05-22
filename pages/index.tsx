import LastestArticles from '../components/articles/latest/LastestArticles';
import SlideArticles from '../components/articles/slide/SlideArticles';
import TypicleArticles from '../components/articles/typical/TypicalArticles';
import VideoArticles from '../components/articles/video/VideoArticles';
import HeroBanner from '../components/banners/hero/HeroBanner';
import FooterLayout from '../components/layouts/footer/FooterLayout';
import HeaderLayout from '../components/layouts/header/HeaderLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import moreArticles from '../stores/moreArticles';
import storyArticles from '../stores/storyArticles';
import usedCarArticles from '../stores/usedCarArticles';
// import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <div className="row">
      <main className="home">
        <HeroBanner />
        <LastestArticles />
        <SlideArticles mainTitle="Maserati 品牌故事" articles={storyArticles} />
        <VideoArticles />
        <SlideArticles
          mainTitle="Maserati 原廠認證中古車"
          articles={usedCarArticles}
        />
        <TypicleArticles mainTitle={'延伸閱讀'} articles={moreArticles} />
      </main>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <HeaderLayout position="lists" />
      {page}
      <FooterLayout />
    </PrimaryLayout>
  );
};
