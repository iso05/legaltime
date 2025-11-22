import Header from "./Header";

function Navbar() {
  return (
    <>
      <Header />
      <div className="container md:mx-auto md:px-10  pt-4 relative">
        <div className="h-16 bg-white rounded-xl p-2 hidden md:block">
          <div className="h-full border-2 border-[#D1AD84] border-dashed w-full  rounded-xl ">
            <nav className="h-full">
              <ul className="h-full items-center justify-around hidden md:flex px-8">
                <li>
                  <a href="#home">Главная</a>
                </li>
                <li>
                  <a href="#services">Услуги</a>
                </li>
                <li>
                  <a href="">Команда юристов</a>
                </li>
                <li>
                  <a href="">Отзывы</a>
                </li>
                <li>
                  <a href="">Полезные материалы</a>
                </li>
                <li>
                  <a href="">Контакты</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
