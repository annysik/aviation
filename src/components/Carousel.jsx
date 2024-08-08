import React from 'react'
import imageOne from '../images/imageOne.jpg'
import imageTwo from '../images/imageTwo.jpg'
import imageThree from '../images/imageThree.jpg'
const Carousel = () => {
  return (
    <div>
       <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={imageOne} class="d-block w-100" alt="aircraft" style={{height: "91.2vh"}}/>
            </div>
            <div class="carousel-item">
            <img src={imageTwo} class="d-block w-100" alt="aircraft" style={{height: "91.2vh"}}/>
            </div>
            <div class="carousel-item">
            <img src={imageThree} class="d-block w-100" alt="aircraft" style={{height: "91.2vh"}}/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
       </div>
    </div>
  )
}

export default Carousel
