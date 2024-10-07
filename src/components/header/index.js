import React from "react";
import Style from "./header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className={Style.header_root}>
        <h1 className={Style.title}>Blogs</h1>
        <div className={Style.navmenus}>
          <ul className={Style.navmenu_item}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
