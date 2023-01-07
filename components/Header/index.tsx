import Link from "next/link";
import Styles from "./index.module.scss";

export default function Header() {
  const random = Math.floor(Math.random() * 154) + 1;
  return (
    <nav className={Styles.navContainer}>
      <Link href="/">
        <h1>Pokedex</h1>
      </Link>

      <div className={Styles.linkContainer}>
        <Link href="/">List View</Link>
        <Link href={`/${random}`}>Random Pokemon</Link>
      </div>
    </nav>
  );
}
