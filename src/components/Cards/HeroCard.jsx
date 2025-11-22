import { GrDocumentText } from "react-icons/gr";
import "../../Custom/Custom.css";
import { RiCurrencyLine, RiScales3Line } from "react-icons/ri";
import { FaMoneyCheckAlt } from "react-icons/fa";
function HeroCard() {
  return (
    <>
      <div className="clipPath  md:w-1/2 w-full rounded-2xl h-full bg-white p-4 ">
        <div className=" clipPath h-full border-2 border-[#D1AD84] border-dashed w-full  rounded-2xl ">
          <div className="flex flex-col items-center justify-around  ">
            <h1 className="text-center w-full">
              <span className="text-[#D1AD84] lg:text-5xl md:text-xl  text-5xl">Юридические услуги</span> <br />
              <span className="lg:text-5xl  md:text-xl text-3xl">c гарантией результата</span>
            </h1>
            <div className="flex flex-col md:w-10/12 w-3/4 gap-2 lg:text-lg  md:text-xs xs:text-lg  ">
              <p className="flex items-center gap-3">
                <GrDocumentText className="lg:text-[40px] md:text-[35px] text-[40px]"/> 
                Определяем и обосновываем вероятность успеха до заключения
              </p>
              <p className="flex items-center gap-3">
                <FaMoneyCheckAlt className="lg:text-[40px] md:text-[35px] text-[40px]"/>
                Выигрываем суммы сверх оспариваемой и уплаченной нам</p>
              <p className="flex items-center gap-3">
                <RiScales3Line className="lg:text-[70px] md:text-[65px] text-[70px] "/>
                Ведущие специалисты: адвокаты - кандидаты наук, федеральный
                судья в отставке с опытом больше 15 лет
              </p>
              <div className="flex w-full justify-center py-3">
              <button className="bg-red-900 w-3/5 lg:py-4 py-1.5 lg:text-lg text-xs rounded-lg cursor-pointer text-white ">Бесплатная консультация юриста</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeroCard;
