import { IoLogoHtml5 } from "react-icons/io";
import { VscJson } from "react-icons/vsc";
import { VscInfo } from "react-icons/vsc";
import { DiJavascript1 } from "react-icons/di";
import { BsTextLeft } from "react-icons/bs";
export default function Explorer(props) {
  return (
    <div className="md:flex hidden flex-col bg-bgSecondary w-60 md:min-w-80 md:min-h-screen fixed top-0 md:left-16 md:pt-8 bottom-0 text-textPrimary">
      <div className="justify-between pr-10 p-3">
        <div className="tracking-wider text-lg">EXPLORER</div>
        <div>
          <details className="my-3" open>
            <summary className="text-sm tracking-wider hover:cursor-pointer">
              PORTFOLIO
            </summary>
            <ul className="text-sm mt-3 pl-3">
              <li
                className={`flex my-2 p-0.5 hover:cursor-pointer ${
                  props.content === "home" ? "bg-[#282f38] text-subText" : ""
                }`}
                onClick={() => props.setContent("home")}
              >
                <IoLogoHtml5 className="my-1 mr-1 text-red-500" />
                <span>home.html</span>
              </li>
              <li
                className={`flex my-2 p-0.5 hover:cursor-pointer ${
                  props.content === "about" ? "bg-[#282f38] text-subText" : ""
                }`}
                onClick={() => props.setContent("about")}
              >
                <VscInfo className="my-1 mr-1 text-blue-600" />
                <span>about.md</span>
              </li>
              <li
                className={`flex my-2 p-0.5 hover:cursor-pointer ${
                  props.content === "work" ? "bg-[#282f38] text-subText" : ""
                }`}
                onClick={() => props.setContent("work")}
              >
                <DiJavascript1 className="my-1 mr-1 text-yellow-300" />
                <span>work.js</span>
              </li>
              <li
                className={`flex my-2 p-0.5 hover:cursor-pointer ${
                  props.content === "socials" ? "bg-[#282f38] text-subText" : ""
                }`}
                onClick={() => props.setContent("socials")}
              >
                <VscJson className="my-1 mr-1 text-yellow-300" />
                <span>socials.json</span>
              </li>
              <li
                className={`flex my-2 p-0.5 hover:cursor-pointer ${
                  props.content === "contact" ? "bg-[#282f38] text-subText" : ""
                }`}
                onClick={() => props.setContent("contact")}
              >
                <BsTextLeft className="my-1 mr-1 text-white" />
                <span>contact.txt</span>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
}
