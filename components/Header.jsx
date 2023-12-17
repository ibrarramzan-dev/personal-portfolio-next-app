"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import style from "@/styles/header.module.scss";
import style2 from "@/styles/menu.module.scss";
import img from "@/public/nav.png";
import { Fade as HamburgerIcon } from "hamburger-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaTelegram,
  FaLinkedin,
  FaHandPointRight,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={style.header}>
        <div className={style.innermenu}>
          <Link href={"/"}>
            <Image className={style.img} src={img} alt="" />
          </Link>
          <div>
            <HamburgerIcon
              className={style.burger}
              toggled={open}
              toggle={setOpen}
            />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && <Menu menuOptions={{ open, setOpen }} />}
      </AnimatePresence>
    </>
  );
}

const Menu = ({ menuOptions }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={style2.menu}
    >
      <div className={style2.links}>
        <div className={style2.icon}>
          <HamburgerIcon
            toggled={menuOptions.open}
            toggle={menuOptions.setOpen}
          />
        </div>
        <div className={style2.pages}>
          <Link href={"/"}>
            <FaHandPointRight className={style2.activeicon} />
            Home{" "}
          </Link>

          <Link href={"/Projects"}>
            <FaHandPointRight className={style2.activeicon} />
            Projects{" "}
          </Link>

          <Link href={"./Trevor-Powell-Resume.pdf"} download target="_blank">
            <FaHandPointRight className={style2.activeicon} />
            Resume
          </Link>

          <Link href={"/Personal-Info"}>
            <FaHandPointRight className={style2.activeicon} />
            Personal Info
          </Link>

          <Link href={"/Background"}>
            <FaHandPointRight className={style2.activeicon} />
            Background
          </Link>
        </div>
      </div>
      <div className={style2.socials}>
        <motion.Link
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={style2.social}
          href={"/"}
        >
          <Link
            href="https://github.com/DclMonster"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#e8e6e3",
            }}
          >
            <span>Github</span>
            <FaGithub className={style2.icon} />
          </Link>
        </motion.Link>

        <motion.Link
          initial={{ scale: 0 }} // Initial scale set to 0
          animate={{ scale: 1 }}
          className={style2.social}
          href={"/"}
          style={{ background: "none" }}
        >
          <Link
            href="https://www.linkedin.com/in/trevor-powell-19945a255/"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#e8e6e3",
            }}
          >
            <span>Linkedin</span>
            <FaLinkedin className={style2.icon} />
          </Link>
        </motion.Link>

        <motion.Link
          initial={{ scale: 0 }} // Initial scale set to 0
          animate={{ scale: 1 }}
          className={style2.social}
          href={"/"}
          style={{ background: "none" }}
        >
          <Link
            href="https://google.com/"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#e8e6e3",
            }}
          >
            <span>Twitter</span>
            <BsTwitterX className={style2.icon} />
          </Link>
        </motion.Link>

        <motion.Link
          initial={{ scale: 0 }} // Initial scale set to 0
          animate={{ scale: 1 }}
          className={style2.social}
          href={"/"}
          style={{ background: "none" }}
        >
          <Link
            href="https://google.com/"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#e8e6e3",
            }}
          >
            <span>Telegram</span>
            <FaTelegram className={style2.icon} />
          </Link>
        </motion.Link>
      </div>
    </motion.div>
  );
};

export default Header;
