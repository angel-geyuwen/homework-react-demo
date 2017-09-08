import React, { Component } from 'react'
import './swiper.css'
import img1 from './images/1.jpg'
import  img2 from './images/2.jpg'
import  img3 from './images/3.jpg'
import  img4 from './images/4.jpg'
class Swiper extends Component {
  render () {
    // var mySwiper = new Swiper ('.swiper-container', {
    //   slidesPerView: 3,
    //   effect : 'coverflow',
    //   direction: 'horizontal',
    //   loop: true,
    //
    //   nextButton: '.swiper-button-next',
    //   prevButton: '.swiper-button-prev',
    return (

      <div className='swiper'>
        <div className="swiper-container">
    	    	<div className="swiper-wrapper">
    	        <div className="swiper-slide">
    	        	<img src={img1} alt=""></img>


    	        	<img src={img2} alt=""></img>


    	        	<img src={img3} alt=""></img>


    	        	
    	        </div>
    	    </div>

    	    <div className="swiper-pagination"></div>


    	    <div className="swiper-button-prev"></div>
    	    <div className="swiper-button-next"></div>


    	    <div className="swiper-scrollbar"></div>
    		</div>
      </div>
    )
  }
}
export default Swiper
