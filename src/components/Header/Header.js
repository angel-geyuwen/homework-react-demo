import React, { Component } from 'react'
import './header.css'
import  img from './images/log.jpg'
import  img1 from './images/baggage.jpg'
class Header extends Component {
  render () {
    return (
      <div className='header'>
      <div className="top">
      <a href="javascript:;" className="mulu"><i className="iconfont">&#xe651;</i></a>
      <img src={img} alt="" className="log"></img>
      <a href="javascript:;" className="sousuo"><i className="iconfont">&#xe607;</i></a>
      <img src={img1} alt="" className="baggage"></img>
      <span className="first"><a href="">登陆/</a></span>

      <span><a href="">注册</a></span>
    </div>
      </div>

    )
  }
}
export default Header
// export default header
// import React, { Component } from 'react'
// import './swiper.css'
//
// class Swiper extends Component {
//   render () {
//     return (
//       <div className='swiper'>
//         swiper
//       </div>
//     )
//   }
// }
//
// export default Swiper
