import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/images/logo.jpg";
import { MdOutlineLanguage, MdOutlineMailOutline } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { IoPhoneLandscape } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
function Navbar() {
  const [open, setOpen] = useState(false);

  // scroll → close menu
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("scroll", close);
    return () => window.removeEventListener("scroll", close);
  }, []);

  const menu = [
    {litext: "Asosiy", link: "#home"},
    {litext: "Hizmatlar", link: "#services"},
    {litext:"Jamoa", link:"#"},
    {litext:"Yangiliklar",link:"#"},
    {litext:"Portfolio",link:"#"},
    {litext:"Aloqa",link:"#"},
  ];
  
  return (
    <>
      <header className="relative text-[#d4d4d3] items-center hidden lg:flex justify-between pt-2 z-10 container mx-auto  px-10 pb-2">

        <div className="flex gap-15  items-center">
          <div className="flex gap-1  items-center">
            <MdOutlineLanguage size={20}/>
            Uzbek
          </div>
          <div className="flex items-center gap-1.5">
          г.Ташкент, ул.А.Навои, 30
          <SiGooglemaps/>
          </div>
        </div>

        <div className="flex items-center gap-15 ">
          <div className="flex items-center gap-1">
            <FaPhoneFlip/>
            +998-93-777-77-77
          </div>
          <div className="flex items-center gap-1">
            <MdOutlineMailOutline size={20}/>
            <span>
              isojurayev77@gmail.com
            </span>
          </div>
        </div>

      </header>
      <div className="w-full hidden lg:block  h-0.5 bg-linear-to-l from-[#FCFFD4] to-99.9% relative z-10"></div>

      <div className=" relative z-10 items-center container mx-auto  px-10  hidden md:flex justify-between    w-full pt-1 text-[#FCFFD4] text-lg ">
        <img src={logo} alt="logotip"className="w-12 h-12 rounded-full object-cover"/>
        <nav className="lg:w-1/2 w-3/4">
          <ul className="flex justify-between items-center h-full gap-6 xl:gap-0">
            {menu.map((item) => (
              <li key={item} className="relative group">
                <a href={item.link} className="block py-1">
                  {item.litext}
                </a>

                <span
                  className="
                      absolute left-0 -bottom-1 w-full h-1
                      bg-linear-to-r from-white/70 to-transparent

                      md:opacity-100   
                      lg:opacity-0    
                      lg:group-hover:opacity-100 

                      transition-all duration-500
                    "
                ></span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="md:hidden fixed top-0 left-0 w-full z-10 bg-black/60 backdrop-blur-lg text-[#FCFFD4] px-5 py-4 flex justify-between items-center">
        <p className="text-lg font-semibold">Legal Time</p>

        {!open && (
          <button onClick={() => setOpen(true)} className="text-3xl">
            <FiMenu />
          </button>
        )}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-20 flex flex-col items-center justify-center gap-10 text-2xl text-[#FCFFD4] md:hidden">
          <FiX
            size={30}
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-4xl"
          />

          {menu.map((item) => (
            <a
              key={item}
              href={item.link}
              className="relative group"
              onClick={() => setOpen(false)}
            >
              {item.litext}

              <span
                className="
                    absolute left-0 -bottom-2 h-0.5 w-full
                    bg-linear-to-r from-white/70 to-transparent
                    opacity-100
                  "
              ></span>
            </a>
          ))}
        </div>
      )}


    </>
  );
}

export default Navbar;
