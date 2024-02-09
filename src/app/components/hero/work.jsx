import Image from "next/image";
import texttools from "../../../../public/images/texttools.png";
import vscportfolio from "../../../../public/images/vscportfolio.png";
import greenkart from "../../../../public/images/greenkart.png";
import gitshow from "../../../../public/images/gitshow.png";
import tictactoe from "../../../../public/images/tictactoe.png";
import { VscGithub, VscLinkExternal } from "react-icons/vsc";
import { MdPlayArrow } from "react-icons/md";

const workContent = [
  {
    id: 1,
    name: "GreenKart",
    img: greenkart,
    desc: "An eco-friendly e-commerce application for a sustainable future. (Under development)",
    githubLink: "https://github.com/SujalSamai/Greenkart",
    liveLink: "https://greenkart.vercel.app/",
    techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Firebase", "Stripe"],
  },
  {
    id: 2,
    name: "GitShow",
    img: gitshow,
    desc: "A platform for programmers, to showcase their projects hosted on the GitHub.",
    githubLink: "https://github.com/MadhaviGupta/GitShow",
    liveLink: "https://gitshowbysmg.vercel.app/",
    techStack: ["React.js", "Tailwind CSS", "GitHub API", "Firebase"],
  },
  {
    id: 3,
    name: "Portfolio VSC",
    img: vscportfolio,
    desc: "A portfolio showing my skills and creations via a VS Code-inspired theme.",
    githubLink: "https://github.com/MadhaviGupta/portfolio-vsc",
    liveLink: "https://madhavigupta.vercel.app/",
    techStack: ["Next.js", "Tailwind CSS"],
  },
  {
    id: 4,
    name: "Text-Tools",
    img: texttools,
    desc: "A versatile online platform for seamless text manipulation and analysis.",
    githubLink: "https://github.com/MadhaviGupta/Text-Tools",
    liveLink: "https://text-tools-madhavi.vercel.app/",
    techStack: ["React.js", "Bootstrap"],
  },
  {
    id: 5,
    name: "Tic Tac toe",
    img: tictactoe,
    desc: "A Java-based implementation of the classic Tic Tac Toe game for two players.",
    githubLink: "https://github.com/MadhaviGupta/tic-tac-toe",
    techStack: ["Java"],
  },
];

export default function Work() {
  return (
    <div className="pt-20 md:pl-80 pl-20 text-textPrimary">
      <div className="md:text-2xl text-lg font-bold flex md:m-6 m-3">
        Projects I&apos;ve built so far.
      </div>
      <div className="flex flex-wrap">
        {workContent.map((data) => (
          <div
            key={data.id}
            className="flex flex-col bg-[#1a1c22] hover:shadow-lg hover:shadow-subText/20 transition-all duration-500 ease-in-out bg-opacity-90 rounded-lg min-w-min md:w-[28%] w-3/4 p-6 m-4"
          >
            <div className="flex justify-center">
              <Image
                src={data.img}
                width={140}
                height={140}
                className="rounded-lg w-6/12"
                alt="img"
              />
            </div>
            <div className="font-bold text-xl mr-2 my-2 text-mainText">
              {data.name}
            </div>
            <hr className="border-1 w-full mb-2" />
            <div className="tracking-wide text-sm mt-2 text-subText">
              {data.desc}
            </div>
            <ul className="my-4 text-md text-mainText flex flex-wrap justify-start">
              {data &&
                data.techStack.map((dataItem) => (
                  <li className="flex justify-start" key={dataItem.id}>
                    <MdPlayArrow className="m-1" />
                    {dataItem}
                  </li>
                ))}
            </ul>
            <div className="flex justify-start text-2xl">
              <a href={data.githubLink} target="_blank">
                <VscGithub className="m-2 hover:text-mainText" />
              </a>
              <a href={data.liveLink} target="_blank">
                <VscLinkExternal className="m-2 hover:text-mainText" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
