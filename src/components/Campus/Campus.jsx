import React, { useRef } from 'react'
import './Campus.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import gallery_1 from '../../assets/op.jpg';
import gallery_2 from '../../assets/aaa.jpg';
import gallery_3 from '../../assets/yy.jpg';
import gallery_4 from '../../assets/pdaaaa.jpeg';

const Campus = () => {

    const slider = useRef();
    let tx = 0;


    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`


    }
  
    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider gallery">
                <ul ref={slider}>
                    <li>
                       <img src={gallery_1} alt="" />
                    </li>
                    <li>
                       <img src={gallery_2} alt="" />
                    </li>
                     <li>
                       <img src={gallery_3} alt="" />
                    </li>
                     <li>
                       <img src={gallery_4} alt="" />
                    </li>
                     <li>
                       <img src={gallery_2} alt="" />
                    </li>
                </ul>
            </div>
  
        </div>
    )
}

export default Campus
