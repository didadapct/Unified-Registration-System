Page({
  data: {
    test: {
      success: 0,
      reason: 'nowhy'
    }
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://www.turing-cup.online/voteapp/activity/:id',
      method: 'GET',

      header: {
        'Content-Type': 'application/json'
      },

      success: function (res) {
        that.setData({
          form: res.Data,
        })
      },
      fail: function (res) {
        console.log(res.Data)
      }
    })
  },
  ordermeeting: function () {
    var that = this
    wx.request({
      url: 'https://www.turing-cup.online/voteapp/activity/:id',
      method: 'post',
    //这里是发送给服务器的参数（参数名：参数值）  
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      success: function (res) {
        wx.navigateBack({
          delta: 1  //小程序关闭当前页面返回上一页面
        }),
        that.setData({
          test: res.Data,
        })
    if (test.success) {
      wx.showToast({

        title: '成功',
        icon: 'success',
        duration: 2000
      })
    }
    if(test.problem)
    {
        that.setData({
          problem:test.reason
        })      
    }
   }
  })
  }
})