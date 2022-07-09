export default function NavItem({ content, href }) {
  return (
    // <li className="">
      <a href={href}>{content}</a>
    // </li>
  );
}
