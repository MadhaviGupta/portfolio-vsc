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
    <div className="pt-14 md:pl-80 pl-24">
      <div className="md:text-2xl text-lg font-bold flex m-6">
        Projects I&apos;ve built so far.
      </div>
      <div className="flex flex-wrap">
        {workContent.map((data) => (
          <div
            key={data.id}
            className="flex flex-col bg-[#1a1c22] hover:shadow-lg hover:shadow-green-600/10 bg-opacity-90 rounded-lg md:w-1/4 sm:w-3/4 w-auto p-6 m-4"
          >
            <div className="flex justify-center">
              <Image
                src={data.img}
                width={160}
                height={160}
                className="rounded-lg w-9/12"
                alt="img"
              />
            </div>
            <div className="font-bold text-xl mr-2 my-2 text-[#fa6c5f]">
              {data.name}
            </div>
            <hr className="border-1 w-full mb-2" />
            <div className="text-sm text-[#689775]">{data.desc}</div>
            <ul className="my-4 text-md text-[#689775] flex flex-wrap justify-start">
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
            <div className="flex justify-center text-2xl">
              <a href={data.githubLink} target="_blank">
                <VscGithub className="m-2 hover:text-[#fa6c5f]" />
              </a>
              <a href={data.liveLink} target="_blank">
                <VscLinkExternal className="m-2 hover:text-[#fa6c5f]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
