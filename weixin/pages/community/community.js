// pages/community/community.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl: "http://127.0.0.1:3030/",
    list:[
      { id: 1, url: 'http://127.0.0.1:3030/img/img/com-001.jpg',text:"五月签到活动进行中"},
      { id: 2, url: 'http://127.0.0.1:3030/img/img/mt-001.jpg',text:"五月签到活动进行中"},
      { id: 3, url: 'http://127.0.0.1:3030/img/img/mt-002.jpg',text:"五月签到活动进行中"},
      { id: 4, url: 'http://127.0.0.1:3030/img/img/com-001.jpg',text:"五月签到活动进行中"},
      { id: 5, url: 'http://127.0.0.1:3030/img/img/mt-001.jpg',text:"五月签到活动进行中"},
      { id: 6, url: 'http://127.0.0.1:3030/img/img/mt-002.jpg',text:"五月签到活动进行中"},
      { id: 7, url: 'http://127.0.0.1:3030/img/img/com-001.jpg',text:"五月签到活动进行中"},
      { id: 8, url: 'http://127.0.0.1:3030/img/img/mt-001.jpg',text:"五月签到活动进行中"},
      { id: 9, url: 'http://127.0.0.1:3030/img/img/com-001.jpg',text:"五月签到活动进行中"},
      { id: 10, url: 'http://127.0.0.1:3030/img/img/com-001.jpg',text:"五月签到活动进行中"}
    ],
    textImage: [
      { id: 1, imag: "http://127.0.0.1:3030/img/ad/ad-user-001.jpg" },
      { id: 2, imag: "http://127.0.0.1:3030/img/ad/ad-user-002.jpg" },
      { id: 3, imag: "http://127.0.0.1:3030/img/ad/ad-user-003.jpg" },
      { id: 4, imag: "http://127.0.0.1:3030/img/ad/ad-user-004.jpg" },
      { id: 5, imag: "http://127.0.0.1:3030/img/ad/ad-user-005.jpg" },
      { id: 6, imag: "http://127.0.0.1:3030/img/ad/ad-user-006.jpg" }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var baseUrl = app.globalData.baseUrl;
    console.log(baseUrl);
    this.setData({ baseUrl: baseUrl })
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
  
  }
})