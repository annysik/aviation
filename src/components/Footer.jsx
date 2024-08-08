import {useEffect} from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'

const Footer = (props) => {

    useEffect(()=>{
        aos.init({
            duration: 3000
        })
      }, [])
      
  return (
    <div className='mt-5 p-5 bg-black text-light'>
      <div className='d-flex justify-content-around'>
        <div>
            <p>
                Appland is completely creative, lightweight, clean app landing page. 
            </p>
            <p>
                Made with byDesigning
            </p>
            <div className='d-flex' data-aos={props.flip}>
                <div className='me-5'><FaFacebookF /></div>
                <div className='me-5'><FaPinterestP /> </div>
                <div className='me-5'><i class="bi bi-skype"></i></div>
                <div className='me-5'><i class="bi bi-twitter-x"></i></div>
            </div>
        </div>
        <div>
            <ul>
                <li><h4 href="#"></h4>About</li>
                <li><a href="#"></a>About Us</li>
                <li><a href="#"></a>Coporate Sales</li>
                <li><a href="#"></a>Terms &amp; Policy</li>
                <li><a href="#"></a>Community</li>
            </ul>
        </div>
        <div>
            <ul>
                <li><h4 href="#"></h4>Support</li>
                <li><a href="#"></a>Help</li>
                <li><a href="#"></a>Support</li>
                <li><a href="#"></a>Privacy Policy</li>
                <li><a href="#"></a>Term &amp; Conditions</li>
                <li><a href="#"></a>Help &amp; support</li>
            </ul>
        </div>
        <div>
            <ul>
                <li><h4 href="#"></h4>Call Centre</li>
                <li><a href="#"></a>Email Us</li>
                <li><a href="#"></a>Coporate Sales</li>
                <li><a href="#"></a>Terms &amp; Conditions</li>
                <li><a href="#"></a>Help Center</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
