import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type TeamList = {
  id: number;
  title: string;
  name: string;
  image: string;
  desc: string;
  handphone: string;
};

type Props = {
  teams: TeamList[];
};

const Team = ({ teams }: Props) => {
  const [team, setTeam] = useState<TeamList[]>([]);

  return (
    <>
      {teams.map((v: TeamList, index: number) => {
        return (
          <div
            key={index}
            className="items-center hover:scale-110 ease-out duration-200 flex flex-col bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
          >
            <figure className="w-[300px] h-[300px] bg-white overflow-hidden relative rounded-2xl">
              <Image
                className="w-full object-cover absolute -top-[100px]"
                src={v.image}
                alt={`Cover Photo of ${v.name}`}
                width={400}
                height={300}
              />
            </figure>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">{v.name}</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                {v.title}
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                {v.desc}
              </p>
              <Link href={v.handphone}>
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
