import request from 'superagent'
import jsonp from 'superagent-jsonp'


const state = {
  subject: {},
  classify: '',
  adImgUrl: 'http://img.hb.aicdn.com/c1dd2a72fa6412bd455868be68ca402cf9f94b84e688-WMTPtp_fw658',
  questions: [{
    title: '大家为什么对国产片这么苛刻？',
    comments: '35回答'
  },
  {
    title: '有没有人喜欢凯凯王版的汤川学？',
    comments: '19回答'
  },
  {
    title: '真的有饭店的打包袋长的和优衣库一样吗？',
    comments: '11回答'
  },
  {
    title: '最后结尾 石鸿问“这道题难吗？”，唐川说“很难”，什么意思？  ?',
    comments: '7回答'
  }]
}

const getters = {
  
}