import DataImage from "./data";
import { listTools } from "./data";
import { listProyek } from "./data";



function App() {

  return (
    <>
      <div className="hero xl:px-15 grid md:grid-cols-2 items-center pt-30 xl:gap-0 gap-10 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 w-fit p-4 rounded-2xl">
            <p className="text-violet-700 text-l font-bold">BEST IT SOLUTIONS AGENCY</p>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6 text-white">Transformasi Digital Dimulai di Sini</h1>
          <p className="text-base/lose mb-6 opacity-60 text-white">Kami membangun pengalaman digital yang profesional, cepat, dan berkesan untuk mendukung pertumbuhan bisnis Anda.</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="https://wa.me/6281337961020?text=Halloo%20Mojo%20Folks:)" target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#4426F0] to-[#7D54F7] text-white py-2 px-4 rounded-2xl hover:bg-violet-500">Join Now! <i className="ri-whatsapp-line ri-lg"></i></a>
            <a href="#proyek" className="bg-gray-400/80 text-white py-2 px-4 rounded-2xl hover:bg-gray-400/100">Lihat Project <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img src="/assets/img/hero home.png" alt="Hero Image" className=" w-[1200px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s  md:scale-170 pt-15 lg:translate-x-30 filter drop-shadow-[0_35px_60px_#4426F0]" />
      </div>


      {/*Tentang*/}
      <div className="tentang xl:mt-56 md:mt-25 xl:px-15 py-10" id="tentang">
        <div className="xl:w-2/3  lg:w-3/4 w-full mx-auto p-7 bg-gray-100/50 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <h1 className="text-3xl/tight font-bold mb-6 text-white">Tentang Kami</h1>
          <img src="/assets/img/Mujo Studio.png" alt="Image" className="w-55 rounded-md mb-10 sm:hidden" />
          <p className="text-base/lose mb-10 opacity-60 text-white">Kami adalah Mbojostudio, sebuah studio kreatif yang bergerak di bidang desain dan pengembangan digital. Kami berkomitmen untuk memberikan solusi terbaik bagi klien kami.</p>
          <div className="flex items-center gap-10 justify-between">
            <img src="/assets/img/Mujo Studio.png" alt="Image" className="w-55   rounded-md sm:block hidden" />
            <div className="flex items-center gap-10">
              <div>
                <h1 className="text-4xl/tight md-1 text-white">
                  10<span className="text-violet-700">+</span>
                </h1>
                <p className="text-white">Project Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl/tight md-1 text-white">
                  2<span className="text-violet-700">+</span>
                </h1>
                <p className="text-white">Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Tools*/}

      <div className="tools mt-32 xl:px-15" id="tools">
        <h1 className="text-3xl/snug font-bold mb-4 text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang kami pakai</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/lose mb-10 opacity-50 text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true" >Berikut adalah beberapa tools yang kami gunakan dalam setiap proyek:</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

          {listTools.map((tool) => (
            <div className="flex items-center gap-2 p-3 border border-gray-400 rounded-md hover:bg-gray-200/70 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-700 p-1 group-hover:bg-zinc-300" />
              <div>
                <h4 className="text-bold text-white">{tool.nama}</h4>
                <p className="text-white">{tool.ket}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
      {/*tentang*/}

      {/*Proyek*/}
      <div className="proyek mt-32 xl:px-15 mb-15" id="proyek">
        <h1 className="text-3xl/snug font-bold mb-4 text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek Kami</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/lose mb-10 opacity-50 text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut adalah beberapa proyek yang telah kami selesaikan:</p>
        <div className="proyek-box grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6 text-white">
          {listProyek.map((proyek) => (
            <div className="bg-zinc-700 p-4 rounded-lg hover:bg-zinc-00" key={proyek.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
              <img src={proyek.gambar} alt={proyek.nama} className="w-full h-auto rounded-md mb-4" />
              <h3 className="text-xl/tight font-bold mb-2">{proyek.nama}</h3>
              <p className="text-base/lose mb-2">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <span key={index} className="bg-zinc-500/50 text-white px-2 py-1 rounded-md text-sm">{tool}</span>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a href="" className="bg-gradient-to-r from-[#4426F0] to-[#7D54F7] p-3 rounded-lg block border-zinc-600 hover:bg-violet-600">Detail Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Proyek*/}

      {/*Kontak*/}
      <div className="kontak -mx-4 xl:px-15 grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-10 grid-cols-1 ">
        <div className="animate__animated animate__fadeInUp animate__delay-2s mx-10 " data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div className="flex items-center gap-3 mb-6 bg-zinc-100/50 w-fit p-4 rounded-2xl">
            <img src={DataImage.MujoFolks} alt="Hero Image" className="w-10 rounded-md" />
          </div>
          <h1 className="text-5xl/tight font-bold mb-6 text-white">Transformasi Digital Dimulai di Sini</h1>
          <p className="text-base/lose mb-6 opacity-80 text-white">Kami membangun pengalaman digital yang profesional, cepat, dan berkesan untuk mendukung pertumbuhan bisnis Anda.</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="https://wa.me/6281337961020?text=Halloo%20Mojo%20Folks:)" className="bg-gradient-to-r from-[#4426F0] to-[#7D54F7] text-white py-2 px-4 rounded-2xl hover:bg-blue-500">Join Now! <i className="ri-whatsapp-line ri-lg"></i></a>
          </div>
        </div>
        <div className="kontak mt-32 sm:p-10 p-0 mx-10" id="kontak">
          <h1 className="text-4xl mb-2 font-bold text-center text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"  >Kontak</h1>
          <p className="text-base/loose text-center mb-10 opacity-50 text-white " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari bergabung dengan kami</p>
          <form action="https://formsubmit.co/belugaelsalamnca@gmail.com" method="POST" className="bg-gray-100/50 p-10 rounded-md sm:w-fit w-full mx-auto " autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-white">Nama Lengkap</label>
                <input type="text" name="nama" placeholder="Masukan Nama..." className="border border-gray-400 p-2 rounded-md text-white" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-white">Email</label>
                <input type="email" name="email" placeholder="Masukan Email..." className="border border-gray-400 p-2 rounded-md text-white" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-white">Pesan</label>
                <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Masukan Pesan..." className="border border-gray-400 p-2 rounded-md text-white" required></textarea>
              </div>
              <div className="text-center bg-gradient-to-r from-[#4426F0] to-[#7D54F7] hover:bg-blue-500/70 text-white py-2 px-4 rounded-md w-full cursor-pointer">
                <button type="submit">Kirim Pesan</button>
              </div>
            </div>
          </form>
        </div>
      </div>


      {/*Kontak*/}
    </>
  )
}

export default App
