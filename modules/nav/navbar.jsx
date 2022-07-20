import { useState } from "react";
import ThemeToggle from "../../components/Button/theme_toggle";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase ">
          Joshua Saunders
        </div>
        <div id="" className="hidden md:block space-x-12 items-center md:flex">
          <a
            className="text-selected-text font-semibold text-lg  relative w-max two"
            href="#home"
          >
            Home
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-white dark:bg-theme"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-white dark:bg-theme"></span>
          </a>
          <a
            className="font-semibold text-lg  relative w-max two"
            href="#aboutMe"
          >
            About Me
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-white dark:bg-theme"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-white dark:bg-theme"></span>
          </a>

          <a className="font-semibold text-lg  relative w-max two" href="#work">
            My Projects
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-white dark:bg-theme"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-white dark:bg-theme"></span>
          </a>
          <a
            className="font-semibold text-lg  relative w-max two"
            href="#contact"
          >
            <button className="px-6 py-2 font-bold text-white bg-theme dark:bg-theme ">
            {/* border-theme dark:border-transparent bg-theme dark:bg-theme  */}
              Contact Me
            </button>
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={handleToggle}>
            <svg
              width="26"
              height="18"
              viewBox="0 0 26 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile nav menu  */}
      <div
        className={
          "one-edge-shadow mobile-nav items-center flex flex-col  w-full md:hidden opacity-100" +
          (navbarOpen ? " " : " mobile-nav-active")
        }
      >
        <div className="">
          <ThemeToggle />
        </div>
        <ul className="">
          <li className="nav-item neon-text">
            <a className="" href="#aboutMe" onClick={handleToggle}>
              about me
            </a>
          </li>
          <li className="nav-item neon-text">
            <a className="" href="#projects" onClick={handleToggle}>
              projects
            </a>
          </li>
          <li className="nav-item neon-text">
            <a className="" href="#contact" onClick={handleToggle}>
              contact Me
            </a>
          </li>
        </ul>
        <div className="flex mt-20 space-x-6">
          {/* linkedin */}
          <a href="https://www.linkedin.com/in/joshua-a-saunders/">
            <i className="fa-brands fa-linkedin fa-2x"></i>
          </a>
          {/* Github */}
          <a href="https://github.com/J-Saun">
            <i className="fa-brands fa-github fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="">
        <ThemeToggle />
      </div>
    </nav>
  );
}
