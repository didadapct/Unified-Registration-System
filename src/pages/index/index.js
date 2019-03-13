//index.js
//获取应用实例
const app = getApp()

Page({


  /**
  * 页面的初始数据
  */
  data: {
    name: "",
    phone: '',
    idcard: "",
    type: "",
    defaultValue: "",
    description: "",
    tip: "",
    require: ""


  },


  //确认按钮把数据上传后台
  back_houtai: function (e) {
    var that = this;
    var name = e.detail.value.name;
    var idcard = e.detail.value.idcard;
    var phone = e.detail.value.phone;
    var self_intro = e.detail.value.self_intro;
    console.log(name)
    console.log(idcard)
    console.log(phone)
    console.log(self_intro)
    if (name == "" || phone == "" || idcard == "") {
      wx.showModal({
        title: '提示',
        content: '请输入正确完整的信息！',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
    else {
      console.log(e.detail.value)
    }



  },

  /**
  * 生命周期函数--监听页面加载
  */

  onLoad: function (options) {
  },



})
