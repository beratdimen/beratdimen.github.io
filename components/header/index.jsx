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
        <Link href={"/slider"}>
          <li>ABOUT</li>
        </Link>
        <Link href={"/skills"}>
          <li>SKİLLS</li>
        </Link>
        <Link href={"/experience"}>
          <li>EXPERİENCE</li>
        </Link>
        <Link href={"/projects"}>
          <li>PROJECTS</li>
        </Link>{" "}
        <Link href={"/contact"}>
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
