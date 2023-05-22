import Image from 'next/image';
import styles from './HeroBanner.module.scss';

export interface IHeroBanner {}

const HeroBanner: React.FC<IHeroBanner> = () => {
  return (
    <div id={styles.heroBanner}>
      <div className={styles.mainContainer}>
        <Image
          src="/asset/image/Maserati_Grecale_hero_desktop.jpg"
          alt="hero"
          className={styles.heroImg}
          fill={true}
          style={{ objectFit: 'cover' }}
          loading="eager"
        />
        <div className={styles.fromMask}></div>
        <div className={styles.slogan}>
          <Image
            src="/asset/svg/maserati-logo.svg"
            alt="Picture of the author"
            height={56}
            width={135}
            loading="eager"
          />
          <span>義式百年傳奇 Maserati</span>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
