import "@/components/header/header.css";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/helpers/icons";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="headerContainer">
      <Link href={"/"}>
        <Image
          src="/img/berat-dimen-siyah-logo.png"
          alt=""
          width={220}
          height={80}
        />
      </Link>
      <ul>
        <Link href={"/"}>
          <li>HOME</li>
        </Link>
        <Link href={"/"}>
          <li>ABOUT</li>
        </Link>
        <Link href={"/"}>
          <li>SKİLLS</li>
        </Link>
        <Link href={"/"}>
          <li>EXPERİENCE</li>
        </Link>
        <Link href={"/"}>
          <li>PROJECTS</li>
        </Link>{" "}
        <Link href={"/"}>
          <li>CONTACT</li>
        </Link>
      </ul>

      <div className="socialIcon">
        <Link href={"https://www.linkedin.com/in/berat-dimen/"}>
          <LinkedinIcon />
        </Link>

        <Link href={"https://www.instagram.com/beratdimen/"}>
          <InstagramIcon />
        </Link>
        <Link href={"https://github.com/beratdimen"}>
          <GithubIcon />
        </Link>
      </div>
    </div>
  );
}
