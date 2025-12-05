import { FaFacebook, FaInstagram } from "react-icons/fa6";
import Navbar from "../Navbar/Navbar";
import bgImg from "../../assets/images/bg2.jpg";
import mainimg from "../../assets/images/mainImg.png";
import { GrDocumentText } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

function Home() {
  return (
    <section
      id="home"
      className="w-full  h-screen bg-center bg-cover relative"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Navbar />
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="container mx-auto hidden px-10  lg:flex justify-between  w-full  h-full">

        <div className="relative h-full flex flex-col w-full 2xl:justify-center  items-center  gap-2  pb-10">
          <h3 
            className="w-4/6  flex justify-self-start  
            text-[#FCFFD4] 
            text-5xl font-semibold leading-tight 
            mb-2 mt-3 text-center"
          >
            Yuridik konsultant firma Toshkent shahrida
          </h3>

          

            <span className="w-10/12 h-2 bg-linear-to-l from-[#FCFFD4] to-transparent "></span>
            <span className="w-10/12 h-1 bg-linear-to-r from-[#FCFFD4] to-transparent"></span>

          <div className="w-10/12 p-6 rounded-xl backdrop-blur-md bg-[#FCFFD4]/20">
  <div className="border-2 border-dashed border-[#FCFFD4]/50 rounded-lg p-4">
    <p className="text-[#FCFFD4]/80 text-xl leading-relaxed">
      We provide professional legal consultation for individuals and businesses.
      Our team offers contract drafting, compliance support, and reliable representation.
      Your trusted legal partner.
    </p>
  </div>
</div>

<span className="w-10/12 h-1 bg-linear-to-l from-[#FCFFD4] to-transparent"></span>
<span className="w-10/12 h-2 bg-linear-to-r from-[#FCFFD4] to-transparent "></span>

<div className="self-start pt-2">

          <div className="relative w-fit cursor-pointer group flex gap-4 items-center ">
            <FiPhoneCall
              className="
            text-[#FCFFD4]/70 opacity-70 
            text-xl md:text-2xl 
            transition-all duration-300
            group-hover:text-[#FCFFD4] 
            group-hover:scale-110
            group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.45)]
          "
            />

            <span
              className="
            text-[#FCFFD4]/70 opacity-70
            text-xl md:text-2xl
            transition-all duration-300 
            group-hover:text-white 
            group-hover:opacity-100 
            group-hover:scale-105
          "
            >
              Tekin konsultatsiya olish
            </span>

            <span
              className="
            absolute left-0 -bottom-1 h-[1.5px] w-full 
            bg-linear-to-r from-white/70 to-transparent 
            opacity-0 group-hover:opacity-100 
            transition-all duration-700
          "
            ></span>
          </div>

          <div className="relative w-fit cursor-pointer group flex gap-4 items-center pt-8">
            <GrDocumentText
              className="
            text-[#FCFFD4]/70 opacity-70 
            text-xl md:text-2xl 
            transition-all duration-300
            group-hover:text-[#FCFFD4] 
            group-hover:scale-110
            group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.45)]
          "
            />

            <span
              className="
            text-[#FCFFD4]/70 opacity-70
            text-xl md:text-2xl
            transition-all duration-300 
            group-hover:text-white 
            group-hover:opacity-100 
            group-hover:scale-105
          "
            >
              Hujjatlarni yuborish
            </span>

            <span
              className="
            absolute left-0 -bottom-1 h-[1.5px] w-full 
            bg-linear-to-r from-white/70 to-transparent 
            opacity-0 group-hover:opacity-100 
            transition-all duration-700
          "
            ></span>
          </div>

          
</div>

        </div>



        <div className="flex justify-end h-full ">
          <div className="flex flex-col justify-center h-full items-center gap-6  relative ">
            <div className="  w-0.5 h-1/5 bg-linear-to-b from-white to-transparent"></div>

            <div className="flex flex-col gap-5 items-center justify-center">
              <FaInstagram className="text-white/70 text-3xl  transition duration-500 hover:bg-linear-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]    rounded-4xl cursor-pointer" />
              <FaFacebook className="text-white/70 hover:text-[#1877F2]  hover:bg-white rounded-4xl transition text-3xl cursor-pointer" />
              <FaTelegram className="text-white/70 hover:text-[#1877F2]  hover:bg-white rounded-4xl transition text-3xl cursor-pointer" />
            </div>

            <div className="w-0.5 h-1/5  bg-linear-to-t from-white to-transparent"></div>
          </div>
        </div>


      </div>




      <div className="flex lg:hidden flex-col  items-center gap-8 justify-center  container  mx-auto xs:px-10 px-5 h-full">
        <div className="relative  flex flex-col justify-around h-4/6 w-full  ">
          <h3
            className="  flex  
            text-[#FCFFD4] 
            md:text-5xl text-[2.7rem] font-semibold leading-tight 
            mb-8 mt-6 text-center"
          >
            Юридический консалтинг в Тюмени
          </h3>

<div>
          <div className="relative w-fit cursor-pointer group flex gap-4 items-center ">
            <FiPhoneCall
              className="
            text-[#FCFFD4]/70 opacity-70 
            text-xl md:text-2xl 
            transition-all duration-300
            group-hover:text-[#FCFFD4] 
            group-hover:scale-110
            group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.45)]
          "
            />

            <span
              className="
            text-[#FCFFD4]/70 opacity-70
            text-[18px] md:text-2xl
            transition-all duration-300 
            group-hover:text-white 
            group-hover:opacity-100 
            group-hover:scale-105
          "
            >
              Получить бесплатную консультацию
            </span>

            <span
              className="
            absolute left-0 -bottom-1 h-[1.5px] w-full 
            bg-linear-to-r from-white/70 to-transparent 
            opacity-0 group-hover:opacity-100 
            transition-all duration-700
          "
            ></span>
          </div>

          <div className="relative w-fit cursor-pointer group flex gap-4 items-center pt-8">
            <GrDocumentText
              className="
            text-[#FCFFD4]/70 opacity-70 
            text-xl md:text-2xl 
            transition-all duration-300
            group-hover:text-[#FCFFD4] 
            group-hover:scale-110
            group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.45)]
          "
            />

            <span
              className="
            text-[#FCFFD4]/70 opacity-70
            text-[18px] md:text-2xl
            transition-all duration-300 
            group-hover:text-white 
            group-hover:opacity-100 
            group-hover:scale-105
          "
            >
              Отправить документы
            </span>

            <span
              className="
            absolute left-0 -bottom-1 h-[1.5px] w-full 
            bg-linear-to-r from-white/70 to-transparent 
            opacity-0 group-hover:opacity-100 
            transition-all duration-700
          "
            ></span>
          </div>
</div>

        </div>

        <div className="flex items-center gap-6 w-full relative pb-25 ">
          <div className="flex   items-center justify-around w-full">
            <FaInstagram  className="text-white transition text-3xl cursor-pointer bg-linear-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]  rounded-xl" />
            <FaFacebook className=" transition text-3xl cursor-pointer bg-white rounded-4xl text-[#1877F2]" />
            <FaTelegram className="text-[#1877F2] bg-white rounded-4xl transition text-3xl cursor-pointer" />
          </div>
        </div>
      </div>

    </section>
  );
}

export default Home;
