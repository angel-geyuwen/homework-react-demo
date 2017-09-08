import React, { Component } from 'react'
import './app.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Swiper from '../Swiper/Swiper'
import Clear from '../Clear/Clear'
import Reset from '../Reset/Reset'
class App extends Component {
  render () {
    return (
      <div className='app'>
        <Header />
        <Swiper />
        <Main />
        <Footer />
        <Reset />
        <Clear />
      </div>
    )
  }
}

export default App
