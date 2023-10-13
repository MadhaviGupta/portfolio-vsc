import Image from "next/image";
import texttools from "../../../../public/images/texttools.png";
import vscportfolio from "../../../../public/images/vscportfolio.png";
import portfolio from "../../../../public/images/portfolio.png";
import gitshow from "../../../../public/images/gitshow.png";
import { VscGithub, VscLinkExternal } from "react-icons/vsc";
import { MdPlayArrow } from "react-icons/md";

const workContent = [
  {
    id: 1,
    name: "GitShow",
    img: gitshow,
    desc: "A platform for programmers, to showcase their projects hosted on the GitHub.",
    githubLink: "https://github.com/MadhaviGupta/GitShow",
    liveLink: "https://gitshowbysmg.vercel.app/",
    language: "React.js",
    style: "Tailwind CSS",
    api: "GitHub API",
  },
  {
    id: 2,
    name: "Portfolio VSC",
    img: vscportfolio,
    desc: "A portfolio showing my skills and creations via a VS Code-inspired theme.",
    githubLink: "https://github.com/MadhaviGupta/portfolio-vsc",
    liveLink: "https://madhavigupta.vercel.app/",
    language: "Next.js",
    style: "Tailwind CSS",
    api: "",
  },
  {
    id: 3,
    name: "Text-Tools",
    img: texttools,
    desc: "A versatile online platform for seamless text manipulation and analysis.",
    githubLink: "https://github.com/MadhaviGupta/Text-Tools",
    liveLink: "https://text-tools-madhavi.vercel.app/",
    language: "React.js",
    style: "Bootstrap",
    api: "",
  },
  {
    id: 4,
    name: "Portfolio V1",
    img: portfolio,
    desc: "A user-friendly portfolio website showcasing my skills and projects.",
    githubLink: "https://github.com/MadhaviGupta/Portfolio",
    liveLink: "https://madhavi-gupta.vercel.app/",
    language: "React.js",
    style: "Material UI",
    api: "",
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
            className="flex flex-col bg-[#1a1c22] hover:shadow-lg hover:shadow-subtext/20 transition-all duration-500 ease-in-out bg-opacity-90 rounded-lg min-w-min md:w-[28%] w-3/4 p-6 m-4"
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
            <div className="tracking-wide text-sm mt-2 text-subtext">{data.desc}</div>
            <ul className="my-4 text-md text-subtext flex flex-wrap justify-start">
              {data.language && (
                <li className="flex justify-start">
                  <MdPlayArrow className="m-1" />
                  {data.language}
                </li>
              )}
              {data.style && (
                <li className="flex justify-start">
                  <MdPlayArrow className="m-1" />
                  {data.style}
                </li>
              )}
              {data.api && (
                <li className="flex justify-start">
                  <MdPlayArrow className="m-1" />
                  {data.api}
                </li>
              )}
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
