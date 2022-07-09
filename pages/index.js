import Button from "../components/Button/button";
import Navbar from "../modules/nav/navbar";
import Header from "../modules/header";

export default function Home() {
  return (
    <div className="bg-body text-white font-poppins pb-12">
      {/* <Navbar /> */}
      {/* <Header /> */}
      <header className="py-6">
      <div className="container flex justify-between items-center mx-auto px-8">
       <div className="text-lg">Joshua Saunders</div>
       <div>
        <a href="#" className="text-selected-text" id="">home</a>
        <a href="#projects" className="" id="">projects</a>
        <a href="#resources" className="" id="">resources</a>
        <a href="#contact" className="" id="">contact</a>
       </div>

      </div>
    </header>
      <div className=""></div>
    </div>
  );
}
// flex flex-col items-center justify-center
