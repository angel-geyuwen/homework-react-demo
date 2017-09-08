import React, { Component } from 'react'
import './main.css'
import img from './images/预售.jpg'
import img1 from './images/overwatch_03.jpg'
import img2 from './images/bigpic_03.jpg'
class Main extends Component {
  render () {
    return (
      <div className='main'>
      <div className="inner">
    <div className="content">
      <div className="left">
        <div className="sale">
          <img src={img} alt=""></img>
          <span className="T">龙之谷六周年限定礼包大Boss冰龙款男士T恤</span>
        </div>
        <div className="endtime">
          <p>距预售结束</p>
          <div className="time">
            <span className='date'></span>
            <span>:</span>
            <span className='hour'></span>
            <span>:</span>
            <span className='minute'></span>
            <span>:</span>
            <span className='second'></span>
            <span>天</span>
            <span>时</span>
            <span>分</span>
            <span>秒</span>
          </div>

        </div>
        <div className="watch">
          <span>相关专区</span>
          <br></br>
          <img src={img1} alt=""></img>
        </div>
        <div className="share">
          <span>分享</span>
          <a href="javascript:;"><i className="iconfont">&#xe60d;</i></a>
          <a href="javascript:;"><i className="iconfont">&#xe615;</i></a>
        </div>
      </div>
      <div className="right">
        <div className="money">
          <span>定金</span>
          <div className="money1">
            <span>￥500.00</span><br></br>
            <span>全款金额：￥1500.00</span>
          </div>

        </div>
        <div className="style">
          <span>款式</span>
          <a href="javascript:;">iPhone5</a>
          <a href="javascript:;">iPhone6</a>
          <a href="javascript:;">iPhone6+</a>
        </div>
        <div className="size">
          <span>尺码</span>
          <a href="javascript:;">XXS</a>
          <a href="javascript:;">XS</a>
          <a href="javascript:;">S</a>
          <a href="javascript:;">M</a>
          <a href="javascript:;">L</a>
          <a href="javascript:;">XL</a>
          <a href="javascript:;">XXL</a>
        </div>
        <div className="num">
          <span>数量</span>
          <a href="javascript:;" className="sub">-</a>
          <input type="text" value="1" className="num1"></input>
          <a href="javascript:;" className="add">+</a>
        </div>
        <div className="tips">
          <span className="yellow">注：</span><span className="white">商品将于</span><span className="yellow">2016/10/5</span><span className="white">统一发货!</span>
        </div>
      </div>
      <div className="bottom clear">
        <a href="pages/购物车/old.html">立即预订</a>
      </div>
    </div>
    <img src={img2} alt=""></img>
  </div>
      </div>
    )
  }
}

export default Main
