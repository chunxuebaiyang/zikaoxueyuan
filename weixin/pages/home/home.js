// pages/home/home.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl:"http://127.0.0.1:3030/",
    good:true,
    list: [
      { id: 1, imag: "http://127.0.0.1:3030/img/banner/banner-001.jpg" },
      { id: 2, imag: "http://127.0.0.1:3030/img/banner/banner-002.jpg" },
      { id: 3, imag: "http://127.0.0.1:3030/img/banner/banner-003.jpg" },
      { id: 4, imag: "http://127.0.0.1:3030/img/banner/banner-004.jpg" },
      { id: 5, imag: "http://127.0.0.1:3030/img/banner/banner-005.jpg" },
      { id: 6, imag: "http://127.0.0.1:3030/img/banner/banner-006.jpg" }
    ],
    textImage:[
      { id: 1, imag: "http://127.0.0.1:3030/img/ad/ad-user-001.jpg" },
      { id: 2, imag: "http://127.0.0.1:3030/img/ad/ad-user-002.jpg" },
      { id: 3, imag: "http://127.0.0.1:3030/img/ad/ad-user-003.jpg" },
      { id: 4, imag: "http://127.0.0.1:3030/img/ad/ad-user-004.jpg" },
      { id: 5, imag: "http://127.0.0.1:3030/img/ad/ad-user-005.jpg" },
      { id: 6, imag: "http://127.0.0.1:3030/img/ad/ad-user-006.jpg" }
    ],
    navlist: [
      { id: 1, title: "校园", imga: "/pages/img/icon/icon-head-001.png" },
      { id: 2, title: "课程", imga: "/pages/img/icon/icon-head-002.png" },
      { id: 3, title: "题库", imga: "/pages/img/icon/icon-head-003.png" },
      { id: 4, title: "同学", imga: "/pages/img/icon/icon-head-004.png" },
      { id: 5, title: "讲座", imga: "/pages/img/icon/icon-head-005.png" },
      { id: 6, title: "问答", imga: "/pages/img/icon/icon-head-006.png" },
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
   * 点赞
   */
  goods:function(){
    console.log(this.data.good)
    var a = !this.data.good
    console.log(a)
    this.setData({good: a })
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