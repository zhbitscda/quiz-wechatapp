const app = getApp()


var interval = null //倒计时函数

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    date: '请选择日期',
    fun_id: 2,
    time: '倒计时', //倒计时 
    currentTime: 11,
    question:"床前明月光，下一句是?",
    answer1:"举头望明月",
    answer2: "低头思故乡",
    answer3: "疑是地上霜",
    answer4:"不会就选C",
    right_answer:"",
    disabled1 :"false"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo 
    })
    this.getVerificationCode()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

getCode: function (options) {
    var that = this;
    var currentTime = that.data.currentTime
    interval = setInterval(function () {
      currentTime--;
      that.setData({
        time: currentTime + '秒'
      })
      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          time: 'reload',
          currentTime: 11,
          disabled: false
        })
      }
    }, 1000)
  },
  getVerificationCode() {
    this.getCode();
    var that = this
    that.setData({
      disabled: true
    })
  },

  bindAnswer : function(e) {

    console.log(e.currentTarget.id);
  }

})