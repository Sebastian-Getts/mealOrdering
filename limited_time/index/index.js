//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tabList: [{
      name: "外送",
      id: 0,
      isActive: true
    }, {
      name: "自取",
      id: 1,
      isActive: false
    }],
  },

  handleTabsItemChange(e) {
    const { index } = e.detail;
    let { tabList } = this.data;
    tabList.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabList
    })
  },

  onLoad: function () {

  },

})
