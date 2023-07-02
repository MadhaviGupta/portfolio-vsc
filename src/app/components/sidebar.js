import { BsCodeSlash } from "react-icons/bs";
import { VscFiles } from "react-icons/vsc";
import { VscAccount, VscFeedback } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
export default function Sidebar(props) {
  return (
    <div className="flex flex-col text-3xl text-slate-400 pt-8 fixed min-h-screen bg-[#191b20] md:bg-[#14161a]">
      <div className="h-10/12 justify-between">
        <div
          className={`mx-4 my-6 cursor-pointer ${
            props.content == "home" ? "text-white" : "text-slate-400"
          }`}
          onClick={() => props.setContent("home")}
        >
          <VscFiles className="mx-1" />
          <div className="text-xs my-1 md:hidden">Home</div>
        </div>
        <div
          className={`mx-4 my-6 cursor-pointer ${
            props.content == "work" ? "text-white" : "text-slate-400"
          }`}
          onClick={() => props.setContent("work")}
        >
          <BsCodeSlash className="mx-1" />
          <div className="text-xs my-1 mx-1 md:hidden">Work</div>
        </div>
        <div
          className={`mx-4 my-6 cursor-pointer ${
            props.content == "socials" ? "text-white" : "text-slate-400"
          }`}
          onClick={() => props.setContent("socials")}
        >
          <AiOutlineMail className="mx-1" />
          <div className="text-xs my-1 mx-1 md:hidden">Social</div>
        </div>
        <div
          className={`mx-4 my-6 cursor-pointer ${
            props.content == "about" ? "text-white" : "text-slate-400"
          }`}
          onClick={() => props.setContent("about")}
        >
          <VscAccount className="mx-1" />
          <div className="text-xs my-1 mx-1 md:hidden">About</div>
        </div>
        <div className="absolute bottom-0">
          <div
            className={`mx-4 my-6 cursor-pointer ${
              props.content == "contact" ? "text-white" : "text-slate-400"
            }`}
            onClick={() => props.setContent("contact")}
          >
            <VscFeedback className="mx-1" />
            <div className="text-xs my-1 md:hidden">Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
}
