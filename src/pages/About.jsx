import React from 'react'

const About = () => {
    return (
        <>
            {/*Hero Section Tentang*/}
            <div className="hero-tentang flex flex-col md:flex-row items-center justify-between xl:px-15 px-5 py-10">
                <div className="hero-tentang-text md:w-1/2 w-full">
                    <h1 className="text-4xl/tight font-bold mb-4 text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tentang Mojo Folks</h1>
                    <p className="text-base/lose mb-6 opacity-60 text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
                        Mojo Folks adalah tim profesional yang berkomitmen untuk memberikan solusi digital terbaik bagi bisnis Anda.
                    </p>
                </div>
                <div className="hero-tentang-image md:w-1/2 w-full">
                    <img src="/assets/img/hero about.webp" alt="Tentang Mojo Folks" className="w-full h-auto" />
                </div>
            </div>
        </>
    )
}

export default About;