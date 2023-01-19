import React, { useEffect } from "react";
import { themeChange } from "theme-change";
import { useScrollPosition } from "./hooks/useScrollPosition";
import {MdLightMode,MdDarkMode} from "react-icons/md"
import {GiVampireDracula,GiCyberEye} from "react-icons/gi"
import Link from "next/link";

const Navbar = () => {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  const scrollPosition = useScrollPosition();
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div
      className={classNames(
        scrollPosition > 0
          ? "bg-base-100 text-accent-content shadow-sm"
          : " text-primary-content",
        "sticky top-0 z-30 flex h-16 w-full justify-center  bg-opacity-90 backdrop-blur transition-all duration-100"
      )}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">Brian Pham</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">
              Themes
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4  text-accent-content"
            >
              <li>
                <a
                  onClick={() =>
                    document
                      .querySelector("html")
                      ?.setAttribute("data-theme", "light")
                  }
                >
                  Light
                  <MdLightMode/>
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    document
                      .querySelector("html")
                      ?.setAttribute("data-theme", "dark")
                  }
                >
                  Dark
                  <MdDarkMode/>
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    document
                      .querySelector("html")
                      ?.setAttribute("data-theme", "dracula")
                  }
                >
                  Dracula
                  <GiVampireDracula/>
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    document
                      .querySelector("html")
                      ?.setAttribute("data-theme", "cyberpunk")
                  }
                >
                  Cyberpunk
                  <GiCyberEye/>
                </a>
              </li>
            </ul>
          </div>
          <a href="#contact" className="btn btn-primary">Contact me</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;