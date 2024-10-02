"use client";

import "@/components/header/header.css";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/helpers/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

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
      <ul className="nav">
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
          <li>EXPERIENCE</li>
        </Link>
        <Link href={"/projects"}>
          <li>PROJECTS</li>
        </Link>{" "}
        <Link href={"/contact"}>
          <li>CONTACT</li>
        </Link>
      </ul>

      <ul className={`open ${open ? "true" : "false"}`}>
        <button className="close-menu" onClick={() => setOpen(false)}>
          ×
        </button>
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
          <li>EXPERIENCE</li>
        </Link>
        <Link href={"/projects"}>
          <li>PROJECTS</li>
        </Link>{" "}
        <Link href={"/contact"}>
          <li>CONTACT</li>
        </Link>
        <div className={`social ${open ? "true" : "false"}`}>
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
      <div className="hamburger" onClick={() => setOpen(true)}>
        <img src="/img/hamburger-menu.svg" alt="Menu" />
      </div>
    </div>
  );
}
