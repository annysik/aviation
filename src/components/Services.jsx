import {useEffect} from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'

const Services = (props) => {

    useEffect(()=>{
        aos.init({
            duration: 2000
        })
    }, [])

  return (
    
   <div className='container my-3'>
     <h4 className='text-center my-4'>{props.title}</h4>
     <div className='d-flex '>
        <div className="card mx-2" data-aos={props.left} >
           <img src={props.imageFour} className="card-img-top" alt="..." style={{height:'30vh'}}/>
            <div className="card-body">
                <h5 className="card-title">{props.titleOne}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        <div className="card mx-2 " data-aos={props.center} >
                <img src={props.imageFive} className="card-img-top" alt="..." style={{height:'30vh'}}/>
            <div className="card-body">
                <h5 className="card-title">{props.titleTwo}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        <div className="card mx-2" data-aos={props.right} >
                <img src={props.imageSix} className="card-img-top" alt="..." style={{height:'30vh'}}/>
            <div className="card-body">
                <h5 className="card-title">{props.titleThree}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

     {/* Luggage handling
     Private Booking
     VIP */}
    </div>
    </div>
  )
}


export default Services