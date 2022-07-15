import NavItem from "../../components/Link/nav_link";

export default function Navbar() {
  return (
    <nav className="">
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full ">
        <div className="text-lg font-bold">Joshua Saunders</div>
        <div className="hidden md:flex space-x-12 items-center">
          <a
            className="text-selected-text font-semibold text-lg  relative w-max two"
            href="#home"
          >
            Home
            <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-theme"></span>
            <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-theme"></span>
          </a>

          <a
            className="font-semibold text-lg  relative w-max two"
            href="#work"
          >
            My Projects
            <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-theme"></span>
            <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-theme"></span>
          </a>
          <a
            className="font-semibold text-lg  relative w-max two"
            href="#resources"
          >
            Resources
            <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-theme"></span>
            <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-theme"></span>
          </a>
          <a
            className="font-semibold text-lg  relative w-max two"
            href="#contact"
          >
            <button className="px-6 py-2 bg-theme font-bold ">Contact Me</button>
          </a>
        </div>
        <div className="md:hidden">
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
        </div>
      </div>
    </nav>
  );
}
