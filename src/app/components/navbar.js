import { BsDashLg } from "react-icons/bs";
import { TiTabsOutline } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { SiVisualstudiocode } from "react-icons/si";
export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between text-[#ffffff] bg-[#191b20] z-50 fixed top-0 w-full">
        <ul className="flex my-1.5">
          <SiVisualstudiocode className="mx-1.5 my-0.5 text-lg text-blue-400" />
          <div className="md:flex hidden">
            <li className="mx-2 hover:cursor-pointer text-sm">File</li>
            <li className="mx-2 hover:cursor-pointer text-sm">Edit</li>
            <li className="mx-2 hover:cursor-pointer text-sm">View</li>
            <li className="mx-2 hover:cursor-pointer text-sm">Go</li>
            <li className="mx-2 hover:cursor-pointer text-sm">Run</li>
            <li className="mx-2 hover:cursor-pointer text-sm">Terminal</li>
            <li className="mx-2 hover:cursor-pointer text-sm">Help</li>
          </div>
        </ul>
        <div className="flex justify-center items-center ml-4 md:ml-10">
          Madhavi Gupta - Visual Studio Code
        </div>
        <div className="flex mx-3  my-1.5">
          <BsDashLg className="md:text-xl text-lg hover:cursor-pointer" />
          <TiTabsOutline className="md:mx-4 mx-2 md:text-xl text-lg hover:cursor-pointer" />
          <RxCross2 className="md:text-xl text-lg hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
