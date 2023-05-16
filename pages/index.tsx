import HeroBanner from '../components/banners/hero/HeroBanner';
import FooterLayout from '../components/layouts/footer/FooterLayout';
import HeaderLayout from '../components/layouts/header/HeaderLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
// import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <div className="row">
      <main className="home">
        <HeroBanner />
      </main>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <HeaderLayout />
      {page}
      <FooterLayout />
    </PrimaryLayout>
  );
};
