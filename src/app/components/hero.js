import { IoLogoHtml5 } from "react-icons/io";
import { VscJson } from "react-icons/vsc";
import { VscInfo } from "react-icons/vsc";
import { DiJavascript1 } from "react-icons/di";
import { BsTextLeft } from "react-icons/bs";
import Home from "./hero/home";
import About from "./hero/about";
import Work from "./hero/work";
import Socials from "./hero/socials";
import Contact from "./hero/contact";
export default function Hero(props) {
  return (
    <div>
      <div className="fixed md:left-[19rem] left-[4rem] md:w-full w-[85%] overflow-x-auto top-8 bg-bgSecondary text-textPrimary">
        <ul className="flex md:text-sm text-xs">
          <li
            className={`flex p-1.5 hover:cursor-pointer hover:bg-bgPrimary ${
              props.content === "home"
                ? "bg-bgPrimary border-t border-[#689775] border-8"
                : ""
            }}`}
            onClick={() => {
              props.setContent("home");
            }}
          >
            <IoLogoHtml5 className="md:my-1 md:mr-1 m-1 my-0.5 text-red-500" />
            <span className="">home.html</span>
          </li>
          <li
            className={`flex  p-1.5 hover:cursor-pointer hover:bg-bgPrimary ${
              props.content === "about"
                ? "bg-bgPrimary border-t border-[#689775]"
                : ""
            }`}
            onClick={() => {
              props.setContent("about");
            }}
          >
            <VscInfo className="md:my-1 md:mr-1 m-1 my-0.5 text-blue-600" />
            <span>about.md</span>
          </li>
          <li
            className={`flex  p-1.5 hover:cursor-pointer hover:bg-bgPrimary ${
              props.content === "work"
                ? "bg-bgPrimary border-t border-[#689775]"
                : ""
            }`}
            onClick={() => {
              props.setContent("work");
            }}
          >
            <DiJavascript1 className="md:my-1 md:mr-1 m-1 my-0.5 text-yellow-300" />
            <span>work.js</span>
          </li>
          <li
            className={`flex  p-1.5 hover:cursor-pointer hover:bg-bgPrimary ${
              props.content === "socials"
                ? "bg-bgPrimary border-t border-[#689775]"
                : ""
            }`}
            onClick={() => {
              props.setContent("socials");
            }}
          >
            <VscJson className="md:my-1 md:mr-1 m-1 my-0.5 text-yellow-300" />
            <span>socials.json</span>
          </li>
          <li
            className={`flex  p-1.5 hover:cursor-pointer hover:bg-bgPrimary ${
              props.content === "contact"
                ? "bg-bgPrimary border-t border-[#689775]"
                : ""
            }`}
            onClick={() => {
              props.setContent("contact");
            }}
          >
            <BsTextLeft className="md:my-1 md:mr-1 m-1 my-0.5 text-white" />
            <span>contact.txt</span>
          </li>
        </ul>
      </div>
      {props.content === "home" ? (
        <Home content={props.content} setContent={props.setContent} />
      ) : (
        ""
      )}
      {props.content === "about" ? (
        <About content={props.content} setContent={props.setContent} />
      ) : (
        ""
      )}
      {props.content === "work" ? (
        <Work content={props.content} setContent={props.setContent} />
      ) : (
        ""
      )}
      {props.content === "socials" ? (
        <Socials content={props.content} setContent={props.setContent} />
      ) : (
        ""
      )}
      {props.content === "contact" ? (
        <Contact content={props.content} setContent={props.setContent} />
      ) : (
        ""
      )}
    </div>
  );
}
