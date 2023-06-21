import { BsDashLg } from "react-icons/bs";
import { TiTabsOutline } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between bg-[#121c2b]">
        <ul className="flex text-sm my-1.5">
          <li className="mx-2 hover:cursor-pointer">File</li>
          <li className="mx-2 hover:cursor-pointer">Edit</li>
          <li className="mx-2 hover:cursor-pointer">View</li>
          <li className="mx-2 hover:cursor-pointer">Go</li>
          <li className="mx-2 hover:cursor-pointer">Run</li>
          <li className="mx-2 hover:cursor-pointer">Terminal</li>
          <li className="mx-2 hover:cursor-pointer">Help</li>
        </ul>
        <div className="flex mx-3  my-1.5">
          <BsDashLg className="text-xl hover:cursor-pointer" />
          <TiTabsOutline className="mx-4 text-xl hover:cursor-pointer" />
          <RxCross2 className="text-xl hover:cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-center -mt-7">
        Madhavi Gupta - Visual Studio Code
      </div>
      <hr className="border-black border-1"/>
    </div>
  );
}
