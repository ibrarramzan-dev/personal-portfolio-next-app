import React from "react";
import { FaGithub, FaTelegram, FaLinkedin, FaHeart } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import style from "@/styles/footer.module.scss";
import Link from "next/link";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className={style.footer}>
      <h1>CONNECT WITH ME</h1>
      <div className={style.links}>
        <Link className={style.social} href="https://github.com/DclMonster">
          <span>Github</span>
          <FaGithub className={style.icon} />
        </Link>
        <Link
          className={style.social}
          href="https://www.linkedin.com/in/trevor-powell-19945a255/"
        >
          <span>LinkedIn</span>
          <FaLinkedin className={style.icon} />
        </Link>
        <Link className={style.social} href="https://google.com/">
          <span>Twitter</span>
          <BsTwitterX className={style.icon} />
        </Link>
        <Link className={style.social} href="https://google.com/">
          <span>Telegram</span>
          <FaTelegram className={style.icon} />
        </Link>
      </div>
      <Link
        href="mailto:trevorpowell1@yahoo.com"
        style={{ textDecoration: "none" }}
      >
        <div className={style.shoot}>
          <span>SHOOT ME A MAIL</span>
          <MdAttachEmail />
        </div>
      </Link>{" "}
      <div className={style.mainfooter}>
        <p>
          Built From Scratch with
          <span>
            <FaHeart className={style.hearticon} />{" "}
          </span>
          &copy; Copyright {new Date().getFullYear()}. Monster Programming. All
          Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
