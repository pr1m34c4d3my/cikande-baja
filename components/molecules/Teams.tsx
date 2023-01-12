import React, { useEffect, useState } from "react";
import Team, { TeamList } from "../atoms/Team";

type Props = {};

const Teams = (props: Props) => {
  const [team, setTeam] = useState<TeamList[]>([]);

  const teams = () => {
    const list: TeamList[] = [
      {
        id: 1,
        title: "Sales 1",
        name: "Susi",
        image: `https://media.graphassets.com/5Htz4JWfSezln53RpIzG?_gl=1*14hs339*_ga*MjA5MTM2NzkzLjE2NzI5MDM4MTA.*_ga_G6FYGSYGZ4*MTY3Mjk5MjM5Ny43LjEuMTY3Mjk5MjQwNS41Mi4wLjA.`,
        desc: "Hubungi Sales Agent Susi untuk pertanyaan lebih lanjut",
        handphone: "https://wa.me/628176329842",
      },
      {
        id: 2,
        title: "Sales 2",
        name: "Nuraini",
        image:
          "https://media.graphassets.com/HdFZcks8TYSr8jHzlcwy?_gl=1*1qgbwz4*_ga*MjA5MTM2NzkzLjE2NzI5MDM4MTA.*_ga_G6FYGSYGZ4*MTY3Mjk5MjM5Ny43LjEuMTY3Mjk5MjQwNS41Mi4wLjA.",
        desc: "Hubungi Sales Agent Nuraini untuk pertanyaan lebih lanjut",
        handphone: "https://wa.me/6281218957059",
      },
      {
        id: 3,
        title: "Sales 3",
        name: "Najiah",
        image:
          "https://media.graphassets.com/wAU6siNLT76jo7kdGka3?_gl=1*14hs339*_ga*MjA5MTM2NzkzLjE2NzI5MDM4MTA.*_ga_G6FYGSYGZ4*MTY3Mjk5MjM5Ny43LjEuMTY3Mjk5MjQwNS41Mi4wLjA.",
        desc: "Hubungi Sales Agent Najjah untuk pertanyaan lebih lanjut",
        handphone: "https://wa.me/6285890311170",
      },
    ];
    setTeam(list);
  };

  useEffect(() => {
    teams();
  }, []);
  return (
    <>
      <div className="py-8 flex flex-col px-4 mx-auto max-w-[1170px] lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-[32px] tracking-tight font-extrabold text-gray-900 dark:text-white">
            Team Sales
          </h2>
          <p className="font-light text-gray-500 dark:text-gray-400">
            Cari tahu mana besi baja yang anda inginkan dengan menghubungi tim
            sales kami yang profesional
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {team.map((v: TeamList) => (
            <div key={v.id} className="flex">
              <Team
                teams={[
                  {
                    id: v.id,
                    title: v.title,
                    name: v.name,
                    image: v.image,
                    desc: v.desc,
                    handphone: v.handphone,
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
