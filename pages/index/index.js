//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '点击头像开始答题',
    userInfo: {},
    userOpenid : "abc",
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../question/question'
    })
  },
  onLoad: function () {
    console.log("oo");
    if (app.globalData.userInfo) {


////////////



////////
      this.setData({
        userInfo: app.globalData.userInfo,
        
      userOpenid: app.globalData.userOpenid,
        hasUserInfo: true
      })

   //   console.log(app.globalData.userOpenid)
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          userOpenid: app.globalData.userOpenid,
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
