import { IoLogoHtml5 } from "react-icons/io";
import { VscJson } from "react-icons/vsc";
import { VscInfo } from "react-icons/vsc";
import { DiJavascript1 } from "react-icons/di";
import { BsTextLeft } from "react-icons/bs";
import Home from "./home";
import About from "./about";
import Work from "./work";
import Socials from "./socials";
import Contact from "./contact";
export default function Hero(props) {
  return (
    <div>
      <div className="fixed top-8 left-80">
        <ul className="flex text-sm bg-[#121c2b] -ml-4">
          <li
            className={`flex p-1.5 hover:cursor-pointer hover:bg-[#131922] ${
              props.content === "home"
                ? "bg-[#1B2430] border-t border-white"
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
            className={`flex p-1.5 hover:cursor-pointer hover:bg-[#131922] ${
              props.content === "about"
                ? "bg-[#1B2430] border-t border-white"
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
            className={`flex p-1.5 hover:cursor-pointer hover:bg-[#131922] ${
              props.content === "work"
                ? "bg-[#1B2430] border-t border-white"
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
            className={`flex p-1.5 hover:cursor-pointer hover:bg-[#131922] ${
              props.content === "socials"
                ? "bg-[#1B2430] border-t border-white"
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
            className={`flex p-1.5 hover:cursor-pointer hover:bg-[#131922] ${
              props.content === "contact"
                ? "bg-[#1B2430] border-t border-white"
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
