import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export interface IHeaderLayout {
  position: string;
}

const HeaderLayout: React.FC<IHeaderLayout> = ({ position }) => {
  const openSidebar = () => {
    const sidebarEl = document.getElementById('mySidenav');
    const mainEl = document.getElementById('myMain');
    const modalEl = document.getElementById('navModal');
    sidebarEl!.style.width = 240 + 'px';
    mainEl!.style.display = 'fixed';
    mainEl!.style.width = '100%';
    mainEl!.style.height = '100vh';
    mainEl!.style.overflow = 'hidden';
    modalEl!.style.display = 'block';
  };

  const listenerRef = useRef();

  useEffect(() => {
    if (position === 'lists') {
      const firstMainTitle = document.getElementById('firstMainTitle');
      const firstMainTitleOffsetTop = firstMainTitle!.offsetTop;
      const stickyBarEl = document.getElementById('header-stickyBar');
      const eventListener = () => {
        if (firstMainTitleOffsetTop - 160 < window.scrollY) {
          stickyBarEl?.classList.add('show');
        } else {
          stickyBarEl?.classList.remove('show');
        }
      };

      addEventListener('scroll', eventListener);
      listenerRef.current = eventListener;
      return () => {
        window.removeEventListener('scroll', listenerRef.current);
      };
    }
    if (position === 'article') {
      const stickyBarEl = document.getElementById('header-stickyBar');
      const eventListener = () => {
        if (window.scrollY > 50) {
          stickyBarEl?.classList.add('thin');
        } else {
          stickyBarEl?.classList.remove('thin');
        }
      };

      addEventListener('scroll', eventListener);
      listenerRef.current = eventListener;
      return () => {
        window.removeEventListener('scroll', listenerRef.current);
      };
    }
  }, [position]);

  return (
    <div
      className="head scroll-to-fixed-fixed"
      style={{
        zIndex: 1000,
        position: 'fixed',
        top: 0 + 'px',
        marginLeft: 0 + 'px',
        width: 516 + 'px',
        left: 0 + 'px',
      }}
    >
      <Link
        href="/"
        id="header-stickyBar"
        className={`stickyBar ${position}-stickyBar`}
      >
        <Image
          src="/asset/svg/maserati-logo-black.svg"
          alt="Picture of the author"
          height={56}
          width={135}
        />
        <span>義式百年傳奇 Maserati</span>
      </Link>
      <div className="wrap">
        <div className="span2">
          <div className="nav_switch">
            <div className="bn_menu" onClick={openSidebar}>
              <span>open</span>
            </div>
          </div>
          <a href="https://www.u-car.com.tw/">
            <h1 className="logo">U-CAR</h1>
          </a>
        </div>
        <div className="span10">
          <div className="nav">
            <div className="topmenu is-flexbox is-desktop">
              <div className="usite">
                U-網站：<a href="//www.u-car.com.tw/">U-CAR</a>
                <a
                  href="http://www.u-audio.com.tw/"
                  target="_blank"
                  rel="noreferrer"
                >
                  U-AUDIO
                </a>
                <a
                  href="http://www.u-outdoor.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  U-OUTDOOR
                </a>
                <a
                  href="http://www.u-headphone.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  U-HEADPHONE
                </a>
                <a
                  href="http://www.u-acg.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  U-ACG
                </a>
              </div>
              <ul className="social-link is-flexbox">
                <li>
                  <a
                    href="https://www.facebook.com/ucar.com.tw/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span
                      className="icon-facebook-squared"
                      title="facebook"
                    ></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCW92-RPH4xq1YqVbON4D0fg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon-youtube-play" title="Youtube"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/u_car_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon-instagram-1" title="instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
            <ul className="inner">
              <li className="nav_home current">
                <a href="//www.u-car.com.tw/" className="">
                  首頁
                </a>
              </li>
              <li className="nav_mobile">
                <a href="//newcar.u-car.com.tw/" className="">
                  新車
                </a>
              </li>
              <li className="nav_desktop">
                <a href="//buy.u-car.com.tw/" className="">
                  購車
                </a>
              </li>
              <li className="nav_mobile">
                <a href="//sales.u-car.com.tw" className="">
                  <span className="text_red">
                    <span className="hidden-text">汽車</span>好業代
                  </span>
                </a>
              </li>
              <li className="nav_desktop">
                <a href="http://usedcar.u-car.com.tw/">
                  二手<span className="hidden-text">車</span>
                </a>
              </li>
              <li className="nav_mobile">
                <a href="//news.u-car.com.tw/" className="">
                  新聞
                </a>
              </li>
              <li className="nav_desktop">
                <a href="//promotion.u-car.com.tw/" className="">
                  促銷
                </a>
              </li>
              <li className="nav_mobile">
                <a href="//roadtest.u-car.com.tw/" className="">
                  試車
                </a>
              </li>
              <li className="nav_desktop">
                <a href="//mook.u-car.com.tw/" className="">
                  徹底研究
                </a>
              </li>
              <li className="nav_desktop">
                <a href="//collection.u-car.com.tw/" className="">
                  <span className="text_red">特輯</span>
                </a>
              </li>
              <li className="nav_desktop">
                <a href="//feature.u-car.com.tw/">專題</a>
              </li>
              <li className="nav_desktop">
                <a href="//motor.u-car.com.tw/" className="">
                  <span className="text_red">機車</span>
                </a>
              </li>
              <li className="nav_mobile">
                <a href="//gallery.u-car.com.tw/" className="">
                  圖片
                </a>
              </li>
              <li className="nav_desktop">
                <a href="//classroom.u-car.com.tw/">汽車教室</a>
              </li>
              <li className="nav_desktop">
                <a href="//f1.u-car.com.tw/">賽車</a>
              </li>
              <li className="nav_mobile">
                <a href="//tv.u-car.com.tw/" className="">
                  <span className="hidden-text">TV</span>影音
                </a>
              </li>
              <li className="nav_mobile">
                <a href="//am.u-car.com.tw/" className="">
                  <span className="text_red">
                    售後<span className="hidden-text">市場</span>
                  </span>
                </a>
              </li>
              <li className="nav_desktop">
                <a href="//life.u-car.com.tw/" className="">
                  <span className="text_blue">生活</span>
                </a>
              </li>
              <li className="nav_desktop">
                <a href="//audio.u-car.com.tw/">
                  <span className="text_blue">音響</span>
                </a>
              </li>
              <li className="nav_mobile">
                <a href="//forum.u-car.com.tw/" className="">
                  討論<span className="hidden-text">區</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
