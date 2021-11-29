import React, { useEffect } from 'react';
import './About.css'
import myPic from '../../images/man.jpg'
import resume from '../../images/resume_shakil.pdf'
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <div className='about-section' id='about'>
            <div className='container p-5'>
                <h1 class='d-flex justify-content-center p-1'>About Me</h1>
                <div className="row d-flex justify-content-center align-items-center">
                    <div data-aos="fade-right" className="col-lg-6 d-flex justify-content-center">
                        <img class='rounded' width='60%' src={myPic} alt="" />
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        className="col-lg-6 d-flex justify-content-center">
                        <div>
                            <p class="fs-5 font">Hi, I am a Junior Web Developer. I am passionate to do my designation's responsibility and hungry to explore new technology. A
                                dedicated web developer who worked in many projects like cbr honda, healthcare, e-commerce,
                                etc.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;