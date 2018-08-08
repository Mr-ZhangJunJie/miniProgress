// pages/us/us.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myProperty:[{
      title:"钱包",
      count:"0.00",
      util:"元",
      color:"#FBAF10"
    },{
      title: "优惠",
      count: "0",
      util: "个",
      color: "#F06D51"
    },{
      title: "积分",
      count: "0",
      util: "分",
      color: "#77B025"
    }],
    myMessageItems:[{
      url:"",
      iconUrl:"../../image/address.png",
      title:"收货地址"
    },
    {
      url: "",
      iconUrl: "../../image/chong.png",
      title: "充值中心"
    },
    {
      url: "",
      iconUrl: "../../image/youhuique.png",
      title: "领取优惠券"
    },
    {
      url: "",
      iconUrl: "../../image/address.png",
      title: "我的优惠券"
    }
    ],
    otherItems:[
      {
        url: "",
        iconUrl: "../../image/kefu.png",
        title: "商家入口"
      },
      {
        url: "",
        iconUrl: "../../image/help.png",
        title: "客服帮助"
      }
    ],
    businessItems: [
      {
        url: "",
        iconUrl: "../../image/shangjia.png",
        title: "商家入口"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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