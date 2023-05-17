import Head from 'next/head';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <div id="mySidenav" className="sidenav" style={{ width: 0 + 'px' }}>
        <div className="sidenav_scroller">
          <div className="sidemenu_all">
            <p className="item_menu_title">熱門</p>
            <a href="//m.u-car.com.tw/" className="label_menu">
              <span className="icon icon_home"></span>首頁
            </a>
            <a href="//m.u-car.com.tw/newcar" className="label_menu">
              <span className="icon icon_new_car"></span>新車
            </a>
            <a href="//sales.u-car.com.tw/sales" className="label_menu">
              <span className="icon icon_sales"></span>汽車好業代
            </a>
            <a href="//m.u-car.com.tw/usedcar" className="label_menu">
              <span className="icon icon_sec_hand_car"></span>二手車
            </a>
            <a href="//news.u-car.com.tw/news/articles" className="label_menu">
              <span className="icon icon_news"></span>新聞
            </a>
            <a
              href="//promotion.u-car.com.tw/promotion/articles"
              className="label_menu"
            >
              <span className="icon icon_promotion"></span>促銷
            </a>
            <a
              href="//roadtest.u-car.com.tw/roadtest/articles"
              className="label_menu"
            >
              <span className="icon icon_roadtest"></span>試車
            </a>
            <a href="//mook.u-car.com.tw/mook" className="label_menu">
              <span className="icon icon_mook"></span>徹底研究
            </a>
            <a
              href="//collection.u-car.com.tw/collection/list"
              className="label_menu"
            >
              <span className="icon icon_collection"></span>特輯
            </a>
            <a
              href="//feature.u-car.com.tw/feature/articles"
              className="label_menu"
            >
              <span className="icon icon_feature"></span>專題
            </a>
            <a
              href="//motor.u-car.com.tw/motor/articles"
              className="label_menu"
            >
              <span className="icon icon_motor"></span>機車
            </a>
            <a href="//am.u-car.com.tw/am" className="label_menu">
              <span className="icon icon_AM"></span>售後市場
            </a>
            <a href="//m.u-car.com.tw/life" className="label_menu">
              <span className="icon icon_life"></span>生活
            </a>
            <a href="//m.u-car.com.tw/forum" className="label_menu">
              <span className="icon icon_forum"></span>討論區
            </a>
            <p className="item_menu_title">多媒體</p>
            <a href="//tv.u-car.com.tw/tv" className="label_menu">
              <span className="icon icon_TV"></span>TV影音
            </a>
            <a href="//m.u-car.com.tw/galleries" className="label_menu">
              <span className="icon icon_image"></span>圖片
            </a>
          </div>
        </div>
      </div>
      <main className="out_wrap" id="myMain">
        {children}
      </main>
    </>
  );
};

export default PrimaryLayout;
