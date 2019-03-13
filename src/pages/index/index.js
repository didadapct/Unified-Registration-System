Page({
  data: {
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
    }),
    
    wx.showToast({
      title: '成功',
      icon:'success',
      duration: 3000,
      success:{
        
      }        
      })
    })
  }
})