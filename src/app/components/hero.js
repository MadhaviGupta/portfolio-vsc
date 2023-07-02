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
      <div className="md:fixed relative sm:top-8 md:left-80 sm:left-20 w-full top-8 left-20">
        <ul className="flex md:text-sm text-xs bg-[#22252c] -ml-4">
          <li
            className={`flex p-1.5 hover:cursor-pointer hover:bg-[#14161a] ${
              props.content === "home"
                ? "bg-[#14161a] border-t border-[#689775]"
                : ""
            }}`}
            onClick={() => {
              props.setContent("home");
            }}
          >
            <IoLogoHtml5 className="my-1 mr-1 text-red-500" />
            <span>home.html</span>
          </li>
          <li
            className={`flex mx-1 p-1.5 hover:cursor-pointer hover:bg-[#14161a] ${
              props.content === "about"
                ? "bg-[#14161a] border-t border-[#689775]"
                : ""
            }`}
            onClick={() => {
              props.setContent("about");
            }}
          >
            <VscInfo className="my-1 mr-1 text-blue-600" />
            <span>about.md</span>
          </li>
          <li
            className={`flex p-1.5 hover:cursor-pointer hover:bg-[#14161a] ${
              props.content === "work"
                ? "bg-[#14161a] border-t border-[#689775]"
                : ""
            }`}
            onClick={() => {
              props.setContent("work");
            }}
          >
            <DiJavascript1 className="my-1 mr-1 text-yellow-300" />
            <span>work.js</span>
          </li>
          <li
            className={`flex p-1.5 hover:cursor-pointer hover:bg-[#14161a] ${
              props.content === "socials"
                ? "bg-[#14161a] border-t border-[#689775]"
                : ""
            }`}
            onClick={() => {
              props.setContent("socials");
            }}
          >
            <VscJson className="my-1 mr-1 text-yellow-300" />
            <span>socials.json</span>
          </li>
          <li
            className={`flex p-1.5 hover:cursor-pointer hover:bg-[#14161a] ${
              props.content === "contact"
                ? "bg-[#14161a] border-t border-[#689775]"
                : ""
            }`}
            onClick={() => {
              props.setContent("contact");
            }}
          >
            <BsTextLeft className="my-1 mr-1 text-white" />
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
