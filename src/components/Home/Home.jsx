import bgImg from "../../assets/images/bg_img.jpg";
import manImg from "../../assets/images/man.png";
import HeroCard from "../Cards/HeroCard";
import Navbar from "../Navbar/Navbar";
function Home() {
  return (
    <section
      id="home"
      className="h-screen  bg-cover bg-center scroll-mt-[150px]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute  inset-0 bg-white/65"></div>
      <Navbar />
      <div className=" relative  h-full  container mx-auto md:px-10 p-3 flex flex-col md:flex-row items-center md:items-start justify-between pt-8 ">
        <div className="w-full flex justify-center md:justify-start h-full">
        <HeroCard />
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Home;
