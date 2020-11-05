export default {
  pages: [
    'pages/index/index',
    "pages/discovery/discovery",
    "pages/home/home"

  ],
  tabBar: {
    list: [{
      pagePath: "pages/index/index",
      text: "首页"
    }, {
      pagePath: "pages/discovery/discovery",
      text: "发现"
    }, {
      pagePath: "pages/home/home",
      text: "我的"
    }]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
