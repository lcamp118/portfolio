import MenuIcon from "../icons/menuIcon";
import Image from 'next/image'
import Logo from '../images/LH-logos.png'
import '../styles/navbar.scss'

export default function NavBar() {
  return (
    <nav>
      <Image src={Logo} alt={"Logo"} width={100}
      height={100}></Image>
    <h1>LYNELLE HERRERA</h1>
    <ul className="navigation">
      <li><a href="#about" className="nav-link">About</a></li>
      <li><a href="#skills" className="nav-link">Skills</a></li>
      <li><a href="#projects" className="nav-link">Projects</a></li>
      <li><a href="#contact" className="nav-link">Contact</a></li>
    </ul>
    <button className="burger-menu" id="burger-menu">
      <MenuIcon />
    </button>
</nav>
  );
}
