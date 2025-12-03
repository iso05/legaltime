import { useState, useEffect } from "react";
import "../../Custom/Custom.css";
import { items } from "./servisecData"; 
import ServiceCard from "./ServiceCard";

function Services() {
  const [showAll, setShowAll] = useState(false); //for mobile 
  const [isMobile, setIsMobile] = useState(false); //checking device size
  const [active, setActive] = useState("jur");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="services" className="py-20 min-h-screen  bgGradient">
      <div className="container flex flex-col justify-around h-full mx-auto px-4 md:px-10">
        
        <h2 className="text-4xl md:text-5xl font-bold text-[#FCFFD4] mb-10 text-center">
          Наши услуги
        </h2>

      <div className="flex w-full justify-center items-center gap-4 pb-10">

  {/* LEFT TEXT */}
  <button
    onClick={() => setActive("fiz")}
    className={`
      text-sm md:text-lg transition 
      ${active === "fiz" ? "text-[#FCFFD4]" : "text-white/40"}
    `}
  >
    физическим лицам
  </button>

  {/* LINE + DOT */}
  <div className="relative w-28 flex items-center">
    {/* LINE */}
    <div
      className="absolute top-1/2 -translate-y-1/2 h-0.5 w-full bg-linear-to-r from-[#FCFFD4] to-transparent transition-transform duration-500"
      style={{
        transform: active === "fiz" ? "scaleX(0)" : "scaleX(1)",
        transformOrigin: active === "fiz" ? "right" : "left",
      }}
    ></div>

    {/* DOT */}
    <div
      className={`
        absolute h-2 w-2 rounded-full bg-[#FCFFD4] 
        transition-all duration-500
        ${active === "fiz" ? "left-0 opacity-100" : ""}
        ${active === "jur" ? "right-0 opacity-100" : ""}
      `}
    ></div>
  </div>

  {/* RIGHT TEXT */}
  <button
    onClick={() => setActive("jur")}
    className={`
      text-sm md:text-lg transition 
      ${active === "jur" ? "text-[#FCFFD4]" : "text-white/40"}
    `}
  >
    юридическим лицам
  </button>

</div>


        {/* Animated grid - shows only 3 cards at first in mobile */}
        <div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                    gap-8 justify-items-center overflow-hidden transition-all duration-500"
          style={{
            maxHeight: isMobile
              ? showAll
                ? "2000px"
                : "650px" // shows only 3 cards height
              : "2000px",
          }}
        >
          {items.map((item, index) => (
            <div className="w-full max-w-sm" key={index}>
              <ServiceCard
                icon={item.icon}
                title={item.title}
                body={item.body}
              />
            </div>
          ))}
        </div>

        {isMobile && (
          <div className="flex justify-center mt-10">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="border border-[#FCFFD4]/40 text-[#FCFFD4] px-6 py-3 rounded-xl hover:bg-white/10 transition"
              >
                Показать больше
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="border border-[#FCFFD4]/40 text-[#FCFFD4] px-6 py-3 rounded-xl hover:bg-white/10 transition"
              >
                Скрыть
              </button>
            )}
          </div>
        )}

      </div>
    </section>
  );
}

export default Services;
