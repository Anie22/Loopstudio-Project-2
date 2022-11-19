import {useState, useEffect} from 'react'
import AppLogo from './assets/logo.svg'
import Hamburger from './assets/icon-hamburger.svg'
import Close from './assets/icon-close.svg'
import Facebook from './assets/icon-facebook.svg'
import Instagram from './assets/icon-instagram.svg'
import Twitter from './assets/icon-twitter.svg'
import Pinterest from './assets/icon-pinterest.svg'
import './App.css'

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])
  return (
    <div className="container">
      <section className="first">
        <nav className="just-left">
          <img src={AppLogo} alt="logo" />
          <nav className="hamburger">
            <img onClick={toggleNav} src={Hamburger} className="ham" alt="" />
            {(toggleMenu || screenWidth > 900) && (
              <div className="tweeter">
                <div className="tweet">
                  <img src={Close} onClick={toggleNav} className="close" alt="" />
                    <ul className="d-flex">
                      <li>
                        <a href="">About</a>
                      </li>
                      <li>
                        <a href="">Careers</a>
                      </li>
                      <li>
                        <a href="">Events</a>
                      </li>
                      <li>
                        <a href="">Products</a>
                      </li>
                      <li>
                        <a href="">Support</a>
                      </li>
                    </ul>
                </div>
              </div>
            )}
          </nav>
        </nav>
        <div className="desc">
          Immersive <br /> experiences <br /> that deliver
        </div>
      </section>
      <section className="second">
        <div className="Inta"></div>
        <div className="text-holder">
          <h2 className="text">
            The leader in <br /> interactive VR
          </h2>
          <p className="small-text">
            Founded in 2011, Loopstudios has been producing world-class virtual reality 
            projects for some of the best companies around the globe. Our award-winning 
            creations have transformed businesses through digital experiences that bind 
            to their brand.
          </p>
        </div>
      </section>  
      <section className="third">
        <div className="title">
          <h4 className="sup-text">Our creations</h4>
          <p className="sub-text-1">See all</p>
        </div>
        <div className="create">
          <div className="create-1">Deep <br /> earth</div>
          <div className="create-2">Night <br /> arcade</div>
          <div className="create-3">Soccer <br /> team VR</div>
          <div className="create-4">The <br /> grid</div>
          <div className="create-5">From up <br /> above VR</div>
          <div className="create-6">Pocket <br /> borealis</div>
          <div className="create-7">The <br /> curiosity</div>
          <div className="create-8">Make it <br /> fisheye</div>
        </div>
        <p className="sub-text-2">See all</p>
      </section>
      <section className="fourth">
        <footer>
          <nav className="just-right">
            <img src={AppLogo} alt="logo" />
            <ul className="row">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Events</a>
              </li>
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
            </ul>
          </nav>
          <div className="f-dev">
            <div className="socail-icons">
              <img src={Facebook} alt="" />
              <img src={Twitter} alt="" />
              <img src={Pinterest} alt="" />
              <img src={Instagram} alt="" />
            </div>
            <div className="f-text">© 2021 Loopstudios. All rights reserved.</div>
          </div>
        </footer>
      </section>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Aniebiet Celestine</a>.
      </div>
    </div>
  )
}

export default App
