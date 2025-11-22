import { IoLogoWhatsapp } from "react-icons/io";
import logo from "../../assets/images/Group.svg";
import { FaTelegramPlane } from "react-icons/fa";
function Header() {
  return (
    <>
      <div className="container mx-auto relative z-10 md:px-10 p-3 pt-4 flex justify-between">
        <div className="flex items-center gap-5">
          <img src={logo} alt="Logo"
          />
          <h4 className="text-lg font-medium tracking-wide hidden sm:block">Legal Time</h4>
        </div>
        <div className="flex gap-5 items-center">
          <IoLogoWhatsapp color="#52C12C" size={26}/>
          <FaTelegramPlane color="#4587D9" size={26}/>
          <p className="text-lg hidden sm:block ">+998-93-777-77-77</p>
        </div>
      </div>
    </>
  );
}

export default Header;
