// pages/my/my.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{
      image:"http://127.0.0.1:3030/img/user/user-mate-002.jpg",
      vip:true,
      name:"孙璐璐同学",
      sex:0,
      lv:10,
      text:"大家好,我是孙璐璐,多多关照",
      Collection:20,
      attention:9986,
      fan:261,
      sign:true,
      class:200,
      time:555500505
    },
    house:0,
    mouse:0,
    navlist: [
      { id: 1, title: "我的老师", imga: "/pages/img/icon/icon-item001.png" },
      { id: 2, title: "我的课程", imga: "/pages/img/icon/icon-item002.png" },
      { id: 3, title: "我的题库", imga: "/pages/img/icon/icon-item003.png" },
      { id: 4, title: "我的成绩", imga: "/pages/img/icon/icon-item004.png" },
      { id: 5, title: "最近观看", imga: "/pages/img/icon/icon-item005.png" },
      { id: 6, title: "我的下载", imga: "/pages/img/icon/icon-item006.png" }
    ],
    muclist: [
      { id: 1, title: "我的优惠", imga: "/pages/img/icon/icon-item007.png" },
      { id: 2, title: "我的金币", imga: "/pages/img/icon/icon-item008.png" },
      { id: 3, title: "我的店铺", imga: "/pages/img/icon/icon-item009.png" }
    ],
    hellist: [
      { id: 1, title: "我的订单", imga: "/pages/img/icon/icon-item010.png" },
      { id: 2, title: "邀请好友", imga: "/pages/img/icon/icon-item011.png" },
      { id: 3, title: "技术支持", imga: "/pages/img/icon/icon-item012.png" }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var house = parseInt(this.data.list.time/ 1000 / 3600) 
    console.log(house)
    this.setData({ house })
    var mouse = parseInt((this.data.list.time/1000/60)%60)
    this.setData({ mouse })
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