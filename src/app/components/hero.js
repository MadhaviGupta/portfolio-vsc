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
      <div className="fixed top-8 left-80 w-full">
        <ul className="flex text-sm bg-[#191b20] -ml-4">
          <li
            className={`flex p-1.5 hover:cursor-pointer hover:bg-[#14161a] ${
              props.content === "home"
                ? "bg-[#14161a] border-t border-[#689775]"
                : ""
            }}`}
          >
            <IoLogoHtml5 className="my-1 mr-1 text-red-500" />
            <span
              onClick={() => {
                props.setContent("home");
              }}
            >
              home.html
            </span>
          </li>
          <hr className="border-black" />
          <li
            className={`flex p-1.5 hover:cursor-pointer hover:bg-[#14161a] ${
              props.content === "about"
                ? "bg-[#14161a] border-t border-[#689775]"
                : ""
            }`}
          >
            <VscInfo className="my-1 mr-1 text-blue-600" />
            <span
              onClick={() => {
                props.setContent("about");
              }}
            >
              about.md
            </span>
          </li>
          <li
            className={`flex p-1.5 hover:cursor-pointer hover:bg-[#14161a] ${
              props.content === "work"
                ? "bg-[#14161a] border-t border-[#689775]"
                : ""
            }`}
          >
            <DiJavascript1 className="my-1 mr-1 text-yellow-300" />
            <span
              onClick={() => {
                props.setContent("work");
              }}
            >
              work.js
            </span>
          </li>
          <li
            className={`flex p-1.5 hover:cursor-pointer hover:bg-[#14161a] ${
              props.content === "socials"
                ? "bg-[#14161a] border-t border-[#689775]"
                : ""
            }`}
          >
            <VscJson className="my-1 mr-1 text-yellow-300" />
            <span
              onClick={() => {
                props.setContent("socials");
              }}
            >
              socials.json
            </span>
          </li>
          <li
            className={`flex p-1.5 hover:cursor-pointer hover:bg-[#14161a] ${
              props.content === "contact"
                ? "bg-[#14161a] border-t border-[#689775]"
                : ""
            }`}
          >
            <BsTextLeft className="my-1 mr-1 text-white" />
            <span
              onClick={() => {
                props.setContent("contact");
              }}
            >
              contact.txt
            </span>
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
