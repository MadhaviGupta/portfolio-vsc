import { BsCodeSlash } from "react-icons/bs";
import { VscFiles } from "react-icons/vsc";
import { VscAccount, VscFeedback } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
export default function Sidebar(props) {
  return (
    <div className="flex flex-col text-3xl text-slate-400 pt-8 fixed min-h-screen">
      <div className="h-10/12 justify-between">
        <VscFiles
          className={`mx-4 my-6 cursor-pointer ${
            props.content == "home" ? "text-white" : "text-slate-400"
          }`}
          onClick={() => props.setContent("home")}
        />
        <BsCodeSlash
          className={`mx-4 my-6 cursor-pointer ${
            props.content == "work" ? "text-white" : "text-slate-400"
          }`}
          onClick={() => props.setContent("work")}
        />
        <AiOutlineMail
          className={`mx-4 my-6 cursor-pointer ${
            props.content == "socials" ? "text-white" : "text-slate-400"
          }`}
          onClick={() => props.setContent("socials")}
        />
        <VscAccount
          className={`mx-4 my-6 cursor-pointer ${
            props.content == "about" ? "text-white" : "text-slate-400"
          }`}
          onClick={() => props.setContent("about")}
        />
        <div className="absolute bottom-0">

        <VscFeedback
          className={`mx-4 my-6 cursor-pointer ${
            props.content == "contact" ? "text-white" : "text-slate-400"
          }`}
          onClick={() => props.setContent("contact")}
          />
          </div>
      </div>
    </div>
  );
}
