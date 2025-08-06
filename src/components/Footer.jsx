import React from 'react'

export const Footer = () => {
  return (
    <div className=' text-white flex md:flex-row flex-col justify-between items-center py-4 mt-32'>
        <h1 className='text-2xl font-bold'>Mujo Studio</h1>
        <div className='flex gap-10'>
            <a href="#home">Home</a>
            <a href="#tentang">Tentang</a>
            <a href="#proyek">Proyek</a>
            <a href="#kontak">Kontak</a>
        </div>
        <div className='flex gap-5 items-center'>
            <a href="https://github.com/ImamNuralim">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="https://www.instagram.com/imm.nrlm/">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="https://wa.me/6281337961020?text=Halloo%20Mojo%20Folks:)">
                <i className="ri-whatsapp-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}
