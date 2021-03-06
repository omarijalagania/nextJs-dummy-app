import React from "react";
import Link from "next/link";
import classes from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav>
        <ul className={classes.navigation}>
          <li>
            <Link href="/events ">All Events</Link>
          </li>
          <li>
            <Link href="/form ">Form</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
