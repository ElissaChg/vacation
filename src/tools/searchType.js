export const CITY = [
  {
    value: '',
    label: '全部縣市',
  },
  {
    value: 'Taipei',
    label: '臺北市',
  },
  {
    value: 'NewTaipei',
    label: '新北市',
  },
  {
    value: 'Taoyuan',
    label: '桃園市',
  },
  {
    value: 'Taichung',
    label: '臺中市',
  },
  {
    value: 'Tainan',
    label: '臺南市',
  },
  {
    value: 'Kaohsiung',
    label: '高雄市',
  },
  {
    value: 'Keelung',
    label: '基隆市',
  },
  {
    value: 'Hsinchu',
    label: '新竹市',
  },
  {
    value: 'HsinchuCounty',
    label: '新竹縣',
  },
  {
    value: 'MiaoliCounty',
    label: '苗栗縣',
  },
  {
    value: 'ChanghuaCounty',
    label: '彰化縣',
  },
  {
    value: 'NantouCounty',
    label: '南投縣',
  },
  {
    value: 'YunlinCounty',
    label: '雲林縣',
  },
  {
    value: 'ChiayiCounty',
    label: '嘉義縣',
  },
  {
    value: 'Chiayi',
    label: '嘉義市',
  },
  {
    value: 'PingtungCounty',
    label: '屏東縣',
  },
  {
    value: 'YilanCounty',
    label: '宜蘭縣',
  },
  {
    value: 'HualienCounty',
    label: '花蓮縣',
  },
  {
    value: 'TaitungCounty',
    label: '臺東縣',
  },
  {
    value: 'KinmenCounty',
    label: '金門縣',
  },
  {
    value: 'PenghuCounty',
    label: '澎湖縣',
  },
  {
    value: 'LienchiangCounty',
    label: '連江縣',
  },
]

export const ACTIVITY = [
  {
    value: '',
    label: '全部主題',
    img: '',
  },
  {
    value: '節慶活動',
    label: '節慶活動',
    img: '/img/unsplash_qDZ-Xd8dX6w.png',
  },
  {
    value: '自行車活動',
    label: '自行車活動',
    img: '/img/unsplash_qDBbM9Erwo4.png',
  },
  {
    value: '遊憩活動',
    label: '遊憩活動',
    img: '/img/Rectangle.png',
  },
  {
    value: '產業文化活動',
    label: '產業文化活動',
    img: '/img/Rectangle95.png',
  },
  {
    value: '年度活動',
    label: '年度活動',
    img: '/img/unsplash_kaDrFI9qNrU.png',
  },
  {
    value: '四季活動',
    label: '四季活動',
    img: '/img/unsplash_fS0zfcOYa4A.png',
  },
]

export const FOOD = [
  {
    value: '',
    label: '全部主題',
    img: '',
  },
  {
    value: '地方特產',
    label: '地方特產',
    img: '/img/unsplash_bRdRUUtbxO0.png',
  },
  {
    value: '中式美食',
    label: '中式美食',
    img: '/img/unsplash_jFu2L04tMBc.png',
  },
  {
    value: '甜點冰品',
    label: '甜點冰品',
    img: '/img/unsplash_LI368L2RZno.png',
  },
  {
    value: '異國料理',
    label: '異國料理',
    img: '/img/unsplash_b-2uxjTcxH0.png',
  },
  {
    value: '伴手禮',
    label: '伴手禮',
    img: '/img/unsplash_CnrDuY0tFrg.png',
  },
  {
    value: '素食',
    label: '素食',
    img: '/img/unsplash_4MEL9XS-3JQ.png',
  },
]

export const SCENICSPOT = [
  {
    value: '',
    label: '全部主題',
    img: '',
  },
  {
    value: '自然風景類',
    label: '自然風景類',
    img: '/img/unsplash_pn5c-CLWGzY.png',
  },
  {
    value: '觀光工廠類',
    label: '觀光工廠類',
    img: '/img/Rectangle93.png',
  },
  {
    value: '遊憩類',
    label: '遊憩類',
    img: '/img/Rectangle94.png',
  },
  {
    value: '休閒農業類',
    label: '休閒農業類',
    img: '/img/Rectangle95.png',
  },
  {
    value: '生態類',
    label: '生態類',
    img: '/img/unsplash_7tvbRQ5AKs4.png',
  },
  {
    value: '溫泉類',
    label: '溫泉類',
    img: '/img/unsplash_I8K-lIkvqYI.png',
  },
  {
    value: '古蹟類',
    label: '古蹟類',
    img: '/img/Rectangle98.png',
  },
]

export const FILTER_TYPE = (vm) => {
  return [
    {
      value: 'scenicspot',
      label: vm.$t('components.nav.scenicSpot'),
    },
    {
      value: 'activity',
      label: vm.$t('components.nav.activity'),
    },
    {
      value: 'food',
      label: vm.$t('components.nav.food'),
    },
  ]
}
