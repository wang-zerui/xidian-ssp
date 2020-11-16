export default {
  pages: [
    'pages/index/index',
    "pages/discovery/discovery",
    "pages/home/home"

  ],
  tabBar: {
    selectedColor: "#5F86F2",
    list: [{
      pagePath: "pages/index/index",
      iconPath: "./asset/images/index.png",
      selectedIconPath: "./asset/images/sindex.png",
      text: "首页"
    }, {
      pagePath: "pages/discovery/discovery",
      iconPath: "./asset/images/discovery.png",
      selectedIconPath: "./asset/images/sdiscovery.png",
      text: "发现"
    }, {
      pagePath: "pages/home/home",
      iconPath: "./asset/images/home.png",
      selectedIconPath: "./asset/images/shome.png",
      text: "我的"
    }]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#5F86F2',
    navigationBarTitleText: '校招SSP',
    navigationBarTextStyle: 'white'
  }
}
