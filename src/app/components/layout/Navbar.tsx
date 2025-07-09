import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between h-24 items-center">
        <a href="#" className="font-title text-2xl">
          William Farré
        </a>

        <ul className="flex gap-8">
          <li>
            <a href="#scroll-content">Home</a>
          </li>
          <li>
            <a href="#scroll-content">About</a>
          </li>
          <li>
            <a href="#scroll-content">Projects</a>
          </li>
          <li>
            <a href="#scroll-content">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
