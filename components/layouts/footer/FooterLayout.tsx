import Image from 'next/image';

export interface IFooterLayout {}

const FooterLayout: React.FC<IFooterLayout> = () => {
  const closeModal = () => {
    const sidebarEl = document.getElementById('mySidenav');
    const mainEl = document.getElementById('myMain');
    const modalEl = document.getElementById('navModal');
    sidebarEl!.style.width = 0 + 'px';
    mainEl!.style.display = 'block';
    mainEl!.style.width = '100%';
    mainEl!.style.height = 'auto';
    mainEl!.style.overflow = 'auto';
    modalEl!.style.display = 'none';
  };

  return (
    <>
      <div className="footer_area">
        <div className="wrap">
          <div className="socialmenu is-mobile">
            <ul className="social-link is-flexbox">
              <li>
                <a
                  href="https://www.facebook.com/ucar.com.tw/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon-facebook-squared" title="facebook">
                    <Image
                      src="/asset/svg/square-facebook.svg"
                      width={22}
                      height={22}
                      alt="cover"
                    />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCW92-RPH4xq1YqVbON4D0fg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon-youtube-play" title="Youtube">
                    <Image
                      src="/asset/svg/youtube.svg"
                      width={22}
                      height={22}
                      alt="cover"
                    />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/u_car_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon-instagram-1" title="instagram">
                    <Image
                      src="/asset/svg/instagram.svg"
                      width={22}
                      height={22}
                      alt="cover"
                    />
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <h3>MediaBrilliance System content &amp; community</h3>
          <div className="footer_text">
            <ul className="footer_link clearfix">
              <li className="privacy">
                <a href="//member.u-car.com.tw/account/privacy">隱私權政策</a>
              </li>
              <li className="feedback">
                <a
                  href="https://forum.u-car.com.tw/"
                  target="_blank"
                  rel="noreferrer"
                >
                  意見回饋
                </a>
              </li>
              <li className="contactus">
                <a href="//news.u-car.com.tw/ad/contact">廣告聯繫</a>
              </li>
            </ul>
            <p>本站圖文除使用者發表外，屬旭傳科技(股)版權所有。</p>
            <p className="small">
              ©2000-2023 MediaBrilliance System Corporation. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
      <div
        className="modal"
        id="navModal"
        style={{ display: 'none' }}
        onClick={closeModal}
      ></div>
    </>
  );
};

export default FooterLayout;
