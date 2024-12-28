import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex flex-col md:flex-row items-start md:items-center justify-between pt-14 z-2 mx-[10%]">
      <a className="text-3xl font-light text-colorText" href="/">
        Ayush Yadav
      </a>
      <div className="flex absolute right-0 mr-[10%] md:mr-0 flex-col md:flex-row items-end md:items-center gap-3 md:gap-0 z-3">
        <img
          className="block cursor-pointer md:hidden"
          src={
            menuOpen
              ? "../../assets/close-icon.png"
              : "../../assets/hamburger-icon.png"
          }
          alt="hamburger-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`md:flex gap-3 z-1 md:gap-12 flex-col md:flex-row items-center py-6 px-9 md:py-0 md:px-0 rounded-xl md:rounded-none gradient-bg ${
            menuOpen ? "flex" : "hidden"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a className="text-2xl text-colorText" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="text-2xl text-colorText" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="text-2xl text-colorText" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="text-2xl text-colorText" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
