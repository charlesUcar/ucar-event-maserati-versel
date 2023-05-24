const moreArticles = [
  {
    id: 71269,
    title:
      '限量Ghibli Fragment站台、布局府城的第一步，Maserati臺南品牌形象館正式開幕',
    summary:
      'Maserati總代理臺灣蒙地拿在臺南三井Mitsuo Outlet Park開設首間Maserati臺南品牌形象館，從6月1日起開始試營運，於今日 (7/8) 在臺灣蒙地拿總經理劉冠甫等貴賓的共同剪綵下隆重開幕，不僅代表Maserati已進一步將營運版圖延伸至臺南，也展現了總代理深耕臺灣市場的決心。',
    category: 1,
    date: '2022/07/08',
  },
  {
    id: 70544,
    title: '以「天空Cielo」為名、5月25日全球首演，Maserati公布敞篷MC20車名',
    summary:
      '無預警地在上週 (5/12) 以3張仰望視角的天空景致、宣布將在2022年的5月25日 (週三) 發表敞篷版MC20的Maserati，昨晚 (5/16) 不僅在官方社群媒體正式確認了這個消息，也正式對外公布這款MC20的全新敞篷車型，副車名將會加上義大利文的「天空」，以浪漫的MC20 Cielo為名。',
    category: 1,
    date: '2022/05/17',
  },
  {
    id: 70084,
    title:
      '[U-EV]Maserati攜手ROKiT Venturi Racing車隊，出征ABB FIA Formula E世界錦標賽第9賽季',
    summary:
      '以「三叉戟」為廠徽的Maserati，計畫攜手ROKiT Venturi Racing車隊，於ABB FIA Formula E世界錦標賽第9賽季亮相，並於上周末 (4/9~4/10) 舉辦的羅馬站比賽中，正式宣佈這一全新合作夥伴關係，作為首個出征Formula E的義大利品牌，Maserati將使用全新Gen3賽車角逐該賽事。',
    category: 1,
    date: '2022/04/13',
  },
  {
    id: 69910,
    title: '街頭最美麗的義大利精品，臺灣首輛Maserati MC20交付',
    summary:
      '承襲Maserati百年GT精神與賽道科技的MC20，自從2021年10月正式抵臺發表後，不但已吸引多位層峰買家下訂，讓原廠所提供的2022年式限量配額於短短一周內全數接單完售，總代理臺灣蒙地拿順利完成車測後，國內首輛MC20也已於2022年3月底前正式交付車主，將成為街頭最美麗的風景。',
    category: 1,
    date: '2022/03/30',
  },
  {
    id: 69562,
    title: '全球交付24,269輛、輕油電車型出線，Maserati 2021年銷售成長41%',
    summary:
      '根據原廠剛公布的財報來看，即將在3月22日首發品牌第二款SUV：Grecale的Maserati，不但在2021年交付了24,269輛新車、較2020年大幅成長41%，而且在兩款2.0升輕油電車型的加持下，Maserati還在包括臺灣的大中華區市場，寫下了交付7,747輛、較2020年增加58%的亮眼紀錄！',
    category: 1,
    date: '2022/03/02',
  },
  {
    id: 69477,
    title:
      '[U-EV] 採雙馬達四驅配置，外傳電動版Maserati Grecale Folgore 將擁有680匹馬力',
    summary:
      '根據外媒近日報導，電動版Maserati Grecale將會命名為Grecale Folgore，「Folgore」意即義大利文中的閃電，用以表明其電動車的身分。此外，Grecale Folgore或將採用雙馬達配置，使其擁有達到500kW的輸出，將成為Maserati有史以來輸出最高的量產車款。',
    category: 1,
    date: '2022/02/21',
  },
  {
    id: 69328,
    title: '全新內外專屬識別，Maserati推出MC Edition新車型',
    summary:
      'Maserati近日針對Ghibli和Quattroporte轎車以及Levante休旅車的MC Edition新車型選擇。代表Maserati Corse的MC Edition，不僅詮釋了Maserati毫不妥協的性能和賽車精神，也回顧了Maserati自1926年起開始參與賽車活動後所建立的盛名。',
    category: 1,
    date: '2022/02/04',
  },
  {
    id: 69206,
    title:
      '全臺限定30席、以宙斯之子為名，Maserati Levante GT Eracle Edition開始接單',
    summary:
      'Maserati總代理在2021年11月發表新增GT與Modena S兩款車型的2022年式Levante車系後，又在今日 (1/21) 限量推出30輛、標配ADAS與進階煞車套件，且升級21吋專屬「Eracle」鋁圈的Levante GT Eracle Edition，並預告這款新臺幣468萬元起的特式車，很快就會在2022年第二季抵臺開始交車。',
    category: 1,
    date: '2022/01/21',
  },
  {
    id: 68914,
    title: '經典三叉戟海神重生，Maserati Classiche經典車計畫正式啟動',
    summary:
      '隨著一輛1969年出廠的Mistral 3700、成功取得Maserati Classiche經典車計畫的第一份認證，Maserati也在日前正式宣布Maserati Classiche經典車計畫正式啟動；Maserati Classiche經典車計畫是專為收藏家和客戶提供、針對車齡超過20年的Maserati車型及限量特式版的專屬服務。',
    category: 1,
    date: '2021/12/23',
  },
  {
    id: 68854,
    title:
      '品牌大使盡顯個性魅力，Maserati為貝克漢打造專屬MC20 Fuoriserie Edition',
    summary:
      '為了展現自己對邁阿密的熱情，Maserati全球品牌大使大衛·貝克漢 (David Beckham)，特別在日前化身為汽車設計師、Maserati設計中心 (Maserati Centro Stile) 內，將邁阿密迷幻絢麗的城市風格注入MC20之中，訂製了專屬於他個人的 MC20 Fuoriserie Edition，掀起最直覺的感官衝擊。',
    category: 1,
    date: '2021/12/16',
  },
  {
    id: 62206,
    title: '向無冕王Sir Stirling Moss致敬，Maserati展出MC20客製塗鴉原型車',
    summary:
      '為了向2020年4月12日以90歲高齡逝世、有著「無冕王」之稱的傳奇車手：Sir Stirling Moss致敬，Maserati特別在5月13日、Sir Stirling Moss於1956年駕駛Maserati 250F獲勝的這天，展出一輛擁有特殊客製塗鴉的MC20原型車！',
    category: 1,
    date: '2020/05/14',
  },
];

export default moreArticles;
