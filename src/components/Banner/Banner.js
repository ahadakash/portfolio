import React from 'react';
import './Banner.css'
import resume from '../../images/resume_shakil.pdf'

const Banner = () => {

    return (
        <div className='banner' id='home'>
            <div className='container'>
                <div>
                    <h4 className="font">Hello! I am</h4>
                    <h1 className='my-name'>ABDUL AHAD</h1>
                    <h1 className="font">I am Junior Web Developer</h1>
                    <a target='_blank' href={resume}>
                        <button className='resume-btn'>My Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;