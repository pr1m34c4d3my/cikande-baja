import React, { useEffect, useState } from "react";
import Team, { TeamList } from "../atoms/Team";

type Team = {
  name: string;
  phoneNumber: string;
  image?: any;
};

type Props = {
  teams: Team[];
};

const Teams = ({ teams }: Props) => {
  return (
    <>
      <div className="py-8 flex flex-col justify-start items-start px-4 mx-auto max-w-[1170px] lg:py-16 lg:px-6 ">
        <div className=" max-w-screen-sm mb-8 lg:mb-16">
          <h2 className="mb-4 text-[32px] tracking-tight font-extrabold text-gray-900">
            Team Sales
          </h2>
          <p className="font-light text-gray-500 dark:text-gray-400">
            Cari tahu mana besi baja yang anda inginkan dengan menghubungi tim
            sales kami yang profesional
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {teams.map((v: any, i: number) => (
            <div key={i} className="flex">
              <Team
                teams={[
                  {
                    id: v.id,
                    name: v.name,
                    image: v.image,
                    phoneNumber: v.phoneNumber,
                  },
                ]}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Teams;
