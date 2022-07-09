import Button from "../components/Button/button";
import Navbar from "../modules/nav/navbar";
import Header from "../modules/header";

export default function Home() {
  return (
    <div className="bg-body text-white font-poppins pb-12">
      {/* <Navbar /> */}
      {/* <Header /> */}
      <header className="py-6">
        <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <div className="text-lg font-bold">Joshua Saunders</div>
          <div className="hidden md:flex space-x-12 items-center">
            <a href="#" className="text-selected-text" id="">
              home
            </a>
            <a href="#projects" className="" id="">
              projects
            </a>
            <a href="#resources" className="" id="">
              resources
            </a>
            <a href="#contact" className="" id="">
              <button className="px-6 py-2 bg-theme font-bold">contact</button>
            </a>
          </div>
          <div className="md:hidden">
            <svg viewBox="0 0 10 8" width="40">
              <path
                d="M1 1h8M1 4h 8M1 7h8"
                stroke="#000"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </header>

<div className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">

  hero
</div>

    </div>
  );
}
// flex flex-col items-center justify-center
