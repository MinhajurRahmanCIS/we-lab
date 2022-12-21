import React from 'react';
import img from '../../../assets/about/about.gif'
const About = () => {
    return (
        <div className="hero bg-base-300 mb-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} alt='about' className="sm:max-w-xs md:max-w-xl rounded-lg shadow-2xl" />
                <div className='ml-5'>
                    <h1 className="text-5xl font-bold text-red-900">About Use</h1>
                    <p className="py-6">Please tell about our cloud kitchen foodie service. We all ways try to improve. Well Will response your any query About use.</p>
                    <input type="text" placeholder="Tell us About our service" className="input input-bordered input-secondary w-full max-w-xs" /> <br />
                    <button className="btn btn-secondary mt-5">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default About;