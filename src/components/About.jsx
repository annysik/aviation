import {useEffect} from 'react'
import imageTen from '../images/imageTen.jpg'
// import '../css/components/about.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'

const About = (props) => {

  useEffect(()=>{
    aos.init({
        duration: 2000
    })
  }, [])

  return (
    <div className='about-overall-container'>
      <h2 className='text-center pt-5'>About Us </h2>
      <div className='about-container d-flex w-75 mx-auto my-5 pb-5'>
        <div className='m-2' data-aos={props.zoom}>
            <img src={imageTen} alt="about-us" />
        </div>
        <div className='about-text-container m-2'>
            <h4>What We Are About</h4>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum eveniet voluptate, minus excepturi qui omnis, cum perspiciatis at sunt aliquid pariatur, dolorem recusandae dolor voluptas ad saepe vero eos. Neque.
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum eveniet voluptate, minus excepturi qui omnis, cum perspiciatis at sunt aliquid pariatur, dolorem recusandae dolor voluptas ad saepe vero eos. Neque.
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum eveniet voluptate, minus excepturi qui omnis, cum perspiciatis at sunt aliquid pariatur, dolorem recusandae dolor voluptas ad saepe vero eos. Neque.
            </p>
        </div>
      </div>
    </div>
  )
}

export default About
