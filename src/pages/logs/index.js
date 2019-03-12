// pages/logs/index.js
  const app = getApp() //必写
   Page({
    data: {
      list: {
        id: 6,
        name: '第四届微观摄影大赛',
        publisher: '植物保护学院',
        startTime: '2019-3-11 8:00:00',
        endTime: '2019-3-22 8:00:00-22:00:00'
    }
    },

    //事件处理函数
    onLoad: function () {
    var that = this
    wx.request({
      url: 'https://www.turing-cup.online/voteapp/activity',
      method: 'GET',

      header: {
        'Content-Type': 'application/json'
      },

      success: function (res) {
        that.setData({
          list: res.Data,
        })
      },
      fail: function (res) {
        console.log(res.Data)
      }
    })
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