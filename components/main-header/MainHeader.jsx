import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo.png";

import classes from "./MainHeader.module.css";
import MainHeaderBackGround from "./MainHeaderBackGround";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackGround />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logo} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
