import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import lastestArticles from '../../../stores/lastestArticles';
import TypicalArticles from '../../articles/typical/TypicalArticles';
import styles from './ArticleTemplate.module.scss';

export interface IArticleTemplate {
  articleData?: any;
}

const ArticleTemplate: React.FC<IArticleTemplate> = ({ articleData }) => {
  const [currentUrl, setCurrentUrl] = useState('');
  const [imgIsLoading, setImgIsLoading] = useState(true);

  useEffect(() => {
    const imgEl = document.getElementsByClassName('lazy');
    for (var i = 0; i < imgEl.length; i++) {
      (imgEl[i] as HTMLImageElement).src =
        'https:' + (imgEl[i] as HTMLImageElement).dataset.original;
    }
    setCurrentUrl(window.location.href);
  }, [articleData]);

  const handleOpenWindow = () => {
    const url = 'https://lineit.line.me/share/ui?url='.concat(
      encodeURIComponent(location.href)
    );
    window.open(url);
  };

  const dateFormatter = (articleDate: string) => {
    // 建立Date物件
    const date = new Date(articleDate);

    // 取得台灣時間
    var taiwanTime = date.toLocaleString('zh-TW', {
      timeZone: 'Asia/Taipei',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    // 格式化日期
    var formattedDate = taiwanTime.replace(/\//g, '/');

    return formattedDate;
  };

  return (
    <>
      <div className={styles.heroBanner}>
        <div
          className={`${styles.imgSkeleton} ${imgIsLoading ? styles.show : ''}`}
        ></div>
        <Image
          className={imgIsLoading ? '' : styles.show}
          src={
            articleData.category === 1
              ? `https://image.u-car.com.tw/carsummaryimage7_${articleData.id}.jpg`
              : `https://image.u-car.com.tw/cartitleimage_${articleData.id}.jpg`
          }
          alt="hero"
          width={585}
          height={390}
          onLoadingComplete={() => setImgIsLoading(false)}
        />
      </div>
      <div className="article-body">
        <div className="socialBox">
          <Link
            className="facebook"
            href={`http://www.facebook.com/share.php?u=${currentUrl}`}
            target="_blank"
          >
            <svg
              width="12"
              height="24"
              viewBox="0 0 12 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6369 0.000547391C11.6369 0.000547391 9.32832 0.000547391 7.79693 0.000547391C5.5163 0.000547391 2.98158 0.956542 2.98158 4.25728C2.99339 5.40629 2.98158 6.50742 2.98158 7.74675H0.344727V11.9368H3.06379V24.0001H8.05909V11.8564H11.3567L11.6551 7.73484H7.97255C7.97255 7.73484 7.98252 5.90013 7.97255 5.36827C7.97255 4.06477 9.33271 4.1389 9.41242 4.1389C10.0613 4.1389 11.3175 4.1408 11.6407 4.1389V-0.000100136H11.637V0.000547391H11.6369Z"
                fill="#0C2340"
              />
            </svg>
          </Link>
          <Link
            className="line"
            href="#"
            target="_blank"
            onClick={handleOpenWindow}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.944 9.33558L23.9367 9.27407C23.9367 9.27326 23.9367 9.27245 23.9367 9.27083C23.9367 9.27002 23.9367 9.26921 23.9367 9.2684L23.9092 9.03693C23.9035 8.99079 23.8971 8.93738 23.8898 8.87748L23.8841 8.82973L23.872 8.83135C23.579 7.16649 22.7753 5.58662 21.5297 4.23741C20.2897 2.89468 18.6791 1.83442 16.8718 1.17155C15.3227 0.603379 13.6797 0.315247 11.9873 0.315247C9.7033 0.315247 7.48484 0.852663 5.57232 1.86841C1.88487 3.82788 -0.290698 7.43035 0.0314278 11.045C0.198156 12.9154 0.930629 14.696 2.15034 16.1941C3.29882 17.604 4.85199 18.742 6.64229 19.485C7.74303 19.9415 8.83162 20.1567 9.98415 20.385L10.1193 20.4117C10.4366 20.4748 10.5224 20.5606 10.5442 20.5946C10.5847 20.6577 10.5637 20.7832 10.5475 20.852C10.5321 20.9159 10.5167 20.9791 10.5013 21.0422C10.3775 21.5464 10.2496 22.0685 10.35 22.6439C10.4657 23.3052 10.8785 23.6848 11.4831 23.6848C12.133 23.6848 12.8736 23.2485 13.3632 22.9596L13.4288 22.9215C14.5975 22.2352 15.6982 21.4614 16.5262 20.8641C18.3392 19.5562 20.3933 18.0735 21.9344 16.1561C23.4851 14.2249 24.216 11.7426 23.944 9.33639V9.33558ZM7.47432 12.9947H5.40397C5.09075 12.9947 4.83742 12.7414 4.83742 12.4282V8.08188C4.83742 7.76866 5.09075 7.51533 5.40397 7.51533C5.71719 7.51533 5.97052 7.76866 5.97052 8.08188V11.8616H7.47432C7.78754 11.8616 8.04087 12.1149 8.04087 12.4282C8.04087 12.7414 7.78754 12.9947 7.47432 12.9947ZM9.6345 12.4128C9.6345 12.726 9.38117 12.9793 9.06795 12.9793C8.75473 12.9793 8.5014 12.726 8.5014 12.4128V8.0665C8.5014 7.75328 8.75473 7.49995 9.06795 7.49995C9.38117 7.49995 9.6345 7.75328 9.6345 8.0665V12.4128ZM14.7553 12.4128C14.7553 12.658 14.5975 12.8757 14.3636 12.9518C14.3061 12.9704 14.2471 12.9793 14.1888 12.9793C14.0107 12.9793 13.8391 12.8952 13.7299 12.7454L11.6895 9.93532V12.412C11.6895 12.7252 11.4361 12.9785 11.1229 12.9785C10.8097 12.9785 10.5564 12.7252 10.5564 12.412V8.19034C10.5564 7.9451 10.7142 7.72738 10.9481 7.6513C11.182 7.57522 11.437 7.65858 11.5818 7.85688L13.6222 10.667V8.06569C13.6222 7.75247 13.8756 7.49914 14.1888 7.49914C14.502 7.49914 14.7553 7.75247 14.7553 8.06569V12.412V12.4128ZM18.8839 12.8903H16.0795C15.7662 12.8903 15.5129 12.637 15.5129 12.3237V7.97747C15.5129 7.66425 15.7662 7.41092 16.0795 7.41092H18.7965C19.1097 7.41092 19.363 7.66425 19.363 7.97747C19.363 8.2907 19.1097 8.54403 18.7965 8.54403H16.646V9.58406H18.391C18.7042 9.58406 18.9575 9.83739 18.9575 10.1506C18.9575 10.4638 18.7042 10.7172 18.391 10.7172H16.646V11.7572H18.8831C19.1963 11.7572 19.4496 12.0105 19.4496 12.3237C19.4496 12.637 19.1963 12.8903 18.8831 12.8903H18.8839Z"
                fill="#0C2340"
              />
            </svg>
          </Link>
        </div>
        <div className="body-header">
          <h1 className="body-title">{articleData.title}</h1>
          <div className="body-articleInfo">
            <div className="author">
              <span className="reporter">
                文&nbsp;&nbsp;•&nbsp;&nbsp;{articleData.reporter}
              </span>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <span className="photographer">
                圖&nbsp;&nbsp;•&nbsp;&nbsp;{articleData.photographer}
              </span>
            </div>
            <div className="postDate">{dateFormatter(articleData.date)}</div>
          </div>
          <div className="body-articleInfo-mobile">
            <div className="infoBox">
              <div className="author">
                {'文 • ' +
                  articleData.reporter +
                  ' | 圖 • ' +
                  articleData.photographer}
              </div>
              <div className="postDate">{dateFormatter(articleData.date)}</div>
            </div>
            <div className="socialBox">
              <Link
                className="facebook"
                href={`http://www.facebook.com/share.php?u=${currentUrl}`}
                target="_blank"
              >
                <svg
                  width="12"
                  height="24"
                  viewBox="0 0 12 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6369 0.000547391C11.6369 0.000547391 9.32832 0.000547391 7.79693 0.000547391C5.5163 0.000547391 2.98158 0.956542 2.98158 4.25728C2.99339 5.40629 2.98158 6.50742 2.98158 7.74675H0.344727V11.9368H3.06379V24.0001H8.05909V11.8564H11.3567L11.6551 7.73484H7.97255C7.97255 7.73484 7.98252 5.90013 7.97255 5.36827C7.97255 4.06477 9.33271 4.1389 9.41242 4.1389C10.0613 4.1389 11.3175 4.1408 11.6407 4.1389V-0.000100136H11.637V0.000547391H11.6369Z"
                    fill="#0C2340"
                  />
                </svg>
              </Link>
              <Link
                className="line"
                href="#"
                target="_blank"
                onClick={handleOpenWindow}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.944 9.33558L23.9367 9.27407C23.9367 9.27326 23.9367 9.27245 23.9367 9.27083C23.9367 9.27002 23.9367 9.26921 23.9367 9.2684L23.9092 9.03693C23.9035 8.99079 23.8971 8.93738 23.8898 8.87748L23.8841 8.82973L23.872 8.83135C23.579 7.16649 22.7753 5.58662 21.5297 4.23741C20.2897 2.89468 18.6791 1.83442 16.8718 1.17155C15.3227 0.603379 13.6797 0.315247 11.9873 0.315247C9.7033 0.315247 7.48484 0.852663 5.57232 1.86841C1.88487 3.82788 -0.290698 7.43035 0.0314278 11.045C0.198156 12.9154 0.930629 14.696 2.15034 16.1941C3.29882 17.604 4.85199 18.742 6.64229 19.485C7.74303 19.9415 8.83162 20.1567 9.98415 20.385L10.1193 20.4117C10.4366 20.4748 10.5224 20.5606 10.5442 20.5946C10.5847 20.6577 10.5637 20.7832 10.5475 20.852C10.5321 20.9159 10.5167 20.9791 10.5013 21.0422C10.3775 21.5464 10.2496 22.0685 10.35 22.6439C10.4657 23.3052 10.8785 23.6848 11.4831 23.6848C12.133 23.6848 12.8736 23.2485 13.3632 22.9596L13.4288 22.9215C14.5975 22.2352 15.6982 21.4614 16.5262 20.8641C18.3392 19.5562 20.3933 18.0735 21.9344 16.1561C23.4851 14.2249 24.216 11.7426 23.944 9.33639V9.33558ZM7.47432 12.9947H5.40397C5.09075 12.9947 4.83742 12.7414 4.83742 12.4282V8.08188C4.83742 7.76866 5.09075 7.51533 5.40397 7.51533C5.71719 7.51533 5.97052 7.76866 5.97052 8.08188V11.8616H7.47432C7.78754 11.8616 8.04087 12.1149 8.04087 12.4282C8.04087 12.7414 7.78754 12.9947 7.47432 12.9947ZM9.6345 12.4128C9.6345 12.726 9.38117 12.9793 9.06795 12.9793C8.75473 12.9793 8.5014 12.726 8.5014 12.4128V8.0665C8.5014 7.75328 8.75473 7.49995 9.06795 7.49995C9.38117 7.49995 9.6345 7.75328 9.6345 8.0665V12.4128ZM14.7553 12.4128C14.7553 12.658 14.5975 12.8757 14.3636 12.9518C14.3061 12.9704 14.2471 12.9793 14.1888 12.9793C14.0107 12.9793 13.8391 12.8952 13.7299 12.7454L11.6895 9.93532V12.412C11.6895 12.7252 11.4361 12.9785 11.1229 12.9785C10.8097 12.9785 10.5564 12.7252 10.5564 12.412V8.19034C10.5564 7.9451 10.7142 7.72738 10.9481 7.6513C11.182 7.57522 11.437 7.65858 11.5818 7.85688L13.6222 10.667V8.06569C13.6222 7.75247 13.8756 7.49914 14.1888 7.49914C14.502 7.49914 14.7553 7.75247 14.7553 8.06569V12.412V12.4128ZM18.8839 12.8903H16.0795C15.7662 12.8903 15.5129 12.637 15.5129 12.3237V7.97747C15.5129 7.66425 15.7662 7.41092 16.0795 7.41092H18.7965C19.1097 7.41092 19.363 7.66425 19.363 7.97747C19.363 8.2907 19.1097 8.54403 18.7965 8.54403H16.646V9.58406H18.391C18.7042 9.58406 18.9575 9.83739 18.9575 10.1506C18.9575 10.4638 18.7042 10.7172 18.391 10.7172H16.646V11.7572H18.8831C19.1963 11.7572 19.4496 12.0105 19.4496 12.3237C19.4496 12.637 19.1963 12.8903 18.8831 12.8903H18.8839Z"
                    fill="#0C2340"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="postcont"
          dangerouslySetInnerHTML={{
            __html: articleData.contents[0].content,
          }}
        ></div>
      </div>
      <TypicalArticles
        mainTitle="相關文章"
        articles={lastestArticles.slice(0, 8)}
      />
    </>
  );
};

export default ArticleTemplate;
