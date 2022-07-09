// import Button from "../components/Button/button";
import NavItem from "../../components/Link/nav_link";

export default function Navbar() {
  return (
    <nav class="">
      <a href={'/'}>Joshua Saunders</a>
      {/* <ul class=""> */}
        <NavItem content={"Home"} href={"#home"} />
        <NavItem content={"Projects"} href={"#projects"} />
        <NavItem content={"Resources"} href={"#resources"} />
        <NavItem content={"Contact"} href={"#contact"} />
      {/* </ul> */}
    </nav>
  );
}
