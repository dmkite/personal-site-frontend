import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as Bar } from "../assets/Bar.svg";

const Nav = (props: any): JSX.Element => {
  const [isOpen, toggleOpen] = useState<boolean | null>(null);
  const [openStatus, changeOpenStatus] = useState<String>("closing");

  const setSelectStatus = (path: string): string => props.location.pathname === path
    ? "selected"
    : "";

  const applyAnimation = (): string => {
    if (isOpen === null) {
      return "menu closed";
    } else if (isOpen) {
      return "menu open";
    } else {
      return "menu closed";
    }
  };

  const handleClick = () => {
    toggleOpen(!isOpen);
    if (openStatus.includes("closing")) {
      return changeOpenStatus("opening open");
    } else if (openStatus.includes("open")) {
      return changeOpenStatus("closing");
    }
  };

  const handleLinkSelect = (): void => {
    changeOpenStatus("closing");
    toggleOpen(false);
  };

  return (
    <nav>
      <div onClick={handleClick} className={`nav-icon ${openStatus}`}>
        <Bar />
        <Bar />
        <Bar />
      </div>
      <div className={applyAnimation()}>
        <ul>
          <li className={setSelectStatus("/")}>
            <Link onClick={handleLinkSelect} to="/">Home</Link>
          </li>
          <li className={setSelectStatus("/development")}>
            <Link onClick={handleLinkSelect} to="/development">Development</Link>
          </li>
          <li className={setSelectStatus("/design")}>
            <Link onClick={handleLinkSelect} to="/design">Design</Link>
          </li>
          <li className={setSelectStatus("/gallery")}>
            <Link onClick={handleLinkSelect} to="/gallery">Gallery</Link>
          </li>
          <li className={setSelectStatus("/contact")}>
            <Link onClick={handleLinkSelect} to="/contact">Contact</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Nav);
