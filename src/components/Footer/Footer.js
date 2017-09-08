import React, { Component } from 'react'
import './footer.css'
import img from './images/log.jpg'
import img1 from './images/erweima_03.jpg'
import img2 from './images/erweima_03.jpg'
import img3 from './images/sanjiao_03.jpg'
import img4 from './images/sanjiao_03.jpg'

class Footer extends Component {
  render () {
    return (
      <div className='footer'>
      <div className="footer_inner">
      <div className="fleft">
        <p>帮助信息</p>
        <ul className='ulup'>
          <li><i className="iconfont">&#xe602;</i><span>购物指南</span></li>
          <li><i className="iconfont">&#xe66b;</i><span>支付方式</span></li>
          <li><i className="iconfont">&#xe613;</i><span>配送方式</span></li>
          <li><i className="iconfont">&#xe6d2;</i><span>售后服务</span></li>
        </ul>
        <ul className='uldown'>
          <li><i className="iconfont">&#xe604;</i><span>服务中心</span></li>
          <li><i className="iconfont">&#xe667;</i><span>关于我们</span></li>
          <li><i className="iconfont">&#xe618;</i><span>免责条款</span></li>
          <li><i className="iconfont">&#xe620;</i><span>友情链接</span></li>
        </ul>
      </div>
      <div className="fmid">
      <p>关注我们</p>
        <img src={img1} alt=""></img>
        <img src={img2} alt=""></img>
        <img src={img3} alt=""></img>
        <img src={img4} alt=""></img>
        <span><i className="iconfont">&#xe60a;</i></span>
        <span><i className="iconfont">&#xe603;</i></span>
      </div>
      <div className="fright">
        <p>客服热线</p>
        <span><i className="iconfont">&#xe604;</i></span>
        <div className="phone">
          <span>400 113 5353</span><br></br>
          <span>[周一至周五 9:00-18:00]</span>
        </div>
      </div>
    </div>
    <div className="footer_bottom">
      <img src={img} alt=""></img>
      <span>北京开普乐科技有限公司©版权所有 Copyright 2015-2025 Morethan.cc All rights reserved.</span><br></br>
      <span>地址：北京市朝阳区建国路93号院4号楼4层505</span>
    </div>
      </div>
    )
  }
}

export default Footer
