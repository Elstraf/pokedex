import Link from "next/link";
import Styles from "./index.module.scss";

export default function Header() {
  const random = Math.floor(Math.random() * 154) + 1;
  return (
    <nav className={Styles.navContainer}>
      <h1>Pokedex</h1>

      <div className={Styles.linkContainer}>
        <Link href="/">List View</Link>
        <Link href={`/${random}`}>Random Pokemon</Link>
      </div>
    </nav>
  );
}
