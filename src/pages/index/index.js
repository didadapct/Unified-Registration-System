//index.js
//获取应用实例
const app = getApp()

Page({


  /**
  * 页面的初始数据
  */
  data: {


  },


  //确认按钮把数据上传后台
  back_houtai: function (e) {
    var that = this;
    var total_score = e.detail.value.name;
    var major_score = e.detail.value.idcard;
    var enroll_date = e.detail.value.phone;
    var self_intro = e.detail.value.self_intro;
    console.log(name)
    console.log(idcard)
    console.log(phone)
    console.log(self_intro)
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
  },

})
