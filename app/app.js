const express = require('express')
const nodePackage = require('../package.json')
const port = process.env.NODE_ENV === 'production' ? 80 : 3000

const config = {
  version: nodePackage.version,
  name: nodePackage.name,
}

const app = express()
app.use(express.static('dist'))

app.get('/config', (req, res) => {
  res.json(config)
})

/* 測試 */
// app.get('/Tourism/Activity', (req, res) => {
//   const _ac = [
//     {
//       ActivityID: 'C2_315080000H_502037',
//       ActivityName: '2022年第十屆澎湖灣國際帆船公開賽',
//       Description:
//         '澎湖位於臺灣海峽中央，因為多島嶼及海灣的特殊地理環境，近年來許多超級遊 艇與帆船慕名而來，除了連續舉辦多年的亞洲風浪板巡迴賽之外，2010年的海峽盃帆船賽一直到2022年第十屆澎湖島帆船週系列賽，已經連續第11年在澎湖舉辦。',
//       Location: '馬公第一漁港',
//       Address: '澎湖馬公亞果遊艇碼頭',
//       Phone: '886-2-87711442',
//       Organizer: '中華民國帆船協會',
//       StartTime: '2022-06-17T10:00:00+08:00',
//       EndTime: '2022-06-21T17:00:00+08:00',
//       Picture: {},
//       Position: {
//         PositionLon: 119.56814575195312,
//         PositionLat: 23.563018798828125,
//         GeoHash: 'wsjn0cdbe',
//       },
//       Class1: '其他',
//       SrcUpdateTime: '2022-01-08T01:12:40+08:00',
//       UpdateTime: '2022-01-08T02:04:30+08:00',
//     },
//     {
//       ActivityID: 'C2_315081000H_020299',
//       ActivityName: '馬祖年度節慶活動 (Matsu Festival Activities)',
//       Description:
//         '馬祖民俗節慶活動，最熱鬧的過年，一路到九月的馬祖昇天祭，還有扛乩、擺暝等特殊文化，元宵節是其中之最，從農曆元月十一日開始，可以一路延續到元月十九、甚至是二十日！',
//       Location: '連江縣南竿鄉仁愛村95-1號',
//       Address: '連江縣南竿鄉仁愛村95-1號',
//       Phone: '886-836-25630',
//       Organizer: '交通部觀光局馬祖國家風景區',
//       StartTime: '2021-04-30T00:00:00+08:00',
//       EndTime: '2050-12-31T00:00:00+08:00',
//       Picture: {},
//       Position: {
//         PositionLon: 119.91219329833984,
//         PositionLat: 26.143110275268555,
//         GeoHash: 'wstk8xjqs',
//       },
//       Class1: '節慶活動',
//       Class2: '節慶活動',
//       SrcUpdateTime: '2022-01-08T01:12:40+08:00',
//       UpdateTime: '2022-01-08T02:04:30+08:00',
//     },
//     {
//       ActivityID: 'C2_376540000A_004985',
//       ActivityName: '2022山海新生 潛力之島海陸跨年活動',
//       Description:
//         '2022山海新生 潛力之島海陸跨年活動活動資訊：活動日期時間：110.12.31(五)晚上20:30-111.1.1(六)凌晨00:30地點：石朗潛水區更多訊息請參閱潛進綠島粉絲專頁:https://www.facebook.com/DiveGreenIsland.Taiwan',
//       Location: '詳見官網',
//       Phone: '886-8-9326141',
//       Organizer: '綠島鄉公所',
//       StartTime: '2021-12-31T20:30:00+08:00',
//       EndTime: '2022-01-01T00:30:00+08:00',
//       Picture: {},
//       Position: {
//         PositionLon: 121.47454071044922,
//         PositionLat: 22.65576934814453,
//         GeoHash: 'wsn2uhr53',
//       },
//       Class1: '年度活動',
//       SrcUpdateTime: '2022-01-08T01:12:40+08:00',
//       UpdateTime: '2022-01-08T02:04:30+08:00',
//     },
//     {
//       ActivityID: 'C2_315080000H_080694',
//       ActivityName: '南投星空季',
//       Description:
//         '每年7/20至8/20左右登場的「英仙座流星雨」，是年度三大流星雨之一，台灣即將在8/13迎來極大期，預估當日凌晨3至4點甚至可觀賞到近百顆流星從天空劃過！民眾欲觀賞這場精彩可期的流星雨，可選擇低光害、空中無遮蔽物的地點，如南投合歡山、日月潭、溪頭、杉林溪等，皆是海拔高、視野遼闊、低光害汙染的絕佳觀星旅遊景點。其中合歡山國際暗空公園更可以說是全台最友善的高海拔觀星景點。活動自民國106年（西元2017年）起舉行，原僅於清境地區進行高山觀星音樂會活動。民國108年（西元2019年）合歡山暗空公園認證通過後，南投縣政府為擴大行銷觀星旅遊資源，以分流概念於活動期間，在南投各地舉辦觀星及音樂會活動。主要舉辦地點包含清境地區、暗空公園範圍（鳶峰停車場）以及溪頭等地。',
//       Location: '南投縣 仁愛鄉',
//       Address: '清境農場',
//       Organizer: '南投縣政府',
//       StartTime: '2022-07-01T00:00:00+08:00',
//       EndTime: '2022-09-30T00:00:00+08:00',
//       Cycle: '2022年時間未定',
//       Picture: {
//         PictureUrl1:
//           'https://www.taiwan.net.tw/att/event/e7d96932-6633-4a2c-b724-c1ad89893c19.jpg',
//         PictureDescription1: '星空季-日月潭水社碼頭',
//         PictureUrl2:
//           'https://www.taiwan.net.tw/att/event/1c172de5-627f-485c-ac74-01d08a696a8d.jpg',
//         PictureDescription2: '星空季-遠眺日月潭',
//         PictureUrl3:
//           'https://www.taiwan.net.tw/att/event/36757176-876c-477e-9118-48e872937e8a.jpg',
//         PictureDescription3: '星空季-合歡山',
//       },
//       Position: {
//         PositionLon: 121.1628189086914,
//         PositionLat: 24.058509826660156,
//         GeoHash: 'wsq0v5snf',
//       },
//       Class1: '節慶活動',
//       Class2: '藝文活動',
//       City: '南投縣',
//       SrcUpdateTime: '2022-01-08T01:12:40+08:00',
//       UpdateTime: '2022-01-08T02:04:30+08:00',
//     },
//   ]
//   res.status(200).json(_ac)
// })

app.listen(port, '0.0.0.0', () => {
  console.log(`srart in ${port} port !`)
})
