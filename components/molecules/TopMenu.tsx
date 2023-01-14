import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const TopMenu = (props: Props) => {
  return (
    <nav className="flex lg:flex-row flex-col max-w-[1170px] mx-auto lg:py-3 justify-start items-start gap-2 p-2 lg:justify-between lg:items-center">
      <motion.ul
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex gap-4 w-full justify-between lg:w-6/12 text-[14px]"
      >
        <li className=" text-secondary hidden lg:block hover:text-black transition-all hover:scale-105">
          <Link href="#">Chat with us</Link>
        </li>
        <li>
          <Link href="https://wa.me/6287880807693">+62 878 8080 7693</Link>
        </li>
        <li>
          <p>info@cikandeindobaja.co.id</p>
        </li>
      </motion.ul>
      <motion.ul
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex gap-4 text-[14px] justify-between w-full lg:w-3/12 text-secondary "
      >
        <li className="hover:text-black transition-all hover:scale-105">
          <Link href="#">Artikel</Link>
        </li>
        <li className="hover:text-black transition-all hover:scale-105">
          <Link href="#">Tentang Kami</Link>
        </li>
        <li className="hover:text-black transition-all hover:scale-105">
          <Link href="#">Karir</Link>
        </li>
      </motion.ul>
    </nav>
  );
};

export default TopMenu;
