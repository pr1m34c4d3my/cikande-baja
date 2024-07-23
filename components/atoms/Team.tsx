import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type TeamList = {
  id: string;
  name: string;
  image?: string;
  phoneNumber: string;
};

type Props = {
  teams: TeamList[];
};

const Team = ({ teams }: Props) => {
  return (
    <>
      {teams.map((v: TeamList, index: number) => {
        return (
          <div
            key={index}
            className="items-center hover:scale-110 ease-out duration-200 flex flex-col bg-gray-50 rounded-lg shadow sm:flex dark:border-gray-700"
          >
            <div className="p-5">
              <span className="text-gray-500 dark:text-gray-400">{v.name}</span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Hubungi Sales Agent Kami untuk pertanyaan lebih lanjut
              </p>
              <Link href={`https://wa.me/${v.phoneNumber}`} target="_blank">
                <button className="w-[120px] h-[30px] text-[12px] bg-main rounded-xl hover:bg-white hover:scale-110 hover:text-main transition-all text-white font-bold mt-5">
                  Hubungi Kami
                </button>
              </Link>
              <ul className="flex space-x-4 sm:mt-0">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Team;
