const latestArticles = [
  {
    id: 77073,
    title: '首搭3鏡頭EyeSight，詮釋日系跨界新紀元—Subaru Crosstrek試駕',
    summary:
      '過去國內市場熟悉的日系跨界代表Subaru XV，歷經改朝換代，以Crosstrek之名重新回到臺灣，透過新世代家族設計語彙、休旅風格堆疊，搭載3鏡頭EyeSight 4.0駕駛輔助系統等配備，Crosstrek能夠再掀日系跨界車型旋風，擔當品牌的銷售主力，甚至越級挑戰相近價格區間的中型SUV級距嗎？',
    category: 3,
    date: '2023/12/27',
  },
  {
    id: 76626,
    title: '蒙地拿的驕傲─Maserati Grecale Modena長里程試駕',
    summary:
      '位於義大利中北部的Modena，不但有「速度矽谷」之稱，是義大利超級跑車與超級摩托車的故鄉，也是新世代Maserati車型編成的中堅主力，是為運動愛好者所設計、可讓駕駛人享受駕駛樂趣和氛圍的車型，就像這次試車組特別再次借來進行長里程試駕的Grecale Modena……',
    category: 3,
    date: '2023/12/22',
  },
  {
    id: 76475,
    title: '延續75年GT傳奇─Maserati新世代壯遊先鋒GranTurismo',
    summary:
      'Maserati不只在1947年推出A6 1500 Gran Turismo、開啟品牌打造高性能GT跑車的先河，並於1957年發表3500 GT，還接續著推出3200GT、第一代GranTurismo等經典，且在2022年時，為車迷們帶來了全球矚目、首度新增純電動力選項的第二代GranTurismo。',
    category: 4,
    date: '2023/12/21',
  },
  {
    id: 75111,
    title: '經典回歸─Maserati GranTurismo Trofeo義大利羅馬試駕，設計乘用篇',
    summary:
      '應Maserati與總代理臺灣蒙地拿之邀，U-CAR試車組再次來到義大利最知名的古城：羅馬 (Roma)，準備好好地試駕換上3.0升V6雙渦輪增壓「海王星 (Nettuno)」汽油引擎、改成四輪驅動設定的GranTurismo Trofeo，並在試駕行程的休息點，淺嚐了GranTurismo Folgore的純電魅力！',
    category: 3,
    date: '2023/06/06',
  },
  {
    id: 74923,
    title: '在羅馬與天空相遇─Maserati MC20 Cielo義大利羅馬試駕',
    summary:
      '儘管試車組在2022年5月、便曾經在臺灣試駕過以Maserati賽車部門縮寫：「MC」，加上發表年份：2020 年之「20」為名的MC20，但在正式端上GranTurismo這盤主菜前，Maserati不僅先替我們安排了Grecale Trofeo的試駕，還為我們帶來了加上義大利文「天空」為副車名的MC20 Cielo……',
    category: 3,
    date: '2023/05/19',
  },
  {
    id: 74841,
    title: '一圓海神夢的快捷鍵─認識「Maserati Approved瑪莎拉蒂原廠認證中古車」',
    summary:
      '想要成為人人稱羨的Maserati車主也一樣，如果你知道「Maserati Approved瑪莎拉蒂原廠認證中古車」不僅擁有充足且多樣的現車、能夠免去你度過漫長交車期的痛苦，而且每一輛車的車況幾乎都等同於新車，並備有完整的配套服務，那麼、你就等於找到了一圓海神夢的快捷鍵！',
    category: 4,
    date: '2023/05/17',
  },
  {
    id: 73948,
    title: '無可取代的義式文化底蘊─Maserati Grecale內藏無限可能',
    summary:
      '汽車是人類的創作，高端汽車是展現理念與科技的絕頂工藝。人與車是息息相關的，我們在Maserati Grecale身上體驗了豐富與精彩，這不只是新世代跨界休旅，還有發自內在的義大利文化底蘊。',
    category: 4,
    date: '2023/02/15',
  },
  {
    id: 74325,
    title: '[捉對]豪華中型SUV巔峰之戰—Maserati Grecale GT vs. Porsche Macan',
    summary:
      'Macan不但是國內許多豪華品牌車主換購中型SUV時、腦海中第一個浮出來的選項，也實現了不少車迷想入主跑車品牌的夢想；不過，當已經成功進軍SUV戰場的Maserati，也在2022年3月挾著超強的競爭力、帶來品牌第二款SUV：Grecale後，Macan還能獨享這樣的光環嗎？',
    category: 3,
    date: '2023/03/24',
  },
  {
    id: 74118,
    title: '殺進豪華主戰場─Maserati Grecale GT試駕',
    summary:
      '雖然試車組已經在義大利領教過Grecale Trofeo與「海王星」引擎搭配的魅力，但是要想在豪華中型SUV市場裡開疆闢土，真正的關鍵X因子、其實還是得看建議售價新臺幣359萬元、擔綱入門主力的Grecale GT有幾斤實力；所以回國之後，我們馬上便和總代理臺灣蒙地拿敲定了這場約會……',
    category: 3,
    date: '2023/03/07',
  },
  {
    id: 74023,
    title: '海王星特調Espresso–Maserati Grecale Trofeo義大利羅馬試駕',
    summary:
      '就像是最能夠代表義大利的Espresso一樣，Grecale雖然車身尺碼比自家休旅兄弟小了一號，但是它不只濃縮了整個Stellantis集團的精華，也保留這個百年品牌的傳統與優雅、性能表現濃烈卻不矯情，並為駕駛人們準備了這款搭載「海王星」引擎的Double Espresso：Grecale Trofeo！',
    category: 3,
    date: '2023/02/22',
  },
  {
    id: 70198,
    title: '波賽頓的黃金戰車—Maserati MC20試駕',
    summary:
      '彷彿就像是希臘神話裡，總是忠實地伴隨海神出征的黃金戰車一樣，擁有630匹 (CV) 馬力、即將帶領Maserati重返賽道的MC20，靜的時候不但能立刻撫平愛琴海的大浪，給予乘客舒適且寧靜的行路質感，動起來還可以輕易地在岸邊掀起滔天巨浪，以強悍且直接的性能表現、回擊對手的無理挑釁！',
    category: 3,
    date: '2022/05/04',
  },
  {
    id: 70129,
    title:
      '這·就是我要的義式浪漫—2022 Maserati Trident Glamping與Levante GT/Modena試駕',
    summary:
      '不但已將原廠「Gran Tour」活動移師到臺灣進行，且每兩年就會舉辦令人血脈賁張的賽道日，為了讓國內Maserati車主與媒體能夠在山林裡、享受義大利獨有生活美學，總代理臺灣蒙地拿特別替我們規劃了這趟既有美食佳餚，又能充分體驗車輛出色性能的「2022 Trident Glamping」義式奢華露營行程……',
    category: 3,
    date: '2022/04/18',
  },
  {
    id: 68523,
    title: '百年海神的混能新魅力—Maserati Levante GT',
    summary:
      '1914年的12月1日，為了將征戰賽道多年所累積的技術與經驗、運用在自己生產的市售車上，以Alfieri為首的Maserati兄弟們，在義大利的米蘭、成立了今日Maserati的前身：Officini Alfieri Maserati；一個世紀之後，為了找回創辦人的初心，Maserati不但已在2020年的9月、推出配置自家3.0升V6渦輪增壓汽油引擎的品牌第二款超級跑車：MC20，更在2021年的4月、帶來了也是植入自家2.0升直4渦輪增壓高效混能系統的Levante GT！',
    category: 4,
    date: '2021/11/23',
  },
];

export default latestArticles;
