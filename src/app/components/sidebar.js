import { BsCodeSlash } from "react-icons/bs";
import { VscFiles } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
export default function Sidebar() {
  return (
    <div className="flex flex-col text-3xl text-slate-400">
      <div className="h-10/12 justify-between">
        <VscFiles className="mx-4 my-4" />
        <BsCodeSlash className="mx-4 my-7" />
        <AiOutlineMail className="mx-4 my-7" />
      </div>
      <div className="absolute bottom-0">
        <VscAccount className="m-4" />
      </div>
    </div>
  );
}
