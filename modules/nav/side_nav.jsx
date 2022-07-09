import NavItem from "../../components/Link/nav_link";

export default function SideNav() {
  return (
    <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
      <ul className="text-base text-gray-700 pt-4 md:flex md:justify-between md:pt-0">
        <NavItem content={"Games"} href={"/projects/games"} />
        <NavItem content={"Fractals"} href={"/projects/fractals"} />
        <NavItem content={"Clones"} href={"/projects/clones"} />
        <NavItem content={"Back"} href={"/"} />
      </ul>
    </nav>
  );
}